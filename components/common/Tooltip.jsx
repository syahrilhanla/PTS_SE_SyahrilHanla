const Tooltip = ({ tooltipTarget, message }) => {
	return (
		<div
			id={tooltipTarget}
			data-tooltip-placement="top"
			role="tooltip"
			className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
			// data-popper-placement="top"
			style={{
				position: "absolute",
				inset: "auto auto 0px 0px",
				margin: "0px",
				transform: "translate(33px, 44px)",
			}}
		>
			{message}
			<div
				className="tooltip-arrow"
				data-popper-arrow
				style={{
					position: "absolute",
					left: "0px",
					transform: "translate(59px, 0px)",
				}}
			></div>
		</div>
	);
};

export default Tooltip;
