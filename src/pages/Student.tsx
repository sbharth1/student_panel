import { useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox"
import { Button } from "@mui/material";
import StudentForm from "../components/form/StudentForm";
import StudentTable from "../components/form/StudentTable";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StudentColumnData, StudentRowData } from "../types";

const Student = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedBox,setSelectedRow] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


const columns:StudentColumnData[]  = [
  {feilds:"id",headerName:"Students Id"},
  {feilds:"name",headerName:"Name"},
  {feilds:"email",headerName:"Email"},
]

  
const rows:StudentRowData[] = [
    {id:1,name:"donald",email:"trump@gmail.com"},
    {id:2,name:"john",email:"doe@gmail.com"},
    {id:3,name:"mark",email:"zukerberg@gmail.com"},
  ];

  const addActionHeader = [
  {feilds:"action",headerName:"Action"},
]

const actions = [
  {
    icon:<EditIcon/>,
    delete:<DeleteIcon/>
  }
]

  return (<>

    <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      
  {/* StudentForm */}
    <ReactDialogBox open={open} handleClose={handleClose} formId="student" title={selectedBox ? 'Update Student Form' : 'Create Student Form'} selectedBox={selectedBox}>
      <StudentForm formId="student"/>
    </ReactDialogBox>

      {/* StudentTable */}

      <StudentTable columns={columns} rows={rows} actions={actions} addActionHeader={addActionHeader} />
    </>
  )
}

export default Student