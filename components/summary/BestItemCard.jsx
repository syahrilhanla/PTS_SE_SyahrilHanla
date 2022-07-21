const BestItemCard = () => {
	return (
		<div className="md:max-w-[55vh] max-w-48 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img
					className="p-8 rounded-t-lg"
					src="https://flowbite.com/docs/images/products/apple-watch.png"
					alt="product image"
				/>
			</a>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
						Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
					</h5>
				</a>

				<div className="flex md:flex-row flex-col justify-between mt-3">
					<div className="flex flex-col items-center mt-3">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
							Products Bought
						</h2>
						<h3 className="text-4xl font-medium text-gray-800 my-auto dark:text-white">
							79
						</h3>
					</div>
					<div className="flex flex-col items-center mt-3">
						<span className="text-2xl font-semibold text-gray-800 dark:text-white">
							Prices
						</span>
						<span className="grid text-md font-normal text-gray-800 text-center dark:text-white">
							<p>Regular - $123</p>
							<p>VIP - $110</p>
							<p>Wholesale - $100</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestItemCard;
