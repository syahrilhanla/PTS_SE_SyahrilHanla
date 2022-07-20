import ButtonGroup from "../common/ButtonGroup";
import Heading from "../common/Heading";
import SearchBar from "./SearchBar";

const UserManagement = () => {
	return (
		<div
			className="md:my-3 min-h-[95vh] md:mx-2 py-5 sm:py-0 sm:px-5
			 bg-white rounded-lg border shadow-md
			  dark:bg-gray-800 dark:border-gray-700 w-full"
		>
			<Heading text={"User Management"} />
			<div className="grid sm:grid-cols-2 place-items-center w-full">
				<span className="w-full flex justify-center items-center">
					<ButtonGroup />
				</span>
				<span className="w-full flex sm:justify-end justify-center sm:mt-0 mt-4">
					<SearchBar />
				</span>
			</div>
		</div>
	);
};

export default UserManagement;
