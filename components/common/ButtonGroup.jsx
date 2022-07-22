import { FaUserCog } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const ButtonGroup = ({ handleOption }) => {
	return (
		<div className="flex sm:flex-row flex-col rounded-md" role="group">
			<button
				type="button"
				className="w-32 gap-2 inline-flex justify-center items-center py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
				onClick={() => handleOption(1)}
			>
				<FaUserFriends />
				All Users
			</button>
			<button
				type="button"
				className="w-32 gap-2 inline-flex justify-center items-center py-2 px-2 text-sm font-medium text-gray-900 bg-white border rounded-lg sm:rounded-r-lg sm:rounded-l-none border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
				onClick={() => handleOption(2)}
			>
				<FaUserPlus />
				Add User
			</button>
		</div>
	);
};

export default ButtonGroup;
