import Link from "next/link";

import { GrTransaction } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";
import Tooltip from "./Tooltip";

const Sidebar = () => {
	return (
		<div className="h-full md:w-64 w-16">
			<aside className="h-full md:w-52 w-16 fixed" aria-label="Sidebar">
				<div
					className="h-full w-full overflow-y-auto py-4 px-1  shadow-md
			 bg-white rounded dark:bg-gray-800 grid grid-rows-[1fr_14fr]"
				>
					{/* Logo */}
					<div
						className="w-full flex sm:justify-between md:mt-4
					 justify-center items-center gap-1 md:px-5 px-0 "
					>
						<GiIsland className="md:h-10 md:w-10 h-6 w-6" />
						<p className="md:block hidden">The Island Shop</p>
					</div>

					{/* Navigations */}
					<ul className="space-y-6 md:space-y-3 px-3 flex flex-col justify-center">
						<li>
							<Link href="/">
								<a className="flex items-center md:justify-start justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500">
									<GrTransaction />
									<span className="ml-3 md:block hidden">Transaction</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="#">
								<a
									className="flex items-center md:justify-start 
							justify-center p-2 text-base font-normal text-gray-900 rounded-lg 
							dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
									data-tooltip-target="user-management"
								>
									<HiOutlineDocumentReport />
									<span className="ml-3 md:block hidden">User Management </span>
									<Tooltip
										tooltipTarget={"user-management"}
										message="User Management"
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href="#">
								<a
									className="flex items-center md:justify-start 
							justify-center p-2 text-base font-normal text-gray-900 
							rounded-lg dark:text-white hover:bg-gray-100
							 dark:hover:bg-gray-500"
								>
									<Tooltip
										tooltipTarget={"user-management"}
										message="User Management"
									/>
									<AiOutlineUsergroupAdd />
									<span
										className="ml-3 md:block hidden"
										data-tooltip-target="user-management"
									>
										Summary
									</span>
									{/* <Tooltip
									tooltipTarget={"user-management"}
									message="User Management"
								/> */}
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
