import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

/** ICONS **/
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import BugReportIcon from "@mui/icons-material/BugReport";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  height: "75vh",
  bgcolor: "background.paper",
  border: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ProblemModalMCQ({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalBoxStyle} display="flex" flexDirection="column">
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton aria-label="Share Button">
            <ArrowBackIcon sx={{ color: "primary.dark" }} />
          </IconButton>
          <Chip label="CAT" size="medium" />
          <Chip label="Logical Reasoning" size="medium" />
          <Chip label="MCQ" size="medium" />
          <Chip label="Medium Difficulty" size="medium" />
          <Button
            id="problem-share-button"
            variant="text"
            startIcon={<ShareIcon />}
            sx={{
              marginLeft: "auto!important",
            }}
          >
            Share this Question
          </Button>
          <Button
            id="problem-share-button"
            variant="text"
            startIcon={<BugReportIcon />}
          >
            Report a Problem
          </Button>
        </Stack>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          my={2}
          lineHeight="1.5rem"
        >
          Lorem ipsum dolor sit amet consectetur. Sed massa scelerisque etiam at
          facilisi donec a commodo massa. Pharetra aliquet a scelerisque
          vulputate. Scelerisque magnis suspendisse lacus vitae enim aliquet
          nulla. Mauris amet ullamcorper commodo scelerisque. Mauris quis
          commodo ipsum augue elementum luctus sed. Amet congue id tincidunt
          faucibus enim curabitur lobortis bibendum. Id blandit ut cras ipsum
          risus odio. Fringilla ultricies duis eget mi aenean sed egestas nisi.
          Malesuada hac libero in quis.
        </Typography>
        <Stack direction="column" alignItems="start" spacing={2}>
          <Button id="problem-option-1" variant="contained" sx={{}}>
            Option 1
          </Button>
          <Button id="problem-option-2" variant="contained" sx={{}}>
            Option 2
          </Button>
          <Button id="problem-option-3" variant="contained" sx={{}}>
            Option 3
          </Button>
          <Button id="problem-option-4" variant="contained" sx={{}}>
            Option 4
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} mt="auto">
          <Button
            id="see-solution-button"
            variant="text"
            size="large"
            endIcon={<KeyboardDoubleArrowDownIcon />}
          >
            See Solution
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
