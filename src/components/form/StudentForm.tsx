import { Grid2, TextField } from "@mui/material"
import React, { useState } from "react";

const StudentForm = ({formId}:any) => {
    interface typeData {
        Name:string,
        Email:string,    
    }
    const [formData,SetFormData] = useState<typeData>({
        Name:'',
        Email:'',
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      SetFormData({...formData,[e.target.name]:e.target.value
      })
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
         e.preventDefault();
         console.table(formData)
     
    }
  return (
    <>
    <form onSubmit={handleSubmit} id={formId}>

<Grid2 container spacing={2}>
            <Grid2 size={{xs:12}}>
                <TextField fullWidth label="Name" name="Name" size='small' value={formData.Name} onChange={handleChange}/>
            </Grid2>

            <Grid2 size={{xs:12}}>
                <TextField fullWidth label="Email" name="Email" size='small' value={formData.Email} onChange={handleChange}/>
            </Grid2>
            </Grid2>

    </form>
    </>
  )
}

export default StudentForm