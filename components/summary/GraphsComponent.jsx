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

const GraphsComponent = () => {
	const data = [
		{
			name: "Day 1",
			name69: 645,
		},
		{
			name: "Day 2",
			name69: 412,
		},
		{
			name: "Day 3",
			name69: 868,
		},
		{
			name: "Day 4",
			name69: 423,
		},
		{
			name: "Day 5",
			name69: 124,
		},
		{
			name: "Day 6",
			name69: 463,
		},
		{
			name: "Day 7",
			name69: 533,
		},
		{
			name: "Day 8",
			name69: 812,
		},
		{
			name: "Day 9",
			name69: 756,
		},
	];
	return (
		<div className="w-full overflow-x-auto border-slate-500 shadow-md">
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 10,
						bottom: 10,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="pv"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="name69" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default GraphsComponent;
