import { GiIsland } from "react-icons/gi";
import Categories from "../common/Categories";
import Cashier from "./Cashier";

const Heading = () => {
	return (
		<div className="w-full h-20 flex items-center">
			<GiIsland className="h-12 w-12" />
			<h1>The Island Shop</h1>
		</div>
	);
};

const Transaction = () => {
	return (
		<div className="grid grid-cols-[7fr_4fr] w-full">
			<div className=" w-full">
				<Heading />
				<Categories />
			</div>
			<div>
				<Cashier />
			</div>
		</div>
	);
};

export default Transaction;
