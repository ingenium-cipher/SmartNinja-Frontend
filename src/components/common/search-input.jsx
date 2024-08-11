import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ placeholder = "Search" }) {
  return (
    <Paper
      component="form"
      //   elevation={0}
      sx={{
        p: "0px 4px",
        display: "flex",
        alignItems: "center",
        flexGrow: 3,
        borderRadius: "5px",
      }}
    >
      <IconButton
        type="button"
        sx={{ mx: 1, px: 0 }}
        aria-label="search"
        size="small"
      >
        <SearchIcon sx={{ fontSize: "medium" }} />
      </IconButton>
      <InputBase
        sx={{ flex: 1, fontSize: "small" }}
        placeholder={placeholder}
        inputProps={{ "aria-label": placeholder.toLocaleLowerCase() }}
        size="small"
      />
    </Paper>
  );
}
export default SearchInput;
