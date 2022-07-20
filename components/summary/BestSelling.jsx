import BestItemCard from "./BestItemCard";

const BestSelling = () => {
	return (
		<div className="mt-6">
			<h3 className="font-medium text-xl mb-1">Best Selling Item</h3>
			<hr className="mb-3" />
			<span className="flex w-full justify-center">
				<BestItemCard />
			</span>
		</div>
	);
};

export default BestSelling;
