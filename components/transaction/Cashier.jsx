import OrderedItemCard from "./OrderedItemCard";
import PurchaseInfo from "./PurchaseInfo";

const Cashier = () => {
	return (
		<div className="mx-4 md:mx-4 py-4 my-5 overflow-auto max-w-md bg-white rounded-lg border shadow-md sm:pt-8 sm:px-5 dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-between items-center mb-8">
				<h5 className="text-2xl px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
					Current Order
				</h5>
			</div>
			<div className="flow-root">
				<ul
					role="list"
					className="h-[60vh] px-3 md:px-0  overflow-y-auto divide-y space-y-2
           divide-gray-200 dark:divide-gray-700 mb-2"
				>
					<OrderedItemCard />
					<OrderedItemCard />
				</ul>
			</div>

			<PurchaseInfo />
		</div>
	);
};

export default Cashier;
