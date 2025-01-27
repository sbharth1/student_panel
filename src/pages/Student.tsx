import { useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox"
import { Button } from "@mui/material";

const Student = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (<>
    <div>Student</div>
    <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
    <ReactDialogBox open={open} handleClose={handleClose}/>
    </>
  )
}

export default Student