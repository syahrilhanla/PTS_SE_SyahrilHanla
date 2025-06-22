import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { formatPriceIDR } from "../helpers/formatPriceIDR";

const GraphsComponent = ({ weeklyData }) => {
	const transformWeeklyData = weeklyData.map((data) => ({
		name: data.name,
		revenue: data.revenue,
	}));

	return (
		<div className="w-full overflow-x-auto border-slate-500 shadow-md">
			<ResponsiveContainer width={"100%"} height={400}>
				<LineChart
					width={"100%"}
					height={400}
					data={transformWeeklyData}
					margin={{
						top: 10,
						right: 30,
						left: 10,
						bottom: 15,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip
						content={({ active, payload }) => {
							if (active && payload && payload.length) {
								return (
									<div className="bg-white p-2 rounded shadow">
										<h4 className="text-lg font-semibold">
											{payload[0].payload.name}
										</h4>
										<p className="text-sm text-gray-700">{`Revenue: ${formatPriceIDR(
											payload[0].value
										)}`}</p>
									</div>
								);
							}
							return null;
						}}
					/>
					<Legend />
					<Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default GraphsComponent;
