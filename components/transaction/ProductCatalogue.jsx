import ProductCard from "./ProductCard";

const ProductCatalogue = () => {
	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-6 place-items-center px-1">
			{/* Products to be mapped */}

			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
};

export default ProductCatalogue;
