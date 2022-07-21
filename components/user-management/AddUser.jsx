import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const AddUser = () => {
	const CustomerTypeDropdown = () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<button
					className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onClick={() => setOpen((prevState) => !prevState)}
				>
					Dropdown button <AiFillCaretDown />
				</button>
				<div
					className={`${
						open ? "block" : "hidden"
					} duration-300 block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
					data-popper-placement="bottom"
				>
					<ul
						className="py-1 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownDefault"
					>
						<li>
							<a
								href="#"
								className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Dashboard
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	};

	return (
		<div className="mt-5 min-w-[50%] place-content-center">
			<div className="p-4 py-6 w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
				<form className="space-y-6 py-6 " action="#">
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
							name="name"
							id="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							placeholder="Customer's Name"
							required=""
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Customer Type
						</label>
						<CustomerTypeDropdown />
					</div>
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
