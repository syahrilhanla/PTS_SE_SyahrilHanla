import { BiShoppingBag } from "react-icons/bi";
import { GiTopHat } from "react-icons/gi";

const Categories = () => {
	const CardCategory = ({ category }) => {
		return (
			<div class="text-slate-200 w-36 p-2 max-w-sm bg-[#729ff1] rounded-lg flex justify-center items-center gap-4">
				<BiShoppingBag className="w-8 h-8 text-slate-300" />
				<div className="flex flex-col justify-center items-center">
					<h2 className="">{category}</h2>
					<p className="font-light text-xs">64 items</p>
				</div>
			</div>
		);
	};

	return (
		<div className="md:w-full w-fit mx-auto md:flex px-4 grid grid-cols-2 gap-4 justify-center items-center">
			<CardCategory category={"All Item"} />
			<CardCategory category={"Hats"} />
			<CardCategory category={"Tops"} />
			<CardCategory category={"Shorts"} />
		</div>
	);
};

export default Categories;
