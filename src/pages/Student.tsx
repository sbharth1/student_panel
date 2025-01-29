import {useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox"
import { Button } from "@mui/material";
import StudentForm from "../components/form/StudentForm";
import StudentTable from "../components/form/StudentTable";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StudentColumnData, } from "../types";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import { reducer } from "../reducer/addStudentReducer";

const Student = () => {
   const [students,dispatch] = useLocalStorageReducer('students',reducer,[]);
  const [open, setOpen] = useState<boolean>(false);
  const [studentForm,setStudentForm] = useState<boolean>(false);
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

  
// const rows:StudentRowData[] = [
//     {id:1,name:"donald",email:"trump@gmail.com"},
//     {id:2,name:"john",email:"doe@gmail.com"},
//     {id:3,name:"mark",email:"zukerberg@gmail.com"},
//   ];

  const addActionHeader = [
  {feilds:"action",headerName:"Action"},
]

const actions = [
  {
    icon:<EditIcon/>,
    onClick:()=> {setOpen(true), setStudentForm(true)}
  },
  {
    delete:<DeleteIcon/>,
    onClick:()=>{}
  }
]



  return (<>

    <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

  {/* StudentForm */}
    <ReactDialogBox open={open} handleClose={handleClose} formId="student" title={studentForm ? 'Update Student Form' : 'Create Student Form'} studentForm={studentForm}>
      <StudentForm formId="student" setOpen={setOpen} setStudentForm={studentForm} dispatch={dispatch} />
    </ReactDialogBox>

      {/* StudentTable */}

      <StudentTable columns={columns} rows={students} actions={actions} addActionHeader={addActionHeader} />
    </>
  )
}

export default Student