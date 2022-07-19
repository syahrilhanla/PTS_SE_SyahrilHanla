import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="w-full h-[100vh] text-slate-800 bg-gray-100">
			<Sidebar />
			{children}
		</div>
	);
};

export default Layout;
