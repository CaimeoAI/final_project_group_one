import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { MainContext } from "../../context/MainContext.js";

export default function ModalDeleted() {
  const { deleted, setDeleted, selectedProp } = useContext(MainContext);

  const handleClose = () => {
    if (selectedProp.event.title) {
      selectedProp.event.remove();
    }
    setDeleted(false);
  };

  const handleDisagree = () => {
    setDeleted(false);
  };

  return (
    <div>
      <Dialog
        open={deleted}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to delete the event "${selectedProp.event.title}"?`}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDisagree}
            sx={{ color: "red", fontWeight: "bold" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ color: "green", fontWeight: "bold" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
