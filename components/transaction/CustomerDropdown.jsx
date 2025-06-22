import { useRef, useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CustomerDropdown = ({ buyers, setCurrentBuyer }) => {
	const [open, setOpen] = useState(false);

	const ref = useRef();

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		// Add event listener when component mounts
		document.addEventListener("mousedown", handleClickOutside);
		// Remove event listener when component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative">
			<button
				className="w-full text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium rounded-lg text-sm px-4 py-2.5
        dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 flex flex-row justify-center items-center gap-2"
				type="button"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				Select Buyer <AiFillCaretDown />
			</button>{" "}
			<div
				ref={ref}
				className={`${
					open ? "absolute" : "hidden"
				} z-30 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
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
