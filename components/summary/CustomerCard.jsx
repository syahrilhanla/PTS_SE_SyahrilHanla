const CustomerList = ({ customer }) => {
	return (
		<li className="py-4">
			<div className="flex items-center space-x-4">
				<div className="flex-1 min-w-0">
					<p className="text-base font-normal text-slate-700 truncate dark:text-white">
						{customer.buyer}
					</p>
				</div>
				{/* Rank of category */}

				{/* Rank of category */}

				<div className="inline-flex items-center text-xl font-semibold text-slate-700 dark:text-white">
					Rp. {customer.totalSpending}
				</div>
			</div>
		</li>
	);
};

const CustomerCard = ({ topCustomers }) => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-full p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
				<div className="flex justify-between items-center mb-4">
					<h5 className="text-xl font-bold leading-none text-slate-700 dark:text-white">
						Customer
					</h5>
					<h5 className="text-xl font-semibold leading-none text-slate-700 dark:text-white">
						Total Spent
					</h5>
				</div>
				<hr />
				<div className="flow-root">
					<ul
						role="list"
						className="divide-y divide-gray-200 dark:divide-gray-700"
					>
						{topCustomers.map((customer) => (
							<CustomerList key={customer.buyer} customer={customer} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CustomerCard;
