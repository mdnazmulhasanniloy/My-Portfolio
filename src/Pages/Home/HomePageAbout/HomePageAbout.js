import React from 'react';
import aboutImg from '../../../Assets/about-us.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const HomePageAbout = () => {
    const link = `https://drive.google.com/file/d/1SUAB9ZSSEFyyPuuzz9RTfTXVrzPvC84m/view?usp=share_link`;
    return (
        <section className=' mt-40' data-aos="zoom-out" data-aos-offset="500"
            data-aos-easing="ease-in-sine">
            <div className="hero">
                <div className="hero-content flex lg:gap-20 sm:justify-center lg:justify-between ">
                    <img src={aboutImg} className="w-1/2 rounded-lg hidden lg:block" alt='' />
                    <div className='w-full'>
                        <h1 className="text-3xl font-semibold">LET’S INTRODUCE ABOUT <br />
                            MYSELF</h1>
                        <h5 className="text-lg uppercase  font-semibold mt-7">My Name is MD Nazmul Hasan</h5>
                        <h5 className="text-sm font-normal mt-5">
                            I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.
                            <br /> <br />
                            I recently completed a course in Web Development at Programming Hero. I now want to apply my skills in IT Industry. As a junior full-stack developer, I can implement development concepts to design innovative and ingenious applications for users.

                        </h5>
                        <div className="mt-5 ">
                            <PrimaryButton link={link}>Contact with me </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageAbout;