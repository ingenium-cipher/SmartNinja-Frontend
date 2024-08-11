import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function TableFilterButton({ name = "Default" }) {
  const handleClick = () => {};
  return (
    <Button
      id="table-filter-button"
      variant="contained"
      type="table-filter"
      //   aria-controls={open ? "demo-customized-menu" : undefined}
      aria-haspopup="true"
      //   aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      sx={{
        flexGrow: 1,
      }}
      endIcon={<KeyboardArrowDownIcon />}
      disableElevation
    >
      {name}
    </Button>
  );
}
export default TableFilterButton;
