import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ProblemModalMCQ from "./problem-modal/problem-modal-mcq";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "none",
  [`&.${tableCellClasses.head}`]: {
    ...theme.typography.tableHeader,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    paddingTop: "4px",
    paddingBottom: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.primary.lighter,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(status, title, difficulty, links) {
  return { status, title, difficulty, links };
}

const rows = [
  createData(0, "12. Frozen yoghurt", "Easy", 6.0),
  createData(1, "1. Ice cream sandwich", "Hard", 9.0),
  createData(0, "213. Eclair", "Easy", 16.0),
  createData(2, "10. Cupcake", "Medium", 3.7),
  createData(0, "21. Gingerbread", "Hard", 16.0),
];

function ProblemTable({ data, dispatch }) {
  const [openMCQModal, setOpenMCQModal] = React.useState(true);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Question</StyledTableCell>
              <StyledTableCell>Difficulty</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.status}
                </StyledTableCell>
                <StyledTableCell>
                  <Stack spacing={0.5}>
                    <Typography variant="body1" gutterBottom={false}>
                      {row.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip label="Chip Filled" size="small" />
                      <Chip label="Chip Filled" size="small" />
                    </Stack>
                  </Stack>
                </StyledTableCell>
                <StyledTableCell>{row.difficulty}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton aria-label="Share Button" size="small">
                    <ShareIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProblemModalMCQ open={openMCQModal} setOpen={setOpenMCQModal} />
    </>
  );
}

export default ProblemTable;
