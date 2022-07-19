import Link from "next/link";

import { GrTransaction } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";

const Sidebar = () => {
	return (
		<aside className="w-64 h-full" aria-label="Sidebar">
			<div
				className="h-full w-full overflow-y-auto py-4 px-3
			 bg-white rounded dark:bg-gray-800 grid grid-rows-[1fr_9fr]"
			>
				{/* Logo */}
				<div className="w-full flex justify-start items-center gap-3 px-3">
					<GiIsland className="h-10 w-10" />
					<p>The Island Shop</p>
				</div>
				<ul className="space-y-2 mt-5">
					<li>
						<Link href="/">
							<a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
								<GrTransaction />
								<span className="ml-3">Transaction</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<HiOutlineDocumentReport />
								<span className="ml-3">User Management </span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<AiOutlineUsergroupAdd />
								<span className="ml-3">Summary</span>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
