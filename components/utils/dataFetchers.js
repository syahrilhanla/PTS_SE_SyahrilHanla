const fetchBuyers = async () => {
	const response = await fetch("https://the-island-shop.herokuapp.com//Buyers");
	const data = await response.json();
	return data;
};

const fetchSummary = async () => {
	const response = await fetch("https://the-island-shop.herokuapp.com/Summary");
	const data = await response.json();
	return data;
};

const fetchTransaction = async () => {
	const response = await fetch(
		"https://the-island-shop.herokuapp.com/Transaction"
	);
	const data = await response.json();
	return data;
};

const fetchItem = async () => {
	const response = await fetch("https://the-island-shop.herokuapp.com/Items");
	const data = await response.json();
	return data;
};
export { fetchBuyers, fetchItem, fetchSummary, fetchTransaction };
