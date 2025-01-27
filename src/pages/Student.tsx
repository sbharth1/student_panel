import { useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox"
import { Button } from "@mui/material";
import StudentForm from "../components/form/StudentForm";

const Student = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedBox,setSelectedRow] = useState(null);

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
    <ReactDialogBox open={open} handleClose={handleClose} title={selectedBox ? 'Update Student Form' : 'Create Student Form'} selectedBox={selectedBox}>
      <StudentForm/>
    </ReactDialogBox>
    </>
  )
}

export default Student