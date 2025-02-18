import {
  Button,
  Typography,
  Container,
  Paper,
  Grid2,
  Avatar,
  Stack,
} from "@mui/material";
import loginGIF from '../assets/loginGIF.json'
import { useFormik } from "formik";
import * as Yup from 'yup'
import Lottie from "lottie-react";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router";
import InputFeild from "../components/input/InputFeild";
import axios from 'axios'
// import { typeData } from "../types";

const Login = () => {
  const navigate = useNavigate();

   const validationSchema = Yup.object().shape({
      password: Yup.string().min(6).required("Invalid password"),
      email: Yup.string()
        .required("Invalid Email")
        .matches(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          "Invalid email address"
        ),
    });
 
     const {handleChange,handleSubmit,values,errors,handleBlur,touched} = useFormik({
      initialValues:{
        email:"",
        password:""
      },
      validationSchema,
      onSubmit:async (values)=>{
       console.log(values)
        await axios.post('http://localhost:4500/api/login',values)
        .then((res) => console.log(res))
       navigate("/dashboard");

      },
     })
     console.log(errors)


  return (
    <Container maxWidth="md">
      <Paper elevation={15} sx={{p:5,mt:15}}>
      <Grid2 container size={{xs:12}}>

   <Grid2 size={{xs:12,sm:6}} sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <Lottie animationData={loginGIF} loop={true}/>
   </Grid2>

  <Grid2 size={{xs:6}} sx={{mt:5,pl:5}}>
        <Stack
          direction="column"
          spacing="0.5"
          sx={{ pb: 3, display: "flex", alignItems: "center",justifyContent:"center" }}
        >
          <Avatar sx={{ background: "#F05" }}>
            <LockIcon />
          </Avatar>
          <Typography>Login</Typography>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 12 }}>
              <InputFeild 
              label="Email:"
              PropsValue={{
                id:"email",
                size:"small",
                name:"email",
                onBlur: handleBlur,
                value:values.email,
                onChange:handleChange,
                error: touched.email && errors.email,
                helperText:touched.email && errors.email ,
              }}  
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 12 }}>
            <InputFeild 
              label="Password:"
              PropsValue={{
                id:"password",
                size:"small",
                type:"password",
                name:"password",
                value:values.password,
                onChange:handleChange,
                onBlur:handleBlur,
                error: touched.password && errors.password,
                helperText:touched.password && errors.password,
              }}
              />
            </Grid2>

            <Grid2 size={{ xs: 6 }} sx={{ textAlign: "start" }}>
              <Typography variant="body2"><Link to="/forgot-password">Forgotten Password?</Link></Typography>
              <Typography  variant="body2">Create new Account? <Link to="/signup">Sign Up</Link>
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 6 }} sx={{ textAlign: "right" }}>
              <Button variant="outlined" type="submit" size="small" fullWidth>
                Login
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
      </Grid2> 
      </Paper>
    </Container>
  );
};

export default Login;
