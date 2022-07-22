import { createContext, useEffect, useState } from "react";
import { fetchBuyers, fetchItem } from "../utils/dataFetchers";
import { postSummary, postTransaction } from "../utils/dataPosters";
import { checkForDuplicate } from "../utils/checkForDuplicate";
import useProcessSummary from "../utils/useProcessSummary";

export const GlobalContext = createContext();

const DataProvider = ({ children }) => {
	// INITIAL ITEM DATA
	const [buyerList, setBuyerList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [transactions, setTransactions] = useState([]);
	const [summary, setSummary] = useState({});
	// INITIAL ITEM DATA

	// CURRENT BUYER
	const [currentBuyer, setCurrentBuyer] = useState({
		name: "Select Buyer",
		type: "regular",
	});
	// CURRENT BUYER

	// CART PROCESSING
	const [orderedItem, setOrderedItem] = useState([]);
	const [totalPrice, setTotalPrice] = useState(null);
	const [duplicateItem, setDuplicateItem] = useState([]);
	const [showSummary, setShowSummary] = useState(false);
	const [summaryData, setSummaryData] = useState({});
	const [showToast, setShowToast] = useState({
		toastMessage:
			"Due to stock shortage customer now can only buy 1 (one) kind of item in a transaction per day. We are really sorry for the inconvenience. As compensation, please kindly take our offering of Free Shipment. Sincerely yours, The Island Shop.",
		eventType: "danger",
	});

	useEffect(() => {
		countTotalPrice(orderedItem);
		if (orderedItem.length === 0) setTotalPrice(null);
		if (duplicateItem.length > 0) removeDuplicate();
	}, [orderedItem]);
	// CART PROCESSING

	// useEffect(() => {
	// 	useProcessSummary().then setSummaryData()
	// }, showSummary)

	useEffect(() => {
		setOrderedItem([]);
		setDuplicateItem([]);
		setTotalPrice(null);
	}, [currentBuyer]);

	// toaster setup
	const setupToast = (toastMessage, eventType) => {
		if (toastMessage === "") setShowToast("");
		setShowToast({ toastMessage, eventType });
	};

	// Fired in ProductItem's button
	const addItemToCart = (orderedItem, item, buyerType) => {
		// get price for certain type of buyer
		let priceInTotal = item.prices.filter(
			(item) => item.priceFor === buyerType
		);

		// if price for VIP or wholesale not found then return price for regular
		if (priceInTotal.length < 1) {
			priceInTotal = item.prices.filter((item) => item.priceFor === "regular");
		}

		// if price not found then item not added and showing error message
		if (priceInTotal.length < 1) {
			setupToast("Customer Type Does Not Match With Item", "danger");
			// exit function if price does not match
			return;
		}

		// if conditions on buyer's type fulfilled then add item to cart
		const newItem = {
			...item,
			buyerName: currentBuyer.name,
			qty: 1,
			initialPrice: priceInTotal[0].price,
			priceInTotal: {
				price: priceInTotal[0].price,
				priceFor: priceInTotal[0].priceFor,
			},
		};
		let newOrderedItem = [...orderedItem];

		if (newOrderedItem.length < 1) {
			setOrderedItem([newItem]);
		} else {
			// if there's same item then show error message
			let isSame = false;
			// check if there's same entry
			newOrderedItem.forEach((oldItem) => {
				if (oldItem.name === newItem.name) {
					setupToast("Item has already been added to Shopping Cart", "danger");
					isSame = true;
				}
			});

			// only set item when item is new
			if (!isSame) setOrderedItem([...newOrderedItem, newItem]);
		}
	};

	const countTotalPrice = (orderedItem) => {
		// formula for counting price
		const itemPrices = orderedItem.map((item) => item.initialPrice * item.qty);
		if (orderedItem.length > 0) {
			setTotalPrice(itemPrices.reduce((a, b) => a + b, 0));
		}
	};

	const countItemPrice = (selectedItem, action) => {
		const modifiedItem = orderedItem.map((currentItem, index) => {
			if (currentItem.name === selectedItem.name) {
				if (action === "subtract") {
					currentItem.qty--;
					currentItem.priceInTotal.price =
						currentItem.initialPrice * currentItem.qty;
				} else if (action === "add") {
					currentItem.qty++;
					currentItem.initialPrice * currentItem.qty;
				}
				if (currentItem.qty > 0) return currentItem;
			} else return currentItem;
		});

		setOrderedItem(modifiedItem.filter((item) => item !== undefined));
	};

	const handleTransaction = async () => {
		const selectedDetails = orderedItem.map((item) => {
			return {
				itemName: item.name,
				buyer: item.buyerName,
				qty: item.qty,
				totalPrice: item.initialPrice * item.qty,
				type: item.type,
			};
		});

		const submittedDetails = {
			details: [...selectedDetails],
			buyer: orderedItem[0].buyerName,
		};

		// returns array of duplicate items
		const duplicatedItem = await checkForDuplicate(submittedDetails);

		// if there is duplicate then store duplicate item and show error message
		if (duplicatedItem.length > 0) {
			setDuplicateItem(duplicatedItem);
			setupToast(
				"You've already bought this item today, please comeback tomorrow for the same item.",
				"danger"
			);
		} else {
			try {
				// post transaction data, then process summary
				// await postTransaction(submittedDetails.details);

				const { summaryObject } = await useProcessSummary();
				await postSummary(summaryObject);

				setShowSummary(true);
			} catch (error) {
				setupToast("Failed to connect to the Database, try again.", "danger");
			}
		}
	};

	const removeDuplicate = () => {
		const removedDuplicate = duplicateItem
			.map((duplicate) =>
				orderedItem.filter((item) => item.name === duplicate.itemName)
			)
			.flat()[0];

		if (!removedDuplicate) setDuplicateItem([]);
	};

	// runs on initial load
	const dataSetter = () => {
		fetchBuyers().then((data) => setBuyerList(data));
		fetchItem().then((data) => setItemList(data));
	};

	useEffect(() => {
		dataSetter();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				buyerList,
				itemList,
				transactions,
				summary,
				currentBuyer,
				setCurrentBuyer,
				addItemToCart,
				orderedItem,
				totalPrice,
				countItemPrice,
				setupToast,
				showToast,
				handleTransaction,
				duplicateItem,
				showSummary,
				setShowSummary,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
