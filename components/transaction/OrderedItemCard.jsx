const OrderedItemCard = () => {
	return (
		<li className="py-3 px-3 mb-2 sm:py-2 border border-gray-300 rounded-md">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img
						className="w-14 h-14 rounded-md"
						src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
						alt="Neil image"
					/>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
						Item 1
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Regular Price
					</p>
				</div>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					$320
				</div>
			</div>
		</li>
	);
};

export default OrderedItemCard;
