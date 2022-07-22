const postTransaction = async (submittedData) => {
	try {
		fetch("http://localhost:8000/Transaction", {
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
		console.log({ summaryData });
		fetch("http://localhost:8000/Summary", {
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

export { postTransaction, postSummary };
