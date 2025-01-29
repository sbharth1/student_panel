import { Grid2, TextField } from "@mui/material"
import React, { useState } from "react";
import { FormtypeData, StudentFormProps } from "../../types";

const StudentForm :React.FC<StudentFormProps> = ({formId,dispatch,setStudentForm,setOpen}:any) => {
  const [formData,SetFormData] = useState<FormtypeData>({name:'', email:'',});

  
  const handleChangeStudent = (e:React.ChangeEvent<HTMLInputElement>)=>{
    SetFormData({...formData,[e.target.name]:e.target.value
    })
  }


// useReducer  Usecx

const handleAddStudent = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  
  if(!formData.email || !formData.name) return alert("Fill All Inputs!!");
      if(setStudentForm){
    dispatch({type:'EDIT_STUDENT',payload:{id:setStudentForm.id,...formData}});
      }else{
        dispatch({type:"ADD_STUDENT",payload:formData})
      }
      setOpen(false)
      SetFormData({name:"",email:""});
}
 
    
  return (
    <>
    <form onSubmit={handleAddStudent} id={formId}>

<Grid2 container spacing={2}>
            <Grid2 size={{xs:12}}>
                <TextField fullWidth label="Name" name="name" size='small' value={formData.name} onChange={handleChangeStudent}/>
            </Grid2>

            <Grid2 size={{xs:12}}>
                <TextField fullWidth label="Email" name="email" size='small' value={formData.email} onChange={handleChangeStudent}/>
            </Grid2>
            </Grid2>

    </form>
    </>
  )
}

export default StudentForm