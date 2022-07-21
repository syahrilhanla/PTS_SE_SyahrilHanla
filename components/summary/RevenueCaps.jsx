import CategoryRevCard from "./CategoryRevCard";
import GraphsComponent from "./GraphsComponent";

const RevenueCaps = () => {
	return (
		<div className="mt-6">
			<h3 className="font-medium text-2xl mb-1 mt-6">Revenue per Category</h3>
			<hr className="mb-3" />
			<CategoryRevCard />

			<h3 className="font-medium text-2xl mb-1 mt-6">Revenue of The Day</h3>
			<hr className="mb-3" />
			<CategoryRevCard revenueOfDay={true} />

			<h3 className="font-medium text-2xl mb-1 mt-6">Daily Revenues Graphs</h3>
			<hr className="mb-3" />
			<GraphsComponent />
		</div>
	);
};

export default RevenueCaps;
