import { useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox"
import { Button } from "@mui/material";
import StudentForm from "../components/form/StudentForm";
import StudentTable from "../components/form/StudentTable";

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

    <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      
  {/* StudentForm */}
    <ReactDialogBox open={open} handleClose={handleClose} formId="student" title={selectedBox ? 'Update Student Form' : 'Create Student Form'} selectedBox={selectedBox}>
      <StudentForm formId="student"/>
    </ReactDialogBox>

      {/* StudentTable */}

      <StudentTable/>
    </>
  )
}

export default Student