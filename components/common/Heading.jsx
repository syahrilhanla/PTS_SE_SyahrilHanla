import { GiIsland } from "react-icons/gi";

const Heading = ({ text }) => {
	return (
		<div className="w-full h-20 flex justify-center md:justify-start items-center sm:px-6 px-3">
			<GiIsland className="sm:h-12 sm:w-12 h-8 w-8" />
			<h5 className="text-2xl ml-3 px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
				{text}
			</h5>
		</div>
	);
};

export default Heading;
