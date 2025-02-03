import { FormControl, FormLabel, TextField } from "@mui/material"

const InputFeild = ({label,PropsValue}) => {
  return (
    <>
    
    <FormControl fullWidth>
        <FormLabel htmlFor={PropsValue.id}>{label}</FormLabel>
        <TextField {...PropsValue}/>
    </FormControl>

    </>
  )
}

export default InputFeild