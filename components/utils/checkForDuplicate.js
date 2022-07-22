import { fetchTransaction } from "./dataFetchers";

const checkForDuplicate = async (submittedDetails) => {
	// check buyer's transaction history of the day
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

	return duplicatedItem;
};

export { checkForDuplicate };
