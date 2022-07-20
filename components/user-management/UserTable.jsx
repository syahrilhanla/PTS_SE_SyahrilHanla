import DropdownMenu from "./DropdownMenu";

const TableRow = () => {
	return (
		<tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			<td className="py-4 px-6">235lk</td>
			<th
				scope="row"
				className="text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				Apple MacBook Pro 17"
			</th>
			<td className="py-4 px-6">Sliver</td>
			<td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				$2999
			</td>
			<td className="py-4 px-6">
				<a
					href="#"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					Edit
				</a>
			</td>
		</tr>
	);
};

const UserTable = () => {
	return (
		<div className="sm:w-full w-[85%] m-3 overflow-x-auto relative shadow-md sm:rounded-lg">
			<div className="flex justify-between items-center pb-4">
				<DropdownMenu />
			</div>
			<table className="w-full overflow-hidden text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr className="text-center">
						<th scope="col" className="py-3 px-6">
							ID
						</th>
						<th scope="col" className="py-3 px-6">
							Name
						</th>
						<th scope="col" className="py-3 px-6">
							Buyer Type
						</th>
						<th scope="col" className="py-3 px-6">
							Total Spending
						</th>
						<th scope="col" className="py-3 px-6">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<TableRow />
					<TableRow />
					<TableRow />
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
