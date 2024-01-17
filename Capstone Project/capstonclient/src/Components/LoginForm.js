import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const LoginForm = ({ listOfEmployees, setCurrentUser }) => {
  const navigate = useNavigate();
  const [stateLogin, setStateLogin] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const foundEmployee = listOfEmployees.find(
      (employee) =>
        employee.email === stateLogin.email &&
        employee.password === stateLogin.password
    );
    if (foundEmployee) {
      alert('Login successful');
      setCurrentUser(foundEmployee);
      navigate('/dashboard');
    } else {
      alert('Email or password is not correct');
      setStateLogin({ email: '', password: '' });
    }
  };

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let copiedEmployee = { ...stateLogin };
    copiedEmployee[fieldName] = event.target.value;
    setStateLogin(copiedEmployee);
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={stateLogin.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={stateLogin.password}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
