import { formatPriceIDR } from "../helpers/formatPriceIDR";

const PriceTagGenerator = ({ category, item }) => {
	if (item.prices.filter((price) => price.priceFor === category).length > 0) {
		return (
			<p className="flex justify-between w-full text-slate-700">
				<span className="capitalize">{category}</span>
				<span>
					{formatPriceIDR(
						item.prices.filter((price) => price.priceFor === category)[0].price
					)}
				</span>
			</p>
		);
	}
};

export default PriceTagGenerator;
