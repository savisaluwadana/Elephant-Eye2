// src/assets/Components/Loader/FullPageLoader.jsx
import React from 'react';
import CircularIndeterminate from './Loader.jsx';
import Box from '@mui/material/Box';

const FullPageLoader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'white',
            }}
        >
            <CircularIndeterminate />
        </Box>
    );
};

export default FullPageLoader;