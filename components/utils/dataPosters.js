const postTransaction = async (submittedData) => {
	try {
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Transaction`, {
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
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Summary`, {
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
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Buyers`, {
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
