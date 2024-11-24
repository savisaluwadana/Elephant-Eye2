// src/pages/admin/auth/Auth.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Bg from '../../../assets/img/common/common.jpg';

const StyledBox = styled(Box)`
    padding: 2rem;
    background: #ffff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    max-width: 400px;
    width: 100%;
`;

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const users = new Map();
    users.set('admin', 'admin');

    useEffect(() => {
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.minHeight = '100vh';
        document.body.style.width = '100vw';
        document.body.style.overflow = 'hidden';
        document.body.style.backgroundImage = `url(${Bg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';

        return () => {
            document.body.style = '';
        };
    }, []);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (users.get(credentials.username) === credentials.password) {
                localStorage.setItem('authToken', 'your-auth-token'); // Store the auth token
                navigate('/dashboard');
            } else {
                setError('Invalid username or password');
            }
        }, 2000);
    };

    return (
        <StyledBox>
            <Typography variant="h5" component="h1" gutterBottom>
                Admin Login
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Welcome to the Elephant Eye Hotel Admin Dashboard
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    error={!!error}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    error={!!error}
                    helperText={error && "Please check your username and password"}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<LockOutlined />}
                    disabled={loading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    {loading ? <CircularProgress size={24} /> : "Log In"}
                </Button>

                <Typography variant="caption" color="textSecondary" gutterBottom>
                    All rights reserved. &copy; Elephant Eye.
                </Typography>
            </form>
        </StyledBox>
    );
};

export default Auth;