import { useContext, useState } from "react";
import { GlobalContext } from "../context/DataProvider";
import Categories from "../common/Categories";
import Heading from "../common/Heading";
import Cashier from "./Cashier";
import ProductCatalogue from "./ProductCatalogue";
import SummaryModal from "./SummaryModal";

const Transaction = () => {
	const { showSummary } = useContext(GlobalContext);
	const [category, setCategory] = useState("All Item");

	return (
		<>
			{showSummary && <SummaryModal />}
			<div className="grid lg:grid-cols-[7fr_3fr] w-[95%] ">
				<div
					className="lg:my-3 h-min lg:mx-1 py-5 lg:py-0 sm:px-5
			 bg-white rounded-lg border shadow-md
			  dark:bg-gray-800 dark:border-gray-700 w-full"
				>
					<div>
						<Heading text={"Catalogue"} />
						<Categories setCategory={setCategory} />
					</div>
					<ProductCatalogue category={category} />
				</div>
				<span className="w-full block">
					<Cashier />
				</span>
			</div>
		</>
	);
};

export default Transaction;
