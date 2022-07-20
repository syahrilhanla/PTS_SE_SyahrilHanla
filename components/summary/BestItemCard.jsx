import React from "react";

const ProductCard = () => {
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

				<div className="flex md:flex-row flex-col justify-between items-center mt-3">
					<span className="text-2xl font-semibold text-gray-800 dark:text-white">
						$599
					</span>
					<a
						href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
