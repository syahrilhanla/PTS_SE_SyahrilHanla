import { useEffect, useState } from "react";
import { fetchTransaction } from "./dataFetchers";
import { getBestSellingItem } from "./getBestSellings";

const useGetTransaction = async () => {
	const [transactionData, setTransactionData] = useState([]);

	const processSummary = (transactionData) => {
		const { bestSellingItem } = getBestSellingItem(transactionData);
		console.log(bestSellingItem);
	};

	processSummary(transactionData);

	useEffect(() => {
		fetchTransaction().then((res) => {
			setTransactionData(res.filter((data) => Array.isArray(data) === true));
		});
	}, []);

	return transactionData;
};

export default useGetTransaction;
