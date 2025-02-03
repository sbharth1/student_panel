import { useFormik } from "formik"
import InputFeild from "../input/InputFeild"
import { useEffect } from "react";

const FormikForm = ({formId,setOpen,initialValue='',dispatch}) => {

  const {handleSubmit,handleChange,values,setValues} = useFormik({
    initialValues: {
      name:'',
      email:''
    },
    onSubmit :(values)=>{
      console.log(values)
       dispatch({type:"EDIT_STUDENT",paylaod:values})
      setOpen(false)
    }
  });
   
  useEffect(()=>{
    if(initialValue!=''){
      setValues({ ...initialValue })
    }
  },[initialValue,setValues])

  return (
    <>
    <form id={formId} onSubmit={handleSubmit}>
    <InputFeild label="Name:" PropsValue={{
      id:"name",
      size:"small",
      name:"name",
      value:values.name,
      onChange:handleChange
    }}/>
    <InputFeild label="Email:" PropsValue={{
      id:"email",
      size:"small",
      name:"email",
      value:values.email,
      onChange:handleChange
    }}/> 
    </form>
    </> 
  )
}

export default FormikForm