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

const GraphsComponent = ({ weeklyData }) => {
	return (
		<div className="w-full overflow-x-auto border-slate-500 shadow-md">
			<ResponsiveContainer width={768} height={400}>
				<LineChart
					width={500}
					height={300}
					data={weeklyData}
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
					<Tooltip />
					<Legend />
					<Line type="monotone" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default GraphsComponent;
