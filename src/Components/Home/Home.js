import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Rect_Tabs from './Rect_Tabs';
import Discount from './Discount';
import useTitleSetup from '../TitleSetup/TitleSetup';


const Home = () => {


    useTitleSetup('Home' )
       
    return (
        <div>
            <Carousel></Carousel>
            <Gallery />
            <Discount />
            <Rect_Tabs></Rect_Tabs>
        </div>
    );
};

export default Home;