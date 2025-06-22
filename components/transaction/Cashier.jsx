import { useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import { GlobalContext } from "../context/DataProvider";
import CustomerDropdown from "./CustomerDropdown";

import OrderedItemCard from "./OrderedItemCard";
import PurchaseInfo from "./PurchaseInfo";

const Cashier = () => {
	const {
		currentBuyer,
		setCurrentBuyer,
		buyerList,
		orderedItem,
		totalPrice,
		countItemPrice,
		handleTransaction,
		duplicateItem,
	} = useContext(GlobalContext);

	return (
		<div
			className="w-full h-fit p-4 lg:mx-4 my-3 overflow-auto bg-white rounded-lg border 
		shadow-md sm:pt-8 sm:px-5"
		>
			<div>
				<div className="flex justify-between items-center py-0">
					<h3 className="text-2xl px-3 md:px-0 font-semibold leading-none text-slate-700 dark:text-white">
						Current Order -
					</h3>
					<div className="flex flex-col">
						<h5 className="text-2xl px-3 md:px-0 font-semibold leading-none text-slate-700 dark:text-white">
							{currentBuyer.name}
						</h5>
					</div>
				</div>
				<div className="flex justify-end md:px-0 px-3">
					<p className="text-base font-light">{currentBuyer.type}</p>
				</div>
			</div>
			<div className="w-full block mt-4">
				<CustomerDropdown
					buyers={buyerList}
					setCurrentBuyer={setCurrentBuyer}
				/>
			</div>
			<div className="mt-8">
				<ul
					role="list"
					className="max-h-[60vh] px-3 md:px-0  overflow-y-auto space-y-2
           divide-gray-200 dark:divide-gray-700 mb-2"
				>
					{orderedItem.length > 0 &&
						orderedItem.map((item) => (
							<OrderedItemCard
								item={item}
								key={item.name}
								countItemPrice={countItemPrice}
								duplicateItem={duplicateItem}
							/>
						))}
				</ul>
			</div>

			<PurchaseInfo totalPrice={totalPrice} itemAmount={orderedItem.length} />

			<div className="w-full">
				<button
					type="button"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
					 focus:ring-blue-300 font-medium rounded-lg gap-4
					 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
					  focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center
						disabled:cursor-not-allowed"
					disabled={
						duplicateItem.length < 1 && orderedItem.length > 0 ? false : true
					}
					onClick={() => handleTransaction()}
				>
					<p className="text-base font-medium">Print Receipt</p>
					<BsCartCheck className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default Cashier;
