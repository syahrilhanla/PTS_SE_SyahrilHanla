const getBestSellingItem = (transactionData) => {
	// get best item based on how many item bought
	const itemNames = transactionData.flat(2).map((item) => item.itemName);
	const itemNamesObject = {};
	let bestSellingItem = { itemName: "", amount: 0 };

	// inserting item to new object
	for (const key of itemNames) {
		if (!Object.hasOwn(itemNamesObject, itemNames)) {
			itemNamesObject[key] = itemNames.filter((item) => item === key).length;
		}
	}

	// looking for the most up selling
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

	// get best category based on how much revenue earned
	const categories = transactionData.flat(2).map((item) => item.type);
	const categoryObject = {};
	let bestSellingCategory = { categoryName: "", revenue: 0 };

	// variable to store revenue per category
	let revenuePerCategory = [];

	// inserting items to each category object
	for (const key of categories) {
		if (!Object.hasOwn(categoryObject, categories)) {
			categoryObject[key] = transactionData
				.flat(2)
				.filter((item) => item.type === key);
		}
	}

	// loop through object to find which earned more revenue
	for (const key in categoryObject) {
		const categoryRevenue = categoryObject[key]
			.flat()
			.map((item) => item.totalPrice)
			.reduce((a, b) => a + b, 0);

		// if object is empty then fill with first element
		if (bestSellingCategory.categoryName === "") {
			bestSellingCategory = {
				categoryName: key,
				revenue: categoryRevenue,
			};
			// store each iteration info to array
			revenuePerCategory.push({ categoryName: key, revenue: categoryRevenue });
		} else {
			// later, compare the revenue between each category and current best category
			if (categoryRevenue > bestSellingCategory.revenue) {
				bestSellingCategory = {
					categoryName: key,
					revenue: categoryRevenue,
				};
			}
			// store each iteration info to array
			revenuePerCategory.push({ categoryName: key, revenue: categoryRevenue });
		}
	}

	return { bestSellingItem, bestSellingCategory, revenuePerCategory };
};

export { getBestSellingItem };
