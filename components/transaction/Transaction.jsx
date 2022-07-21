import { useState } from "react";
import Categories from "../common/Categories";
import Heading from "../common/Heading";
import Cashier from "./Cashier";
import ProductCatalogue from "./ProductCatalogue";

const Transaction = () => {
	const [category, setCategory] = useState("All Item");

	return (
		<div className="grid sm:grid-cols-[7fr_4fr] w-full">
			<div
				className="md:my-3 h-min md:mx-1 py-5 sm:py-0 sm:px-5
			 bg-white rounded-lg border shadow-md
			  dark:bg-gray-800 dark:border-gray-700 w-full"
			>
				<div>
					<Heading text={"The Island Shop"} />
					<Categories setCategory={setCategory} />
				</div>
				<ProductCatalogue category={category} />
			</div>
			<Cashier />
		</div>
	);
};

export default Transaction;
