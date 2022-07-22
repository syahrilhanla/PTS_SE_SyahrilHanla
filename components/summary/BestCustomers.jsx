import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";
import CustomerCard from "./CustomerCard";

const BestCustomers = () => {
	const { summaryData } = useContext(GlobalContext);
	return (
		<div>
			<div className="mt-6">
				<h3 className="font-medium text-2xl mb-1">Top Customers</h3>
				<hr className="mb-3" />
				<CustomerCard topCustomers={summaryData.topThreeSpenders} />
			</div>
		</div>
	);
};

export default BestCustomers;
