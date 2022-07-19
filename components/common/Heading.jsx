import { GiIsland } from "react-icons/gi";

const Heading = () => {
	return (
		<div className="w-full h-20 flex justify-center md:justify-start items-center px-6">
			<GiIsland className="h-12 w-12" />
			<h5 className="text-2xl px-3 md:px-0 font-semibold leading-none text-gray-900 dark:text-white">
				The Islander Shop
			</h5>
		</div>
	);
};

export default Heading;
