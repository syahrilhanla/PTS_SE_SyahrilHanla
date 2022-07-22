const getBestSellingItem = (transactionData) => {
	// get best item based on revenue per item
	const itemNames = transactionData.flat(2).map((item) => item.itemName);
	const itemNamesObject = {};
	let bestSellingItem = { itemName: "", amount: 0 };

	// inserting item to new object
	for (const key of itemNames) {
		if (!Object.hasOwn(itemNamesObject, itemNames)) {
			itemNamesObject[key] = transactionData
				.flat(2)
				.filter((item) => item.itemName === key);
		}
	}

	// looking for the most up selling
	for (const key in itemNamesObject) {
		const itemRevenue = itemNamesObject[key]
			.flat()
			.map((item) => item.totalPrice)
			.reduce((a, b) => a + b, 0);
		if (bestSellingItem.itemName === "") {
			bestSellingItem = { itemName: key, revenue: itemRevenue };
		} else {
			if (itemRevenue > bestSellingItem.revenue) {
				bestSellingItem = {
					itemName: key,
					revenue: itemRevenue,
				};
			}
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

	// get top spenders
	const spenders = transactionData.flat(2).map((item) => item.buyer);
	const spenderObject = {};

	// variable to store revenue per category
	let topSpenders = [];

	// inserting items to each category object
	for (const key of spenders) {
		if (!Object.hasOwn(spenderObject, spenders)) {
			spenderObject[key] = transactionData
				.flat(2)
				.filter((item) => item.buyer === key);
		}
	}

	for (const key in spenderObject) {
		const userSpending = spenderObject[key]
			.flat()
			.map((item) => item.totalPrice)
			.reduce((a, b) => a + b, 0);

		topSpenders.push({
			buyer: key,
			totalSpending: userSpending,
		});
	}

	return {
		bestSellingItem,
		bestSellingCategory,
		revenuePerCategory,
		topSpenders,
	};
};

export { getBestSellingItem };
