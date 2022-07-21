import { GoStop } from "react-icons/go";

const ToastComponent = ({ showToast, setupToast }) => {
	setTimeout(() => {
		setupToast("");
	}, 3500);

	return (
		<div className={`absolute top-5 left-[40%]`}>
			<div
				class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500
         bg-red-100 rounded-lg shadow 
         dark:text-gray-400 dark:bg-gray-800"
				role="alert"
			>
				<div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-200 rounded-lg dark:bg-red-700 dark:text-red-200 border border-red-300">
					<GoStop />
				</div>
				<div class="ml-3 text-sm font-normal">{showToast.toastMessage}</div>
				{/* <button className="px-2 ml-4 py-0 text-red-400 font-semiblock text-2xl rounded-md hover:bg-red-200">
					{" "}
					X{" "}
				</button> */}
			</div>
		</div>
	);
};

export default ToastComponent;
