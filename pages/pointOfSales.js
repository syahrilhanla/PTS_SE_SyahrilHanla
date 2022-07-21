import Heading from "../components/common/Heading";
import PoSCard from "../components/pos/PoSCard";
import SummaryCard from "../components/summary/SummaryCard";

const pointOfSales = () => {
	return (
		<>
			<div
				className="my-5 md:mx-2 py-5 sm:py-0 sm:px-5 min-h-[95vh] 
			 bg-white rounded-lg border shadow-md overflow-hidden
			  dark:bg-gray-800 dark:border-gray-700 w-full"
			>
				<Heading text={"Point of Sales"} />
				<div className="w-full flex justify-center">
					<PoSCard />
				</div>
			</div>
		</>
	);
};

export default pointOfSales;
