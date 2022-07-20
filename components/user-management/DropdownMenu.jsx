import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const DropdownMenu = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<button
				className="inline-flex gap-2 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				type="button"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				Last 30 days
				<AiFillCaretDown />
			</button>
			<div
				className={`z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
					open ? "block" : "hidden"
				}`}
				style={{
					position: "absolute",
					inset: "0px auto auto 0px",
					margin: "0px",
					transform: "translate(0px, 46px)",
				}}
			>
				<ul
					className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownRadioButton"
				>
					<li>
						<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
							<input
								type="radio"
								name="filter-radio"
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="filter-radio-example-3"
								className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
							>
								Last 30 days
							</label>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DropdownMenu;
