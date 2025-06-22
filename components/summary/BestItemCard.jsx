import PriceTagGenerator from "../common/PriceTagGenerator";
import { formatPriceIDR } from "../helpers/formatPriceIDR";

const BestItemCard = ({ bestItem, revenue }) => {
	return (
		<div className="md:max-w-[60vh] max-w-48 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-center">
				<img
					className="p-8 rounded-t-lg"
					src={bestItem.image}
					alt={bestItem.name}
				/>
			</div>
			<div className="px-5 pb-5">
				<h5 className="text-lg text-center font-medium tracking-tight text-slate-700 dark:text-white">
					{bestItem.name}
				</h5>

				<div className="flex md:flex-row flex-col justify-between gap-2 mt-3">
					<div className="flex flex-col items-center mt-3">
						<h2 className="text-2xl font-semibold text-slate-700 dark:text-white">
							Revenue Earned
						</h2>
						<h3 className="text-2xl font-medium text-slate-700 my-auto dark:text-white">
							{formatPriceIDR(revenue)}
						</h3>
					</div>
					<div className="flex flex-col items-center mt-3">
						<span className="text-2xl font-semibold text-slate-700 dark:text-white">
							Prices
						</span>
						<span className="mx-2 w-full grid text-md font-normal text-slate-700 text-center dark:text-white">
							<PriceTagGenerator category="regular" item={bestItem} />
							<PriceTagGenerator category="VIP" item={bestItem} />
							<PriceTagGenerator category="wholesale" item={bestItem} />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestItemCard;
