import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";
import ToastComponent from "./ToastComponent";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	const { showToast, setupToast } = useContext(GlobalContext);

	return (
		<div className="w-full min-h-[100vh] text-slate-800 bg-gray-100">
			{showToast.toastMessage === "" ? null : (
				<ToastComponent setupToast={setupToast} showToast={showToast} />
			)}
			<div className="sm:flex h-full w-full grid grid-cols-[1fr_5fr]">
				<Sidebar />
				<div className="w-full flex justify-center">
					<div className="max-w-screen-xl">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
