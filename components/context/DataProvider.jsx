import { createContext, useEffect, useState } from "react";
import {
	fetchBuyers,
	fetchItem,
	fetchSummary,
	fetchTransaction,
} from "../utils/dataFetchers";

export const GlobalContext = createContext();

const DataProvider = ({ children }) => {
	// ITEM DATA

	const [buyerList, setBuyerList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [transactions, setTransactions] = useState([]);
	const [summary, setSummary] = useState({});

	// ITEM DATA

	// CURRENT BUYER
	const [currentBuyer, setCurrentBuyer] = useState({
		name: "Select",
		type: "regular",
	});
	// CURRENT BUYER

	// CART PROCESSING
	const [orderedItem, setOrderedItem] = useState([]);
	const [totalPrice, setTotalPrice] = useState("");

	useEffect(() => {
		countTotalPrice(orderedItem);
		console.log(orderedItem);
	}, [orderedItem]);
	// CURRENT BUYER

	const addItemToCart = (orderedItem, item) => {
		const newItem = { ...item, qty: 1, priceInTotal: item.prices[0].price };
		let duplicateOrdered = [...orderedItem];

		if (duplicateOrdered.length < 1) {
			setOrderedItem([newItem]);
		} else {
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
		const modifiedItem = orderedItem.map((currentItem) => {
			if (currentItem.name === selectedItem.name) {
				if (currentItem.qty >= 1) {
					if (action === "subtract") {
						currentItem.qty--;
						currentItem.priceInTotal =
							currentItem.prices[0].price * currentItem.qty;
					} else if (action === "add") {
						currentItem.qty++;
						currentItem.priceInTotal =
							currentItem.prices[0].price * currentItem.qty;
					}
					return currentItem;
				} else {
					return;
					// return nothing or delete it
				}
			} else return currentItem;
		});

		setOrderedItem(modifiedItem);
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
