// src/pages/admin/menu/Offer.jsx
import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)`
    padding: 2rem;
    background: #ffff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    max-width: 400px;
    width: 100%;
`;

const Offer = ({ onImageLinkSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [imageLink, setImageLink] = useState('');
    const [title, setTitle] = useState('');

    const handleImageLinkChange = (e) => {
        setImageLink(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onImageLinkSubmit(imageLink);
            setImageLink('');
            setTitle('');
        }, 2000);
    };

    return (
        <StyledBox>
            <Typography variant="h5" component="h1" gutterBottom>
                Paste the Offer Image Link
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <input
                    type="text"
                    required
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                    type="text"
                    required
                    placeholder="Image Link"
                    value={imageLink}
                    onChange={handleImageLinkChange}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                </Button>
            </form>
        </StyledBox>
    );
};

export default Offer;