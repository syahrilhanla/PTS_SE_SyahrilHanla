import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";

const Rank = ({ stars }) => {
	return (
		<div className="flex items-center">
			{Array(stars)
				.fill(0, 0)
				.map((star, index) => (
					<svg
						key={index}
						aria-hidden="true"
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				))}
		</div>
	);
};

const CategoryList = ({ data, revenueOfDay }) => {
	return (
		<li className="py-3 sm:py-4">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<FaTshirt className="w-8 h-8 rounded-full" />
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
						Tops
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Total Sales: 76
					</p>
				</div>
				{/* Rank of category */}
				{revenueOfDay && <Rank stars={1} />}

				{/* Rank of category */}

				<div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
					$420
				</div>
			</div>
		</li>
	);
};

const CategoryRevCard = ({ revenueOfDay }) => {
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
						{[1, 2, 3].map((item) => (
							<CategoryList key={item} revenueOfDay={revenueOfDay} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CategoryRevCard;
