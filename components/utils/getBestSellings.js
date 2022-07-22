const getBestSellingItem = (transactionData) => {
	const itemNames = transactionData.flat(2).map((item) => item.itemName);
	const itemNamesObject = {};
	let bestSellingItem = { itemName: "", amount: 0 };

	for (const key of itemNames) {
		if (!Object.hasOwn(itemNamesObject, itemNames)) {
			itemNamesObject[key] = itemNames.filter((item) => item === key).length;
		}
	}
	for (const key in itemNamesObject) {
		if (bestSellingItem.itemName === "") {
			bestSellingItem = { itemName: key, amount: itemNamesObject[key] };
		} else if (itemNamesObject[key] > bestSellingItem) {
			bestSellingItem = {
				itemName: key,
				amount: itemNamesObject[key],
			};
		}
	}

	return { bestSellingItem };
};

export { getBestSellingItem };
