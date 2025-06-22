import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";
import ProductCard from "./ProductCard";

const ProductCatalogue = ({ category }) => {
	const { itemList } = useContext(GlobalContext);

	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6 place-items-start px-4 md:px-1">
			{category === "All Item" && itemList
				? itemList.map((item) => <ProductCard key={item.name} item={item} />)
				: itemList &&
				  itemList
						.filter((item) => item.type === category.toLowerCase())
						.map((item) => <ProductCard key={item.name} item={item} />)}
		</div>
	);
};

export default ProductCatalogue;
