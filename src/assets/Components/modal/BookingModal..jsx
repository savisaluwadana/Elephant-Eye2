// src/assets/Components/modal/BookingModal..jsx
import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, IconButton, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/Book';

const BookingModal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        nic: '',
        passportNumber: '',
        nationality: '',
        countryCode: '',
        mobileNumber: '',
        adults: '',
        children: '',
        checkinDate: '',
        checkoutDate: ''
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            checkinDate: today,
            checkoutDate: today
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Name: ${formData.name}%0ANIC: ${formData.nic}%0APassport Number: ${formData.passportNumber}%0ANationality: ${formData.nationality}%0ACountry Code: ${formData.countryCode}%0AMobile Number: ${formData.mobileNumber}%0AAdults: ${formData.adults}%0AChildren: ${formData.children}%0ACheck-in Date: ${formData.checkinDate}%0ACheck-out Date: ${formData.checkoutDate}`;
        const whatsappUrl = `https://wa.me/94716520690?text=${message}`;
        window.location.href = whatsappUrl;
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    height: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    overflowY: 'auto',
                    maxHeight: 'calc(100% - 64px)',
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="bold" color="primary">
                        Book Now
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Card elevation={4} sx={{ borderRadius: 2, mt: 3 }}>
                    <CardContent>
                        <Typography variant="h6" align="center" gutterBottom fontWeight="bold">
                            Elephant Eye Hotel Reservation
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        sx={{ borderRadius: 1, fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="NIC"
                                        name="nic"
                                        value={formData.nic}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Passport Number"
                                        name="passportNumber"
                                        value={formData.passportNumber}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Nationality"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Country Code"
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Adults"
                                        name="adults"
                                        type="number"
                                        inputProps={{ min: 1 }}
                                        value={formData.adults}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Children"
                                        name="children"
                                        type="number"
                                        inputProps={{ min: 0 }}
                                        value={formData.children}
                                        onChange={handleChange}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                        InputLabelProps={{ sx: { fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Check-in Date"
                                        name="checkinDate"
                                        type="date"
                                        value={formData.checkinDate}
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: { fontSize: '0.75rem' }
                                        }}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Check-out Date"
                                        name="checkoutDate"
                                        type="date"
                                        value={formData.checkoutDate}
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: { fontSize: '0.75rem' }
                                        }}
                                        required
                                        sx={{ fontSize: '0.75rem' }}
                                        InputProps={{ sx: { height: 36, fontSize: '0.75rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'linear-gradient(to right, #329946, #99c83b)',
                                            color: '#fff',
                                            py: 1,
                                            fontWeight: 'bold',
                                            fontSize: '0.875rem',
                                            '&:hover': {
                                                backgroundColor: '#28773c',
                                            },
                                        }}
                                        startIcon={<BookIcon />}
                                    >
                                        Book Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    );
};

export default BookingModal;