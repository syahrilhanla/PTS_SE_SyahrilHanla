import { fetchTransaction } from "./dataFetchers";
import { getBestSellingItem } from "./getBestSellings";

const useProcessSummary = async () => {
	const response = await fetchTransaction();
	const transactionData = response.filter(
		(data) => Array.isArray(data) === true
	);

	const {
		bestSellingItem,
		bestSellingCategory,
		revenuePerCategory,
		topSpenders,
	} = getBestSellingItem(transactionData);

	const totalTransaction = transactionData.length;
	const totalRevenue = revenuePerCategory
		.map((category) => category.revenue)
		.reduce((a, b) => a + b, 0);

	const summaryObject = {
		totalTransaction,
		totalRevenue,
		bestSellingCategory,
		bestSellingItem,
		revenuePerCategory,
		topSpenders,
	};

	return { transactionData, summaryObject };
};

export default useProcessSummary;
