import { fetchTransaction } from "./dataFetchers";
import { postSummary } from "./dataPosters";
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
		topThreeSpenders,
	} = getBestSellingItem(transactionData);

	const totalTransaction = transactionData.length;
	const totalRevenue = revenuePerCategory
		.map((category) => category.revenue)
		.reduce((a, b) => a + b, 0);

	const weeklyData = [
		{
			name: "Day 1",
			revenue: 500941,
		},
		{
			name: "Day 2",
			revenue: 236233,
		},
		{
			name: "Day 3",
			revenue: 136363,
		},
		{
			name: "Day 4",
			revenue: 757466,
		},
		{
			name: "Day 5",
			revenue: 246347,
		},
		{
			name: "Day 6",
			revenue: 235263,
		},
		{
			name: "Today",
			revenue: totalRevenue,
		},
	];

	const summaryObject = {
		totalTransaction,
		totalRevenue,
		bestSellingCategory,
		bestSellingItem,
		revenuePerCategory,
		topThreeSpenders,
		weeklyData,
	};
	await postSummary(summaryObject);

	return { transactionData, summaryObject };
};

export default useProcessSummary;
