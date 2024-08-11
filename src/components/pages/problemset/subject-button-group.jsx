import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { UPDATE_SUBJECT_FILTER_ONCLICK } from "../../../constants/action-types.ts";

function SubjectButtonGroup({ subjectList, dispatch }) {
  const handleClick = (val, idx) => {
    console.log(val, idx);
    dispatch({
      type: UPDATE_SUBJECT_FILTER_ONCLICK,
      index: idx,
      value: !val.isSelected,
    });
  };
  return (
    <Stack direction="row" spacing={2}>
      {subjectList.map((subject, idx) => (
        <Button
          // eslint-disable-next-line
          variant={subject.isSelected == true ? "contained" : "outlined"}
          type="subject-filter"
          size="large"
          onClick={() => handleClick(subject, idx)}
          startIcon={subject.icon}
          sx={{ borderRadius: "2rem" }}
        >
          {subject.name}
        </Button>
      ))}
    </Stack>
  );
}
export default SubjectButtonGroup;
