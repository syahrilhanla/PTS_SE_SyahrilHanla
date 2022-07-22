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

export { postTransaction };
