import React, { useContext, useState } from "react";
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
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import { useForum } from "../../context/ForumProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
  outline: 0,
};

export default function BasicModal() {
  const { getLocalStorageData } = useForum();
  const [checked, setChecked] = useState(false);

  const {
    setCurrentEvents,
    selectedProp,
    open,
    setOpen,
    setTitle,
    start,
    setStart,
    end,
    setEnd,
    setAllDay,
    objectModal,
    setObjectModal,
    getAllEvents,
  } = useContext(MainContext);

  const handleClose = () => {
    setAllDay(checked);
    setStart(dayjs(objectModal.start));
    setEnd(dayjs(objectModal.end));
    setTitle(objectModal.title);
    if (open) {
      addEvent();
    }
  };

  const handleTitle = (event) => {
    setObjectModal((currentValues) => ({
      ...currentValues,
      title: event,
    }));
  };
  // check box
  const handleChange = (event) => {
    setObjectModal((currentValue) => ({
      ...currentValue,
      allDay: event.target.checked,
    }));
    setChecked(event.target.checked);
    setObjectModal((currentValue) => ({
      ...currentValue,
      start: selectedProp.startStr,
      end: selectedProp.startStr,
    }));
  };
  // time picker
  const formatHour = (time) => {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  };

  // time picker set start time
  const handleChangeTimeStart = (newValue) => {
    setStart(newValue);

    setObjectModal((currentValue) => ({
      ...currentValue,
      start: `${selectedProp.startStr}T${formatHour(newValue.$H)}:${formatHour(
        newValue.$m
      )}:00+01:00`, // '2022-12-29T10:30:00+01:00'
    }));
  };

  // time picker set end time
  const handleChangeTimeEnd = (newValue) => {
    setEnd(newValue);
    setObjectModal((currentValue) => ({
      ...currentValue,
      end: `${selectedProp.startStr}T${formatHour(newValue.$H)}:${formatHour(
        newValue.$m
      )}:00+01:00`, // '2022-12-29T10:30:00+01:00'
    }));
  };

  const addEvent = async () => {
    if (selectedProp) {
      const token = getLocalStorageData("token");
      const URL = `${process.env.REACT_APP_BE_URL}/calendar/addEvent`;
      const configuration = {
        headers: {
          authorization: token,
        },
      };
      try {
        await axios.post(URL, objectModal, configuration);
        setCurrentEvents((currentEventsArray) => [
          ...currentEventsArray,
          objectModal,
        ]);
        getAllEvents();
      } catch (error) {
        console.log(error);
      }
    }
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-tertiary text-text-secondary" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Event
          </Typography>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Title"
              color="grey"
              id="fullWidth"
              name="title"
              onChange={(event) => handleTitle(event.target.value)}
            />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Allday
          </Typography>
          <Checkbox
            sx={{ mb: 2 }}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          {!checked && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <TimePicker
                  label="Start"
                  value={start}
                  onChange={handleChangeTimeStart}
                  renderInput={(params) => (
                    <TextField color="grey" {...params} />
                  )}
                />
                <TimePicker
                  label="End"
                  value={end}
                  onChange={handleChangeTimeEnd}
                  renderInput={(params) => (
                    <TextField color="grey" {...params} />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          )}
          <Button
            sx={{
              backgroundColor: "green",
              border: "1px solid black",
              marginTop: "10px",
              float: "right",
            }}
            variant="contained"
            onClick={() => {
              handleClose();
            }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
