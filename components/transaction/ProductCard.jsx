import { useContext } from "react";
import PriceTagGenerator from "../common/PriceTagGenerator";
import { GlobalContext } from "../context/DataProvider";
import Image from "next/image";

const ProductCard = ({ item }) => {
	const { addItemToCart, orderedItem, currentBuyer, setupToast } =
		useContext(GlobalContext);

	return (
		<div className="w-full bg-white rounded-lg shadow-md flex flex-col justify-center dark:bg-gray-800 dark:border-gray-700">
			<Image
				src={item.image}
				alt={item.name}
				className="object-contain p-8 rounded-t-lg md:h-56 h-fit"
				width={200}
				height={200}
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
							<PriceTagGenerator category="regular" item={item} />
							<PriceTagGenerator category="VIP" item={item} />
							<PriceTagGenerator category="wholesale" item={item} />
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
