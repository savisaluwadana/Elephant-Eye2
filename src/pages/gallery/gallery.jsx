import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import image1 from '../../assets/img/cardImages/Bundala.jpg';
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import './gallery.css';


//import the gallery images
import img1 from '../../assets/img/gallery/1 (1).jpg';
import img2 from '../../assets/img/gallery/1 (2).jpg'

const images = [
    {
        url: img1,
        title: 'Serene Mountain Retreat',
        description: 'A serene mountain retreat 2 hours from Kandy.'
    },
    {
        url: img2,
        title: 'Western Meals',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: image1,
        title: 'Western Meals',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: image1,
        title: 'Western Meals',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: image1,
        title: 'Western Meals',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: image1,
        title: 'Western Meals',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    // Add more images as needed
];

const Gallery = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <LandingPage />
            
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-center text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Gallery</h1>
                <p className="mt-6 font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                    Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                    culture and tranquility.
                </p>
            </div>

            {/* Gallery Grid Section */}
            <div className="w-full mt-24 px-4">
                <Grid container spacing={4} justifyContent="center">
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card className="w-full">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.url}
                                    alt={image.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {image.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {image.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-12">
                <Footer />
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
};

export default Gallery;
