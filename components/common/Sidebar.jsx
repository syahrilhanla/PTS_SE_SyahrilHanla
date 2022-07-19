import Link from "next/link";

import { GrTransaction } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";

const Sidebar = () => {
	return (
		<aside className="h-full md:w-64 w-20" aria-label="Sidebar">
			<div
				className="h-full w-full overflow-y-auto py-4 px-3 shadow-black shadow-sm
			 bg-white rounded dark:bg-gray-800 grid grid-rows-[1fr_14fr]"
			>
				{/* Logo */}
				<div className="w-full flex justify-start items-center gap-3 px-3">
					<GiIsland className="md:h-10 md:w-10 h-8 w-8" />
					<p className="md:block hidden">The Island Shop</p>
				</div>

				{/* Navigations */}
				<ul className="space-y-6 md:space-y-3 flex flex-col justify-center">
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
							<a className="flex items-center md:justify-start justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500">
								<HiOutlineDocumentReport />
								<span className="ml-3 md:block hidden">User Management </span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="flex items-center md:justify-start justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500">
								<AiOutlineUsergroupAdd />
								<span className="ml-3 md:block hidden">Summary</span>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
