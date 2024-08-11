import ProgressPieChart from "../../common/progress-pie-chart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function ProgressCard() {
  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography variant="subtitle1" gutterBottom textAlign={"left"}>
        Progress
      </Typography>
      <ProgressPieChart radius={40} />
    </Paper>
  );
}
export default ProgressCard;
