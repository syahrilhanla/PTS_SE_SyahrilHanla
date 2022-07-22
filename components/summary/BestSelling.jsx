import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";
import BestCategoryCard from "./BestCategoryCard";
import BestItemCard from "./BestItemCard";

const BestSelling = () => {
	const { summaryData, itemList } = useContext(GlobalContext);

	const bestItem = itemList.filter(
		(item) => item.name === summaryData.bestSellingItem.itemName
	)[0];

	return (
		<div className="mt-6">
			<h3 className="font-medium text-2xl mb-1">Best Selling Item</h3>
			<hr className="mb-3" />

			{itemList.length > 0 && summaryData && (
				<>
					{" "}
					<span className="flex w-full justify-center">
						<BestItemCard
							bestItem={bestItem}
							revenue={summaryData.bestSellingItem.revenue}
						/>
					</span>
					<h3 className="font-medium text-2xl mb-1 mt-6">
						Best Selling Category
					</h3>
					<hr className="mb-3" />
					<span className="flex w-full justify-center">
						<BestCategoryCard bestCategory={summaryData.bestSellingCategory} />
					</span>
				</>
			)}
		</div>
	);
};

export default BestSelling;
