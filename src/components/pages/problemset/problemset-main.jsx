import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SubjectButtonGroup from "./subject-button-group";
import ProgressCard from "./progress-card";
import ProblemsetFilter from "./problemset-filters";
import ProblemTable from "./problem-table";

function ProblemsetMain({ table, dispatch }) {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={2} width="100%">
        <Grid xs={1}></Grid>
        <Grid xs={8}>
          <SubjectButtonGroup
            subjectList={table.filters.subjectList}
            dispatch={dispatch}
          />
          <ProblemsetFilter filters={table.filters} dispatch={dispatch} />
          <ProblemTable data={table.data} dispatch={dispatch} />
        </Grid>
        <Grid xs={2.5}>
          <ProgressCard />
        </Grid>
        <Grid xs={0.5} />
      </Grid>
    </Box>
  );
}
export default ProblemsetMain;
