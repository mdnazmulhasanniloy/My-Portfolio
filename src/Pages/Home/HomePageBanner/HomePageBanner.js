import React from 'react';
import bannerImg from '../../../Assets/Banner/home-right.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import Typical from 'react-typical'
import './HomePageBannser.css'




const HomePageBanner = () => {




    return (
        <div className="hero mt-40 ">
            <div className="hero-content justify-between ">
                <div className=''>
                    <div className="flex items-center">
                        <h1 className="text-5xl font-bold mr-5">Hello</h1>
                        <div className="w-96 h-[3px] hidden md:block lg:block bg-black"></div>
                    </div>
                    <h3 className="text-3xl uppercase font-bold  mt-10">I am Nazmul Hasan</h3>

                    <div className='text-2xl mt-5 flex gap-3'>
                        A <Typical
                            loop={Infinity}
                            wrapper="h1"
                            steps={[' Full-Stack Developer', 2000, ' MERN-Stack Develop', 2000, ' Professional Coder', 2000]}
                        />
                    </div>

                    <h5 className="text-xl uppercase  font-bold  my-10"> </h5>
                    <div className="mt-5 ">
                        <PrimaryButton link={`https://drive.google.com/file/d/1SUAB9ZSSEFyyPuuzz9RTfTXVrzPvC84m/view?usp=share_link`}>My Resume</PrimaryButton>

                    </div>
                </div>
                <img src={bannerImg} className="w-1/2 rounded-lg hidden lg:block" alt='' />
            </div>
        </div>
    );
};

export default HomePageBanner;