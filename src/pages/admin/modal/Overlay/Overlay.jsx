// src/components/Overlay.jsx

import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Overlay({ onClose }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Unlock the dashboard features
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Contact Wrenix for more information.
                </Typography>
                <Button variant="contained" color="primary" href="https://www.wrenix.com" target="_blank" rel="noopener noreferrer">
                    Contact Wrenix
                </Button>
            </Box>
        </Box>
    );
}