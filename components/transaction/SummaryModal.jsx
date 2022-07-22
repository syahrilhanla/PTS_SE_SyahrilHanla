import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../context/DataProvider";

const SummaryModal = () => {
	const { setShowSummary, summaryData } = useContext(GlobalContext);

	const router = useRouter();

	const CloseButton = () => {
		return (
			<button
				type="button"
				className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				onClick={() => {
					setShowSummary(false);
				}}
			>
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
				<span className="sr-only">Close modal</span>
			</button>
		);
	};

	return (
		<>
			<div
				tabindex="-1"
				className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
				role="dialog"
			>
				<div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
								Sales Summary of Today
							</h3>
							<CloseButton />
						</div>

						<div className="p-6 space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-400">
							<p className="grid grid-cols-[7fr_3fr]">
								Total Number of Transactions:{" "}
								<span className="flex justify-center text-lg font-medium">
									{summaryData.totalTransaction}
								</span>
							</p>
							<p className="grid grid-cols-[7fr_3fr]">
								Revenue of The Day:{" "}
								<span className="flex justify-center text-lg font-medium">
									Rp. {summaryData.totalRevenue}
								</span>
							</p>
							<p className="grid grid-cols-[7fr_3fr]">
								Best Selling Item:{" "}
								<span className="flex justify-center text-lg font-medium">
									{summaryData.bestSellingItem.itemName}
								</span>
							</p>
							<p className="grid grid-cols-[7fr_3fr]">
								Best Selling Category:{" "}
								<span className="flex justify-center text-lg font-medium">
									{summaryData.bestSellingCategory.categoryName}
								</span>
							</p>
							<p className="grid grid-cols-[7fr_3fr]">
								Revenue Per Category:{" "}
								<span className="flex justify-center text-lg font-medium">
									<ul className="w-full">
										{summaryData.revenuePerCategory.map((category) => (
											<li
												className="flex justify-around"
												key={category.categoryName}
											>
												<span>{category.categoryName}: </span>
												<span>Rp. {category.revenue}</span>
											</li>
										))}
									</ul>
								</span>
							</p>
							<p className="grid grid-cols-[7fr_3fr]">
								Top Spenders (in order):{" "}
								<span className="flex justify-center text-lg font-medium">
									{summaryData.topThreeSpenders
										.map((buyer) => buyer.buyer)
										.join(", ")}
								</span>
							</p>
						</div>

						<div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
							<button
								data-modal-toggle="defaultModal"
								type="button"
								class="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={() => {
									setShowSummary(false);
									router.push("/summary");
								}}
							>
								Go to Summary Page
							</button>
							<button
								data-modal-toggle="defaultModal"
								type="button"
								class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
								onClick={() => {
									setShowSummary(false);
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SummaryModal;
