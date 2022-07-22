const TableRow = ({ buyer }) => {
	return (
		<tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			<td className="py-4 px-6">{buyer.type}</td>
			<th
				scope="row"
				className="text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				{buyer.name}
			</th>
		</tr>
	);
};

const UserTable = ({ buyerList, summaryData }) => {
	return (
		<div className="sm:w-full w-[85%] m-3 overflow-x-auto relative shadow-md sm:rounded-lg">
			<table className="w-full overflow-hidden text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr className="text-center">
						<th scope="col" className="py-3 px-6">
							Buyer Type
						</th>
						<th scope="col" className="py-3 px-6">
							Name
						</th>
					</tr>
				</thead>
				<tbody>
					{buyerList &&
						buyerList.map((buyer) => (
							<TableRow key={buyer.name} buyer={buyer} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
