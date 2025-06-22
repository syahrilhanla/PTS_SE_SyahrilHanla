const fetchBuyers = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Buyers`);
	const data = await response.json();
	return data;
};

const fetchSummary = async () => {
	console.log(process.env.NEXT_PUBLIC_API_URL);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/Summary`,
	);
	const data = await response.json();
	return data;
};

const fetchTransaction = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/Transaction`
	);
	const data = await response.json();
	return data;
};

const fetchItem = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Items`);
	const data = await response.json();
	return data;
};
export { fetchBuyers, fetchItem, fetchSummary, fetchTransaction };
