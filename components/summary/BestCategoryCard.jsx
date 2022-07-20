import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";

const BestCategoryCard = () => {
	return (
		<div className="md:min-w-[55vh] max-w-48 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-center">
				<FaTshirt className="p-8 rounded-t-lg text-gray-600 w-[50%] h-[50%]" />
			</div>
			<div className="px-5 pb-5">
				<div>
					<h5 className="text-2xl text-center font-medium tracking-tight text-gray-900 dark:text-white">
						Tops
					</h5>
				</div>

				<div className="flex flex-row justify-between mt-3 px-4">
					<h2 className="text-xl font-medium">Total Revenue</h2>
					<h4 className="text-xl font-medium">$3600</h4>
				</div>
			</div>
		</div>
	);
};

export default BestCategoryCard;
