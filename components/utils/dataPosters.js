const postTransaction = async (submittedData) => {
	try {
		const data = [{ id: 3 }];
		console.log(data);
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
