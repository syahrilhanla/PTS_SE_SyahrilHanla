import { BsFillHandbagFill } from "react-icons/bs";
import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";

const Categories = () => {
	const CardCategory = ({ category, number }) => {
		return (
			<div className="w-full">
				<button
					type="button"
					className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4
					 focus:ring-blue-200 font-medium rounded-lg gap-4
					 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
					  focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center"
				>
					{number === 1 && (
						<BsFillHandbagFill className="w-8 h-8 text-slate-100" />
					)}
					{number === 2 && <FaHatCowboy className="w-8 h-8 text-slate-100" />}
					{number === 3 && <FaTshirt className="w-8 h-8 text-slate-100" />}
					{number === 4 && <GiShorts className="w-8 h-8 text-slate-100" />}
					<div className="flex flex-col justify-center items-center">
						<h2 className="">{category}</h2>
						<p className="font-light text-xs">64 items</p>
					</div>
				</button>
			</div>
		);
	};

	return (
		<div
			className="md:w-full w-fit mx-auto md:flex px-4 grid grid-cols-2
		gap-4 justify-center items-center"
		>
			<CardCategory category={"All Item"} number={1} />
			<CardCategory category={"Hats"} number={2} />
			<CardCategory category={"Tops"} number={3} />
			<CardCategory category={"Shorts"} number={4} />
		</div>
	);
};

export default Categories;
