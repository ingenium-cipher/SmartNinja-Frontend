import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";

const palette = ["green", "orange", "red", "#D3D3D3"];
const pieData = [
  { id: 0, value: 10, label: "Easy" },
  { id: 1, value: 20, label: "Medium" },
  { id: 2, value: 10, label: "Hard" },
  { id: -1, value: 60, label: "Not Solved" },
];

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: "0.75rem",
  maxWidth: 100,
}));

function PieCenterLabel({ children, radius, pad = 5 }) {
  return (
    <StyledText x={radius + pad} y={radius + pad}>
      {children}
    </StyledText>
  );
}

function ProgressPieChart({ radius = 50 }) {
  const size = {
    width: 2 * (radius + 5),
    height: 2 * (radius + 5),
  };
  return (
    <PieChart
      series={[
        {
          data: pieData,
          innerRadius: radius,
          outerRadius: radius + 5,
          paddingAngle: 0,
          cornerRadius: 3,
          startAngle: 0,
          endAngle: 360,
          cx: radius,
          cy: radius,
        },
      ]}
      slotProps={{
        legend: { hidden: true },
      }}
      colors={palette}
      {...size}
    >
      <PieCenterLabel radius={radius}>40/100</PieCenterLabel>
    </PieChart>
  );
}
export default ProgressPieChart;
