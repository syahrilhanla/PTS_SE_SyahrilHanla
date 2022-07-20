const TabHeader = ({ getOption }) => {
	const headers = ["Best Sellings", "Revenue Recaps", "Top Customers"];

	return (
		<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
			<ul className="flex flex-wrap justify-center sm:justify-start -mb-px">
				{headers.map((header, index) => (
					<li
						className="mr-1 inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
						key={header}
						onClick={() => getOption(index + 1)}
					>
						<a href="#">{header}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TabHeader;
