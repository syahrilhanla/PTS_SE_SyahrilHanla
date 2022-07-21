import { GoStop } from "react-icons/go";

const ToastComponent = ({ showToast, setupToast }) => {
	if (
		showToast.toastMessage !==
		"Due to stock shortage customer now can only buy 1 (one) kind of item in a transaction per day. We are really sorry for the inconvenience. As compensation, please kindly take our offering of Free Shipment. Sincerely yours, The Island Shop."
	) {
		setTimeout(() => {
			setupToast("");
		}, 3500);
	}

	return (
		<div className={`flex justify-center w-screen z-50`}>
			<div className="fixed top-10 lg:max-w-lg max-w-sm">
				<div
					className="flex items-center p-4 mb-4 text-gray-500
         bg-red-100 rounded-lg shadow 
         dark:text-gray-400 dark:bg-gray-800"
					role="alert"
				>
					<div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-200 rounded-lg dark:bg-red-700 dark:text-red-200 border border-red-300">
						<GoStop />
					</div>
					<div className="ml-3 p-3 text-sm font-normal text-center">
						{showToast.toastMessage}
					</div>
					<button
						className="px-2 ml-4 py-0 text-red-400 font-semiblock text-xl rounded-md hover:bg-red-200"
						onClick={() => setupToast("")}
					>
						{" "}
						X{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ToastComponent;
