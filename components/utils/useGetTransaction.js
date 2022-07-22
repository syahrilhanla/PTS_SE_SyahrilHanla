import { useEffect, useState } from "react";
import { fetchTransaction } from "./dataFetchers";

const useGetTransaction = async () => {
	const [transactionData, setTransactionData] = useState([]);

	useEffect(() => {
		fetchTransaction().then((res) => {
			setTransactionData(res.filter((data) => Array.isArray(data) === true));
		});
	}, []);

	return transactionData;
};

export default useGetTransaction;
