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
	const [showToast, setShowToast] = useState({
		toastMessage: "",
		eventType: "",
	});

	useEffect(() => {
		countTotalPrice(orderedItem);
		if (orderedItem.length === 0) setTotalPrice(null);
	}, [orderedItem]);
	// CURRENT BUYER

	const addItemToCart = (orderedItem, item, buyerType) => {
		// get price for certain type of buyer
		let priceInTotal = item.prices.filter(
			(item) => item.priceFor === buyerType
		);

		// if price for VIP or wholesale not found then return price for regular
		if (priceInTotal.length < 1) {
			priceInTotal = item.prices.filter((item) => item.priceFor === "regular");
		}

		// make new object to add quantity and price for item
		const newItem = { ...item, qty: 1, priceInTotal: priceInTotal[0].price };
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
	};

	const setupToast = (toastMessage, eventType) => {
		if (toastMessage === "") setShowToast("");
		setShowToast({ toastMessage, eventType });
	};

	const countTotalPrice = (orderedItem) => {
		// formula for counting price
		const itemPrices = orderedItem.map(
			(item) => item.prices[0].price * item.qty
		);
		if (orderedItem.length > 0) {
			setTotalPrice(itemPrices.reduce((a, b) => a + b, 0));
		}
	};

	const countItemPrice = (selectedItem, action) => {
		const modifiedItem = orderedItem.map((currentItem, index) => {
			if (currentItem.name === selectedItem.name) {
				if (action === "subtract") {
					currentItem.qty--;
					currentItem.priceInTotal =
						currentItem.prices[0].price * currentItem.qty;
				} else if (action === "add") {
					currentItem.qty++;
					currentItem.priceInTotal =
						currentItem.prices[0].price * currentItem.qty;
				}
				if (currentItem.qty > 0) return currentItem;
			} else return currentItem;
		});

		setOrderedItem(modifiedItem.filter((item) => item !== undefined));
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
