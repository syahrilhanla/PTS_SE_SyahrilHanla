import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="w-full h-[100vh] text-slate-800 bg-gray-100">
			<div className="flex h-full">
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
