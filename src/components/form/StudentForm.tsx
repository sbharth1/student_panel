import { Grid2, TextField, Typography } from "@mui/material"
import React, { useState } from "react";
import { FormtypeData, StudentFormProps } from "../../types";

const StudentForm :React.FC<StudentFormProps> = ({formId,dispatch,setStudentForm,setOpen,initialValue}:any) => {
  interface typeData {
    name:string,
    email:string,
  }
  const [formData,SetFormData] = useState<FormtypeData>(
    {name: initialValue.name || '', email:initialValue.email || ''}
  );
  const [error,setError]  = useState<typeData>({
    name:'',
    email:''
  })

  
  const handleChangeStudent = (e:React.ChangeEvent<HTMLInputElement>)=>{
    SetFormData({...formData,[e.target.name]:e.target.value});

    if(!formData.name.trim()) setError({name:"name is required",email:""})
     if(!formData.email.includes('@'))  setError({email:"email is required",name:""});
    if(formData.email.includes('@'))  setError({email:"",name:""});
    
  }


// useReducer  Usecx

const handleAddStudent = (e:React.FormEvent<HTMLFormElement>)=>{
  setError({name:'',email:''});
  e.preventDefault();
  
  if(formData.name === '' || formData.email===''){
    setError({email:"both feilds are required",name:""});
    setOpen(true)
  }else{
      if(setStudentForm){
        dispatch({type:'EDIT_STUDENT',payload:{id:initialValue.id,...formData}});
          }else{
            dispatch({type:"ADD_STUDENT",payload:formData})
          }
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
                {error.name && (
                <Typography color="red">{error.name}</Typography>
              )}
            </Grid2>

            <Grid2 size={{xs:12}}>
                <TextField fullWidth label="Email" name="email" size='small' value={formData.email} onChange={handleChangeStudent}/>
                {error.email && (
                <Typography color="red">{error.email}</Typography>
              )}
            </Grid2>
            </Grid2>

    </form>
    </>
  )
}

export default StudentForm