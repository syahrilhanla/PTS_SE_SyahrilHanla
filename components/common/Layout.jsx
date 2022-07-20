import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="w-full min-h-[100vh] text-slate-800 bg-gray-100">
			<div className="sm:flex h-full grid grid-cols-[1fr_5fr]">
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
