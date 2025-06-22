import { useRouter } from "next/router";
import Link from "next/link";

import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineUsergroupAdd, AiOutlineShop } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";

const Sidebar = () => {
	const router = useRouter();

	const navButtons = [
		{
			link: "/",
			text: "Shop",
			icon: () => <AiOutlineShop />,
		},
		{
			link: "/users",
			text: "User Management",
			icon: () => <AiOutlineUsergroupAdd />,
		},
		{
			link: "/summary",
			text: "Summary",
			icon: () => <HiOutlineDocumentReport />,
		},
	];

	const Navigations = ({ navButton }) => {
		return (
			<li>
				<Link href={navButton.link}>
					<a
						className={`${
							router.pathname === navButton.link && "bg-gray-100"
						} flex items-center lg:justify-start 
					justify-center p-2 text-base font-normal 
					text-slate-700 rounded-lg dark:text-white
					 hover:bg-gray-200 dark:hover:bg-gray-500`}
					>
						{navButton.icon()}
						<span className="ml-3 lg:block hidden">{navButton.text}</span>
					</a>
				</Link>
			</li>
		);
	};

	return (
		<div className="h-full lg:w-96 w-16 z-30">
			<aside className="h-full lg:w-72 w-16 fixed" aria-label="Sidebar">
				<div
					className="h-full w-full overflow-y-auto py-4 px-1  shadow-md
			 bg-white rounded dark:bg-gray-800 grid grid-rows-[1fr_14fr]"
				>
					{/* Logo */}
					<div
						className="w-full flex lg:justify-between lg:mt-4
					 justify-center items-center gap-1 lg:px-5 px-0 "
					>
						<GiIsland className="lg:h-10 lg:w-10 h-6 w-6" />
						<p className="lg:block hidden">The Island Shop</p>
					</div>

					{/* Navigations */}
					<ul className="space-y-6 lg:space-y-3 px-3 flex flex-col justify-center">
						{navButtons.map((navButton) => (
							<Navigations key={navButton.text} navButton={navButton} />
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
