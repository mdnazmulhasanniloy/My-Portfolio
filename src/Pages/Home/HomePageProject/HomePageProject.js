import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import foodiesThumbnail from '../../../Assets/projects/FoodiesThumbnail.png'
import EasyLearnerThumbnail from '../../../Assets/projects/Easy-LearnerThumbnail.png'
import MobileGhorTHumbanil from '../../../Assets/projects/MobileGhorTHumbanil.png'
import './HomePageProject.css'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg';

const HomePageProject = () => {
    return (
        <div className="py-16 " id="project">
            <div className="text-center">
                <h5 className="uppercase text-xl secondary mb-4 tracking-widest">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                <h2 className="font-bold text-5xl sm:text-6xl mb-7">My Projects</h2>
            </div>

            <div className="w-4/5 mx-auto" >
                <div className="mt-16 grid sm:grid-cols-3 gap-10">
                    <div className="p-8 rounded-lg text-gray-600 bg-[#f9f9fd] shadow-xl" data-aos="fade-left" data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                        <div className='scrollImageScreen'>
                            <div className='scrollImage'>
                                <img src={foodiesThumbnail} alt="" height={600} width={400} />
                            </div>
                        </div>

                        <h6 className="text-secondary uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                        <h4 className="text-3xl font-medium mt-2 mb-4">Foodies</h4>
                        <div className="flex gap-3">
                            <Link className='border-2  border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm'>
                                See Details
                            </Link>

                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://chefs-place-f101d.web.app/')
                            } target='_blank'>
                                <CgMediaLive className='inline' /> Live Site
                            </Link>


                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://github.com/mdnazmulhasanniloy/food-reviiew')
                            } target='_blank'>
                                <FaGithub className='inline' /> Source Code
                            </Link>
                        </div>
                    </div>




                    <div className="p-8 rounded-lg text-gray-600 bg-[#f9f9fd] shadow-xl" data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
                        <div className='scrollImageScreen'>
                            <div className='scrollImage'>
                                <img src={EasyLearnerThumbnail} alt="" height={600} width={400} />
                            </div>
                        </div>

                        <h6 className="text-secondary uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                        <h4 className="text-3xl font-medium mt-2 mb-4">Easy-Learner</h4>
                        <div className="flex gap-3">
                            <Link className='border-2  border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm'>
                                See Details
                            </Link>

                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://easy-learner-77083.web.app/')
                            } target='_blank'>
                                <CgMediaLive className='inline' /> Live Site
                            </Link>


                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://github.com/mdnazmulhasanniloy/Easy-Learner')
                            } target='_blank'>
                                <FaGithub className='inline' /> Source Code
                            </Link>
                        </div>
                    </div>


                    <div className="p-8 rounded-lg text-gray-600 bg-[#f9f9fd] shadow-xl" data-aos="fade-left" data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                        <div className='scrollImageScreen'>
                            <div className='scrollImage'>
                                <img src={MobileGhorTHumbanil} alt="" height={600} width={400} />
                            </div>
                        </div>

                        <h6 className="text-secondary uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                        <h4 className="text-3xl font-medium mt-2 mb-4">Mobile Ghor</h4>
                        <div className="flex gap-3">
                            <Link className='border-2  border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm'>
                                See Details
                            </Link>

                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://mobile-ghore.web.app/')
                            } target='_blank'>
                                <CgMediaLive className='inline' /> Live Site
                            </Link>


                            <Link className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-gradient-to-r from-secondary to-primary hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://github.com/mdnazmulhasanniloy/Mobile-ghor')
                            } target='_blank'>
                                <FaGithub className='inline' /> Source Code
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default HomePageProject;