import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";

const ProductCard = ({ item }) => {
	const { addItemToCart, orderedItem, currentBuyer, setupToast } =
		useContext(GlobalContext);

	const PriceTagGenerator = ({ category }) => {
		if (item.prices.filter((price) => price.priceFor === category).length > 0) {
			return (
				<p className="flex justify-between w-full">
					<span>{category}</span>
					<span>
						Rp.{" "}
						{
							item.prices.filter((price) => price.priceFor === category)[0]
								.price
						}
					</span>
				</p>
			);
		}
	};

	return (
		<div className="md:w-52 w-48 bg-white rounded-lg shadow-md flex flex-col justify-center dark:bg-gray-800 dark:border-gray-700">
			<img
				className="p-8 rounded-t-lg md:h-56 h-fit "
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
					<div className="text-2xl w-full h-14 mb-3">
						<span className="w-full grid text-sm font-lighter text-gray-800 text-center dark:text-white">
							<PriceTagGenerator category="regular" />
							<PriceTagGenerator category="VIP" />
							<PriceTagGenerator category="wholesale" />
						</span>
					</div>
					<button
						onClick={() => {
							if (currentBuyer.name !== "Select Buyer") {
								addItemToCart(orderedItem, item, currentBuyer.type);
							} else setupToast("Please Select A Buyer", "danger");
						}}
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
