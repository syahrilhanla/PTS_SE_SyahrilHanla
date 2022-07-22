const PriceTagGenerator = ({ category, item }) => {
	if (item.prices.filter((price) => price.priceFor === category).length > 0) {
		return (
			<p className="flex justify-between w-full">
				<span>{category}</span>
				<span>
					Rp.{" "}
					{item.prices.filter((price) => price.priceFor === category)[0].price}
				</span>
			</p>
		);
	}
};

export default PriceTagGenerator;
