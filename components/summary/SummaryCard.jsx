import { useState } from "react";
import BestCustomers from "./BestCustomers";
import BestSelling from "./BestSelling";
import RevenueCaps from "./RevenueCaps";
import TabHeader from "./TabHeader";

const SummaryCard = () => {
	const [option, setOption] = useState(1);

	const getOption = (index) => {
		setOption(index);
	};

	return (
		<div className="md:w-[60vw] w-full place-content-center p-4 text-slate-700">
			<TabHeader getOption={getOption} option={option} />

			{option === 1 && <BestSelling />}
			{option === 2 && <RevenueCaps />}
			{option === 3 && <BestCustomers />}
		</div>
	);
};

export default SummaryCard;
