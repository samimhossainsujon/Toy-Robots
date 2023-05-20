import React from 'react';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Rect_Tabs from './Rect_Tabs';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Gallery/>     
            <Rect_Tabs></Rect_Tabs>
        </div>
    );
};

export default Home;