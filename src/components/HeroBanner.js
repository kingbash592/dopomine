import React from 'react'
import {Box , Stack , Typography, Button } from '@mul/material';

import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx= {{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position = "relative" p ="20px">
        <Typography color = "#ff2625"
        fontWeight = "600" fontSize = "26px">
            Fitness club
        </Typography>
        <Typography fontWeight ={700}
        sx = {{ fontSize: { lg: '44px', xs:'40px'}}}>
            Sweat , Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="20px" 
        LineHeight="35px" mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant = "contained"
        color ="error" href="#exercises">Explore Exercises</Button>
        <img src={} />
    </Box>
  )
}

export default HeroBanner