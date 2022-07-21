import { createContext, useEffect, useState } from "react";
import {
	fetchBuyers,
	fetchItem,
	fetchSummary,
	fetchTransaction,
} from "../utils/dataFetchers";

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
	const [showToast, setShowToast] = useState({
		toastMessage:
			"Due to stock shortage customer now can only buy 1 (one) kind of item in a transaction per day. We are really sorry for the inconvenience. As compensation, please kindly take our offering of Free Shipment. Sincerely yours, The Island Shop.",
		eventType: "danger",
	});

	useEffect(() => {
		countTotalPrice(orderedItem);
		if (orderedItem.length === 0) setTotalPrice(null);
	}, [orderedItem]);
	// CURRENT BUYER

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
		let duplicateOrdered = [...orderedItem];

		if (duplicateOrdered.length < 1) {
			setOrderedItem([newItem]);
		} else {
			// if there's same item then only add the qty of the item
			let isSame;
			let newOrderedItem = duplicateOrdered.map((oldItem) => {
				if (oldItem.name === newItem.name) {
					oldItem.qty++;
					isSame = true;
					return oldItem;
				} else {
					return oldItem;
				}
			});

			if (isSame) {
				setOrderedItem([...newOrderedItem]);
			} else setOrderedItem([...newOrderedItem, newItem]);
		}

		// make new object to add quantity and price for item
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
				totalPrice: item.priceInTotal.price,
			};
		});

		const submittedDetails = {
			details: [...selectedDetails],
			buyer: orderedItem[0].buyerName,
		};

		const transactionData = await fetchTransaction();

		// loop through array then filter to find same user transaction history

		// const buyerItem = transactionData
		// 	.map((transaction) =>
		// 		transaction.filter(
		// 			(transaction) => transaction.buyer === submittedDetails.buyer
		// 		)
		// 	)
		// 	.filter((data) => data.length > 0)[0];

		// flatten array first then filter immediately to get buyer history
		const buyerItem = transactionData
			.flat(2)
			.filter((transaction) => transaction.buyer === submittedDetails.buyer);

		// get duplicates in buyer history
		const duplicatedItem = submittedDetails.details
			.map((detail) =>
				buyerItem.filter((item) => item.itemName === detail.itemName)
			)
			.filter((duplicate) => duplicate.length > 0)
			.flat();

		console.log(duplicatedItem);
	};

	const dataSetter = () => {
		fetchBuyers().then((data) => setBuyerList(data));
		fetchItem().then((data) => setItemList(data));
		fetchTransaction().then((data) => setTransactions(data));
		fetchSummary().then((data) => setSummary(data));
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
