import { BsCartCheck } from "react-icons/bs";

import OrderedItemCard from "./OrderedItemCard";
import PurchaseInfo from "./PurchaseInfo";

const Cashier = () => {
	return (
		<div className="mx-3 h-fit md:mx-4 py-4 px-4 my-3 overflow-auto max-w-md bg-white rounded-lg border shadow-md sm:pt-8 sm:px-5 dark:bg-gray-800 dark:border-gray-700">
			<div>
				<div className="flex justify-between items-center py-0">
					<h3 className="text-2xl px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
						Current Order -
					</h3>
					<div className="flex flex-col">
						<h5 className="text-2xl px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
							Steven
						</h5>
					</div>
				</div>
				<div className="flex justify-end">
					<p className="text-base font-light">Regular</p>
				</div>
			</div>
			<div className="mt-8">
				<ul
					role="list"
					className="max-h-[60vh] px-3 md:px-0  overflow-y-auto divide-y space-y-2
           divide-gray-200 dark:divide-gray-700 mb-2"
				>
					<OrderedItemCard />
					<OrderedItemCard />
				</ul>
			</div>

			<PurchaseInfo />

			<div className="w-full">
				<button
					type="button"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
					 focus:ring-blue-300 font-medium rounded-lg gap-4
					 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
					  focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center"
				>
					<p className="text-lg font-medium">Pay Now</p>
					<BsCartCheck className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default Cashier;
