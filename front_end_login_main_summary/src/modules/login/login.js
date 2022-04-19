import React , { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import {browserHistory} from "react-router";

const theme = createTheme({
    palette: {
      //neutral: {
      primary: {
        main: '#3b3748',
        contrastText: '#fff',
      },
    },
    typography: {
      button: {
        fontWeight: 500,
      },
    },
  });
var state = true;
export default function Login() {
  const [validPassword, setValidPassword] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
    // call backend with this info
    console.log("before fetch");
    const response = fetch(`http://localhost:8080/login/${data.get('email')}/${data.get('password')}`).then(response =>{
      return response.json();
    }).then(json =>{
        console.log("it worked" ,json);
        setValidPassword(json);
        // if(json){window.location.href = 'http://localhost:3000/home';}
        if(json){window.location.href = '/home';}
    });

  };

  const onChange = (event) => {
    setValidPassword(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="https://i.giphy.com/ICOgUNjpvO0PC.gif" sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                error={!validPassword}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              defaultValue =""
              onChange={onChange}
            />
            <TextField
              error={!validPassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              defaultValue =""
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}