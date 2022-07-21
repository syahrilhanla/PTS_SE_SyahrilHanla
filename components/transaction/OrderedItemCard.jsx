const OrderedItemCard = ({ item, countItemPrice }) => {
	return (
		<li className="py-3 px-3 mb-2 sm:py-2 border border-gray-300 rounded-md">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img
						className="w-14 h-14 rounded-md"
						src={item.image}
						alt={item.name}
					/>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
						{item.name}
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Regular Price
					</p>
				</div>
				<div className="flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
					Rp. {item.priceInTotal}
					<div className="w-full flex justify-evenly gap-1">
						<button
							className="py-0.5 px-2 bg-slate-100 shadow-md
						 border-slate-200 border hover:bg-slate-50"
							onClick={() => countItemPrice(item, "subtract")}
						>
							-
						</button>
						<span>{item.qty}</span>
						<button
							class="py-0.5 px-1.5 bg-slate-100 shadow-md
						 border-slate-200 border hover:bg-slate-50"
							onClick={() => countItemPrice(item, "add")}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default OrderedItemCard;
