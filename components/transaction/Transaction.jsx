import { GiIsland } from "react-icons/gi";
import Categories from "../common/Categories";
import Cashier from "./Cashier";
import ProductCatalogue from "./ProductCatalogue";

const Heading = () => {
	return (
		<div>
			<div className="w-full h-20 flex justify-center md:justify-start items-center px-6">
				<GiIsland className="h-12 w-12" />
				<h5 className="text-2xl px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
					The Islander Shop
				</h5>
			</div>
			<Categories />
		</div>
	);
};

const Transaction = () => {
	return (
		<div className="grid sm:grid-cols-[7fr_4fr] w-full">
			<div
				className="md:my-3 h-min md:mx-2 py-5 sm:py-0 sm:px-5
			 bg-white rounded-lg border shadow-md
			  dark:bg-gray-800 dark:border-gray-700 w-full"
			>
				<Heading />
				<ProductCatalogue />
			</div>
			<Cashier />
		</div>
	);
};

export default Transaction;
