import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<div
			className="flex justify-center items-center rounded-xl
       bg-slate-50 w-fit h-8 px-3 mr-4"
		>
			<FaSearch className="md:text-slate-400 text-xl" />
			<input
				type="text"
				placeholder="Search"
				className="border-none sm:w-52 w-full bg-transparent ml-2
				 duration-300 focus:w-72"
			/>
		</div>
	);
};

export default SearchBar;
