import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";

const CategoryList = ({ data }) => {
	return (
		<li className="py-3 sm:py-4">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					{data.categoryName === "tops" && (
						<FaTshirt className="w-8 h-8 rounded-full" />
					)}
					{data.categoryName === "hats" && (
						<FaHatCowboy className="w-8 h-8 rounded-full" />
					)}
					{data.categoryName === "shorts" && (
						<GiShorts className="w-8 h-8 rounded-full" />
					)}
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
						{data.categoryName}
					</p>
				</div>

				<div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
					Rp. {data.revenue}
				</div>
			</div>
		</li>
	);
};

const CategoryRevCard = ({ revenueOfDay, summaryData }) => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-full p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
				<div className="flex justify-between items-center mb-4">
					<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
						Category
					</h5>
					<h5 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
						Revenue
					</h5>
				</div>
				<hr />
				<div className="flow-root">
					<ul
						role="list"
						className="divide-y divide-gray-200 dark:divide-gray-700"
					>
						{summaryData.revenuePerCategory.map((data) => (
							<CategoryList key={data.categoryName} data={data} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CategoryRevCard;
