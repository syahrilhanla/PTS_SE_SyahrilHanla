import BestCategoryCard from "./BestCategoryCard";
import BestItemCard from "./BestItemCard";

const BestSelling = () => {
	return (
		<div className="mt-6">
			<h3 className="font-medium text-2xl mb-1">Best Selling Item</h3>
			<hr className="mb-3" />
			<span className="flex w-full justify-center">
				<BestItemCard />
			</span>

			<h3 className="font-medium text-2xl mb-1 mt-6">Best Selling Category</h3>
			<hr className="mb-3" />
			<span className="flex w-full justify-center">
				<BestCategoryCard />
			</span>
		</div>
	);
};

export default BestSelling;
