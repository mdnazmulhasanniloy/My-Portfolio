import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import './HomePageBanner/HomePageBannser.css'
import HomePageAbout from './HomePageAbout/HomePageAbout';
import HomePageServices from './HomePageServices/HomePageServices';
import HomePageProject from './HomePageProject/HomePageProject';
import HomePageContact from './HomePageContact/HomePageContact';

const Home = () => {
    return (
        <div className='home_page'>
            <HomePageBanner />
            <HomePageAbout />
            <HomePageServices />
            <HomePageProject />
            <HomePageContact />

        </div>
    );
};

export default Home;