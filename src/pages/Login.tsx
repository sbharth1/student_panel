import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid2,
  Avatar,
  Stack,
} from "@mui/material";
import loginGIF from '../assets/loginGIF.json'
import Lottie from "lottie-react";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { typeData } from "../types";
const Login = () => {
  const navigate = useNavigate();

  const loginData: typeData = {
    Email: "",
    Password: "",
  };

  const [data, setData] = useState<typeData>(loginData);
  const [error, setError] = useState<typeData>(loginData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setError(loginData);
      if (!data.Email.trim() || !data.Password.trim())
        return setError({ Password: "Both Feilds are Required!!", Email: "" });
     else if (!data.Email.includes("@"))
        return setError({ Email: "Invalid Email!!", Password: "" });
     else if (!data.Password.trim())
        return setError({ Password: "Password required", Email: "" });
     else if ((data.Password.length) < 6)
      return setError({ Password: "Password must be 6 character", Email: "" });
      alert("Form submitted");
      setData(loginData);
      setError(loginData);
      navigate("/dashboard");
    } catch (err) {
      console.log(err, "--err in catch");
    }
  };


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
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                onChange={handleChange}
                value={data.Email}
                name="Email"
                size="small"
              />
              {error.Email && (
                <Typography color="red">{error.Email}</Typography>
              )}
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 12 }}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                onChange={handleChange}
                value={data.Password}
                name="Password"
                size="small"
              />
              {error.Password && (
                <Typography color="red">{error.Password}</Typography>
              )}
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
