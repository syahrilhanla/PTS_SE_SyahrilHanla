const postTransaction = async (submittedData) => {
	try {
		await fetch("https://the-island-shop.herokuapp.com/Transaction", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(submittedData),
		});
	} catch (error) {
		console.log(error.message);
	}
};

const postSummary = async (summaryData) => {
	try {
		await fetch("https://the-island-shop.herokuapp.com/Summary", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(summaryData),
		});
	} catch (error) {
		console.log(error.message);
	}
};

const postUser = async (buyerData) => {
	try {
		await fetch("https://the-island-shop.herokuapp.com/Buyers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(buyerData),
		});
	} catch (error) {
		console.log(error.message);
	}
};

export { postTransaction, postSummary, postUser };
