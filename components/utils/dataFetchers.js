const fetchBuyers = async () => {
	const response = await fetch("http://localhost:8000/Buyers");
	const data = await response.json();
	return data;
};

const fetchSummary = async () => {
	const response = await fetch("http://localhost:8000/Summary");
	const data = await response.json();
	return data;
};

const fetchTransaction = async () => {
	const response = await fetch("http://localhost:8000/Transaction");
	const data = await response.json();
	return data;
};

const fetchItem = async () => {
	const response = await fetch("http://localhost:8000/Items");
	const data = await response.json();
	return data;
};
export { fetchBuyers, fetchItem, fetchSummary, fetchTransaction };
