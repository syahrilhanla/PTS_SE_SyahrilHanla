import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";
import CategoryRevCard from "./CategoryRevCard";
import GraphsComponent from "./GraphsComponent";

const RevenueCaps = () => {
	const { summaryData } = useContext(GlobalContext);

	return (
		<div className="mt-6">
			{summaryData && (
				<>
					<h3 className="font-medium text-2xl mb-1 mt-6">
						Revenue per Category
					</h3>
					<hr className="mb-3" />
					<CategoryRevCard summaryData={summaryData} />

					<h3 className="font-medium text-2xl mb-1 mt-6">Revenue of The Day</h3>
					<hr className="mb-3" />
					<CategoryRevCard revenueOfDay={true} summaryData={summaryData} />

					<h3 className="font-medium text-2xl mb-1 mt-6">
						Daily Revenues Graphs
					</h3>
					<hr className="mb-3" />
					<GraphsComponent weeklyData={summaryData.weeklyData} />
				</>
			)}
		</div>
	);
};

export default RevenueCaps;
