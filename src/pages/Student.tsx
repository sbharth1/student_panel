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
  const [selectRow,setSelectRow] = useState<object | string>(''); 

  const handleClickOpen = () => {
    setSelectRow('')
    setStudentForm(false)
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
  

  const addActionHeader = [
  {feilds:"action",headerName:"Action"},
]

const actions = [
  {
    icon:<EditIcon/>,
    onClick:(row)=> {setOpen(true),setStudentForm(true),setSelectRow(row)}
  },
  {
    delete:<DeleteIcon/>,
    onClick:(row)=> dispatch({type:"DELETE_STUDENT",payload:row.id})
  }
]



  return (<>

    <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

  {/* StudentForm */}
    <ReactDialogBox open={open} handleClose={handleClose} formId="student" title={studentForm ? 'Update Student Form' : 'Create Student Form'} studentForm={studentForm}>
      <StudentForm formId="student" setOpen={setOpen} initialValue={selectRow}  StudentForm={studentForm} dispatch={dispatch} />
    </ReactDialogBox>

      {/* StudentTable */}

      <StudentTable columns={columns} rows={students} actions={actions} addActionHeader={addActionHeader} />
    </>
  )
}

export default Student