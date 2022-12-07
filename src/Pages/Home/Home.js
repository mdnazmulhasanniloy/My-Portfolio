import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import './HomePageBanner/HomePageBannser.css'
import HomePageAbout from './HomePageAbout/HomePageAbout';
import HomePageServices from './HomePageServices/HomePageServices';

const Home = () => {
    return (
        <div className='home_page'>
            <HomePageBanner />
            <HomePageAbout />
            <HomePageServices />
        </div>
    );
};

export default Home;