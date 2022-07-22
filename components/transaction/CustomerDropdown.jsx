import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CustomerDropdown = ({ buyers, setCurrentBuyer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative">
			<button
				className="w-44 text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium rounded-lg text-sm px-4 py-2.5
        dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 flex flex-row justify-center items-center gap-2"
				type="button"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				Select Buyer <AiFillCaretDown />
			</button>

			<div
				className={`${
					open ? "absolute" : "hidden"
				} z-30 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
				// style={{
				// 	position: "absolute",
				// 	inset: "0px auto auto 0px",
				// 	margin: "0px",
				// 	transform: "translate(258px, 70px)",
				// }}
			>
				<ul
					className="py-1 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDividerButton"
				>
					{buyers.map((buyer) => (
						<li key={buyer.name}>
							<button
								className="flex justify-between w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={() => {
									setCurrentBuyer(buyer);
									setOpen(false);
								}}
							>
								<p className="text-base font-medium">{buyer.name}</p>
								<p>{buyer.type}</p>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CustomerDropdown;
