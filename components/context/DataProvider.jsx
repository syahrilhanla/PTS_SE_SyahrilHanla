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

	// CART ITEMS
	const [orderedItem, setOrderedItem] = useState([]);

	useEffect(() => {
		console.log(orderedItem);
	}, [orderedItem]);
	// CURRENT BUYER

	const addItemToCart = (orderedItem, item) => {
		const newItem = { ...item, qty: 1 };
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
