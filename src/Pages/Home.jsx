import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ShareByte | Home</title>
            </Helmet>
            {/* for slider */}
            <div>
              <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;