import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useGetAllCategoryCountsQuery } from "../../redux/features/allStats/AllStats";

const ChartData = () => {
  const { data, isLoading } = useGetAllCategoryCountsQuery(undefined);
  if (isLoading) {
    return <></>;
  }

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFB606",
    "#FF8042",
    "red",
    "pink",
    "#00715D",
    "#00719D",
    "#5E3790",
    "#F4C274",
  ];

  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="mt-11">
      <BarChart
        width={1500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Bar
          dataKey="count"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${entry}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartData;
