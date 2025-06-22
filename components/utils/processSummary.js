import { formatPriceIDR } from "../helpers/formatPriceIDR";
import { fetchTransaction } from "./dataFetchers";
import { postSummary } from "./dataPosters";
import { getBestSellingItem } from "./getBestSellings";

const processSummary = async () => {
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
			revenue: formatPriceIDR(500941),
		},
		{
			name: "Day 2",
			revenue: formatPriceIDR(236233),
		},
		{
			name: "Day 3",
			revenue: formatPriceIDR(136363),
		},
		{
			name: "Day 4",
			revenue: formatPriceIDR(757466),
		},
		{
			name: "Day 5",
			revenue: formatPriceIDR(246347),
		},
		{
			name: "Day 6",
			revenue: formatPriceIDR(235263),
		},
		{
			name: "Today",
			revenue: formatPriceIDR(totalRevenue),
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

export default processSummary;
