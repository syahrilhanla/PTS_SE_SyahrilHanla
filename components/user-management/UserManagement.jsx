import { useState } from "react";
import ButtonGroup from "../common/ButtonGroup";
import Heading from "../common/Heading";
import AddUser from "./AddUser";
import SearchBar from "./SearchBar";
import UserTable from "./UserTable";

const UserManagement = () => {
	const [option, setOption] = useState(1);

	const handleOption = (index) => {
		setOption(index);
	};

	return (
		<div
			className="my-5 md:mx-2 py-5 sm:py-0 sm:px-5 min-h-[95vh] 
			 bg-white rounded-lg border shadow-md overflow-hidden
			  dark:bg-gray-800 dark:border-gray-700 w-full"
		>
			<Heading text={"User Management"} />
			<div className="grid sm:grid-cols-2 place-items-center w-full">
				<span className="w-full px-6 flex md:justify-start justify-center items-center">
					<ButtonGroup handleOption={handleOption} />
				</span>
				<span
					className={`${
						option === 1 || option === 3 ? "block" : "hidden"
					} w-full px-6 flex sm:justify-end justify-center sm:mt-0 mt-4`}
				>
					<SearchBar />
				</span>
			</div>

			<div className="w-full px-2 flex justify-center sm:mt-0 mt-4">
				{option == 1 && <UserTable />}
				{option == 2 && <AddUser />}
				{option == 3 && <UserTable />}
			</div>
		</div>
	);
};

export default UserManagement;
