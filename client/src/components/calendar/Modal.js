import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FullCalend from "../../components/calendar/FullCalend.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [valueStart, setValueStart] = useState(dayjs("2014-08-18T21:11:54"));

  const [valueEnd, setValueEnd] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeTimeStart = (newValue) => {
    setValueStart(newValue);
  };

  const handleChangeTimeEnd = (newValue) => {
    setValueEnd(newValue);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Calendar Event
          </Typography>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Title" id="fullWidth" />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Allday
          </Typography>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <TimePicker
                label="Start"
                value={valueStart}
                onChange={handleChangeTimeStart}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="End"
                value={valueEnd}
                onChange={handleChangeTimeEnd}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <Button variant="contained" endIcon={<SendIcon />}></Button>
        </Box>
      </Modal>
    </div>
  );
}
