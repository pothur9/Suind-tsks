"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; 
import data from '../data/data.json';
import { TextField, Button, Box, Typography } from '@mui/material';

// Define types for user data based on your JSON structure
interface User {
  username: string;
  password: string;
}

interface Data {
  users: User[];
}

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');

  const router = useRouter(); // Initialize useRouter

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!username || !password) {
      setLoginMessage('Please enter username and password');
      return;
    }

    // Type assertion to inform TypeScript about the shape of `data`
    const userData = data as Data;
    const user = userData.users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoginMessage('Login Successful');
      console.log('Redirecting to /drone-fleet');
      router.push('/drone-fleet'); 
    } else {
      setLoginMessage('Username or password incorrect');
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        backgroundColor: '#f5f5f5' 
      }}
    >
      <Box 
        sx={{ 
          padding: '32px', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          backgroundColor: '#fff', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          width: '100%', 
          maxWidth: '400px'
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            id="outlined-username"
            label="Username"
            variant="outlined"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            id="outlined-password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
          >
            Login
          </Button>
        </form>
        {loginMessage && (
          <Typography 
            variant="body1" 
            sx={{ marginTop: '16px', color: loginMessage === 'Login Successful' ? 'green' : 'red', textAlign: 'center' }}
          >
            {loginMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Login;
