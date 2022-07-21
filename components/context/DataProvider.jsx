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

	const [currentBuyer, setCurrentBuyer] = useState({
		name: "Select",
		type: "regular",
	});

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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default DataProvider;
