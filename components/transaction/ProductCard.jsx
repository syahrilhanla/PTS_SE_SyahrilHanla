import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";

const ProductCard = ({ item }) => {
	const { addItemToCart, orderedItem } = useContext(GlobalContext);

	const PriceTagGenerator = ({ category }) => {
		if (item.prices.filter((price) => price.priceFor === category).length > 0) {
			return (
				<p>
					{category} - Rp.{" "}
					{item.prices.filter((price) => price.priceFor === category)[0].price}
				</p>
			);
		}
	};

	return (
		<div className="md:w-52 w-48 bg-white rounded-lg shadow-md flex flex-col justify-center dark:bg-gray-800 dark:border-gray-700">
			<img
				className="p-8 rounded-t-lg h-56 "
				src={item.image}
				alt={item.name}
			/>
			<div className="px-5 pb-5">
				<a>
					<h5 className="text-lg text-center font-normal tracking-tight text-gray-900 dark:text-white">
						{item.name}
					</h5>
				</a>

				<div className="flex flex-col justify-between items-center mt-3">
					<div className="text-2xl h-14 mb-2 font-semibold text-gray-800 dark:text-white">
						<span className="grid text-sm font-lighter text-gray-800 text-center dark:text-white">
							<PriceTagGenerator category="regular" />
							<PriceTagGenerator category="VIP" />
							<PriceTagGenerator category="wholesale" />
						</span>
					</div>
					<button
						onClick={() => addItemToCart(orderedItem, item)}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
