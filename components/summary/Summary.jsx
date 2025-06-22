import Heading from "../common/Heading";
import SummaryCard from "./SummaryCard";

const Summary = () => {
	return (
		<div
			className="my-5 md:mx-2 py-5 sm:py-0 sm:px-5 min-h-[95vh] 
			 bg-white rounded-lg border shadow-md overflow-hidden
			 w-full"
		>
			<Heading text={"Summary of Sales"} />
			<div className="w-full flex justify-center">
				<SummaryCard />
			</div>
		</div>
	);
};

export default Summary;
