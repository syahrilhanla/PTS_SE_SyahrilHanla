const postTransaction = async (submittedData) => {
	fetch("http://localhost:8000/Transaction", {
		method: "POST",
		body: JSON.stringify(submittedData),
	});
};

export { postTransaction };
