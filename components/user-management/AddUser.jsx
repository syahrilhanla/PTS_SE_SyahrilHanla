import { useContext, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { GlobalContext } from "../context/DataProvider";
import { postUser } from "../utils/dataPosters";

const CustomerTypeDropdown = ({ setType, type }) => {
	const [open, setOpen] = useState(false);

	const types = ["regular", "VIP", "wholesale"];
	return (
		<div>
			<button
				className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				{type === "" ? "Select Type" : type} <AiFillCaretDown />
			</button>
			<div
				className={`${
					open ? "absolute" : "hidden"
				} duration-300 block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
			>
				<ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
					{types.map((type) => (
						<li key={type}>
							<div
								className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600
						 dark:hover:text-white"
								onClick={() => {
									setType(type);
									setOpen(false);
								}}
							>
								{type}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const AddUser = ({ buyerList }) => {
	const [buyer, setBuyer] = useState("");
	const [type, setType] = useState("");
	const [notif, setNotif] = useState("");
	const { setBuyerList } = useContext(GlobalContext);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (buyer.length < 3) {
			setNotif("Name must be at least 3 characters");
			setTimeout(() => setNotif(""), 3000);
			return;
		}

		// check for duplicate names
		const duplicateName = buyerList.filter((person) => person.name === buyer);
		if (duplicateName.length > 0) {
			setNotif({
				message: "This name has already been used. Please enter another name.",
				type: "",
			});
			setTimeout(() => setNotif(""), 3000);
			return;
		}

		if (type === "") {
			setNotif("Please fill all fields.");
			setTimeout(() => setNotif(""), 3000);
			return;
		}

		const buyerData = {
			id: Math.random() * 100000,
			name: buyer,
			type,
		};

		await postUser(buyerData);
		setBuyerList([...buyerList, buyerData]);
		setNotif({ message: "New Cutomer Added!", type: "success" });
	};

	return (
		<div className="mt-5 min-w-[50%] place-content-center">
			<div className="p-4 py-6 w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
				<form className="space-y-6 py-6 " onSubmit={handleSubmit}>
					<h5 className="text-xl font-medium text-gray-900 dark:text-white">
						Add New Customer
					</h5>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Customer Name
						</label>
						<input
							type="text"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							placeholder="Customer's Name"
							value={buyer}
							onChange={(e) => setBuyer(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Customer Type
						</label>
						<CustomerTypeDropdown setType={setType} type={type} />
					</div>
					{notif !== "" && (
						<p className="text-sm font-lighter text-red-500">{notif.message}</p>
					)}
					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add Customer
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddUser;
