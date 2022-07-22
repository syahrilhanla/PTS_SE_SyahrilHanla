import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";

const BestCategoryCard = ({ bestCategory }) => {
	return (
		<div className="md:min-w-[55vh] max-w-48 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-center">
				{bestCategory.categoryName === "tops" && (
					<FaTshirt className="p-8 rounded-t-lg text-gray-600 w-[50%] h-[50%]" />
				)}
				{bestCategory.categoryName === "hats" && (
					<FaHatCowboy className="p-8 rounded-t-lg text-gray-600 w-[50%] h-[50%]" />
				)}
				{bestCategory.categoryName === "shorts" && (
					<GiShorts className="p-8 rounded-t-lg text-gray-600 w-[50%] h-[50%]" />
				)}
			</div>
			<div className="px-5 pb-5">
				<div>
					<h5 className="text-2xl text-center font-medium tracking-tight text-gray-900 dark:text-white">
						{bestCategory.categoryName}
					</h5>
				</div>

				<div className="flex flex-row justify-between mt-3 px-4">
					<h2 className="text-xl font-medium">Total Revenue</h2>
					<h4 className="text-xl font-medium">Rp. {bestCategory.revenue}</h4>
				</div>
			</div>
		</div>
	);
};

export default BestCategoryCard;
