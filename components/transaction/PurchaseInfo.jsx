const PurchaseInfo = () => {
	return (
		<div className="w-full py-4 mt-2 px-4 md:px-0">
			<div className="flex flex-row justify-between items-center">
				<p>Total Item </p>
				<p>2 item(s)</p>
			</div>
			<div className="flex flex-row justify-between items-center">
				<p>Shipment </p>
				<p>Free</p>
			</div>
			<div className="mt-4 flex flex-row justify-between items-center">
				<h2 className="text-xl font-semibold">Total</h2>
				<h2 className="text-xl font-semibold">$350</h2>
			</div>
		</div>
	);
};

export default PurchaseInfo;
