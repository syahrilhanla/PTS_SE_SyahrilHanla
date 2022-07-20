import CustomerCard from "./CustomerCard";

const BestCustomers = () => {
	return (
		<div>
			<div className="mt-6">
				<h3 className="font-medium text-2xl mb-1">Top Customers</h3>
				<hr className="mb-3" />

				<CustomerCard />
			</div>
		</div>
	);
};

export default BestCustomers;
