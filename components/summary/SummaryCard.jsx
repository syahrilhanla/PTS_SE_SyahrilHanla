import { useState } from "react";
import BestSelling from "./BestSelling";
import TabHeader from "./TabHeader";

const SummaryCard = () => {
	const [option, setOption] = useState(1);

	const getOption = (index) => {
		setOption(index);
	};

	return (
		<div className="min-w-[60vw] place-content-center p-4">
			<TabHeader getOption={getOption} option={option} />
			<h2 className="font-medium text-3xl">Overall Transactions: 5</h2>

			{option === 1 && <BestSelling />}
			{option === 2 && <h1>Option 2</h1>}
			{option === 3 && <BestSelling />}
		</div>
	);
};

export default SummaryCard;
