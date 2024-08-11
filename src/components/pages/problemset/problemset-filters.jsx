import SearchInput from "../../common/search-input";
import TableFilterButton from "../../common/table-filter-button";
import Stack from "@mui/material/Stack";

function ProblemsetFilter({ filters, dispatch }) {
  return (
    <Stack direction="row" spacing={1} sx={{ my: 3 }}>
      <TableFilterButton name="List" />
      <TableFilterButton name="Topic" />
      <TableFilterButton name="Pattern" />
      <TableFilterButton name="Difficulty" />
      <TableFilterButton name="Status" />
      <SearchInput placeholder="Search questions" />
    </Stack>
  );
}
export default ProblemsetFilter;
