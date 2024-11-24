// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Container } from '@mui/material';
import { Rating } from '@mui/material';
import '../../style/main.css';

import Rev1 from '../../assets/img/reviews/1.png';
import Rev2 from  '../img/reviews/2.jpeg'
import Rev3 from  '../img/reviews/3.jpeg'
const reviews = [
    {
        name: "Dilan Ubeysingha",
        photo: Rev1,
        comment: "A good place with all facilities, clean and friendly staff",
        rating: 5
    },
    {
        name: "Oláh Márton",
        photo: Rev2,
        comment: "Very nice staff and good foods included in the room price 😊",
        rating: 4
    },
    {
        name: "Joshi Beck",

        photo: Rev3,
        comment: "We stayed here to go on a safari in Yale Park. The staff is extremely friendly and accommodating. We had a great night here and were picked up by our jeep directly from the hotel for the safari, so we were in the park first thing",
        rating: 5
    }
];

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ review }) => (
    <Card elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' }}>
        <CardMedia
            component="img"
            image={review.photo}
            alt={review.name}
            sx={{ borderRadius: '50%', width: '140px', height: '140px', margin: '0 auto' }}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ margin: '1em 0', fontSize: '1.2rem' }}>
                {review.comment}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {review.name}
            </Typography>
            <Box mt={1}>
                <Rating value={review.rating} readOnly />
            </Box>
        </CardContent>
    </Card>
);

const Reviews = () => {
    return (
        <Container maxWidth={false} sx={{ padding: '4em 0', backgroundColor: '#f0f4f8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h1 className='text-6xl'>Guest Reviews</h1>
            <Grid container spacing={4} sx={{ marginTop: '2em' }}>
                {reviews.map((review, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ReviewCard review={review} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Reviews;