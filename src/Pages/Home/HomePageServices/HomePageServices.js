import React from 'react';
import servicesImg1 from '../../../Assets/Services/Services1.png'
import servicesImg2 from '../../../Assets/Services/Service3.png'
import servicesImg3 from '../../../Assets/Services/Service2.png'

const HomePageServices = () => {
    return (
        <section className='mt-20 w-11/12 mx-auto'>
            <div className="text-center">
                <h1 className='text-5xl font-bold '>SERVICE OFFERS</h1>
                <p className='sm:text-sm'> Is give may shall likeness made yielding spirit a itself together created
                    after sea is in beast beginning signs open god you're gathering lithe </p>
            </div>

            <div className=" my-20 services">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                    <div className=" p-12
                      bg-[#f9f9fd]
                        flex flex-col
                        items-center
                        justify-center
                        shadow-lg
                        hover:transition-all
                        hover:duration-300
                        hover:shadow-xl  
                        hover:shadow-[#4d57de4d]"  data-aos="fade-right" data-aos-duration="3000"  >
                        <img className='mb-4 ' src={servicesImg1} alt="" />
                        <h4 className=' text-xl uppercase font-semibold mb-5'>Front-End Development</h4>
                        <p className='text-center'>The front-end is like the human body that we see with normal eyes. I develop front-end with HTML, CSS, Javascript, React.</p>
                    </div>
                    <div className=" p-12
                      bg-[#f9f9fd]
                        flex flex-col
                        items-center
                        justify-center
                        shadow-lg
                        hover:transition-all
                        hover:duration-300
                        hover:shadow-xl  
                        hover:shadow-[#4d57de4d]" data-aos="fade-up" data-aos-duration="3000" >
                        <img className='mb-4 ' src={servicesImg2} alt="" />
                        <h4 className=' text-xl uppercase font-semibold mb-5'>Back-End Development</h4>
                        <p className='text-center'>The back-end is like the human body that we do not see with normal eyes. I develop back-end with Node JS, Express JS, MongoDB.</p>
                    </div>
                    <div className=" p-12
                      bg-[#f9f9fd]
                        flex flex-col
                        items-center
                        justify-center
                        shadow-lg
                        hover:transition-all
                        hover:duration-300
                        hover:shadow-xl  
                        hover:shadow-[#4d57de4d]" data-aos="fade-left" data-aos-duration="3000">
                        <img className='mb-4 ' src={servicesImg3} alt="" />
                        <h4 className=' text-xl uppercase font-semibold mb-5'>Full-Stack Development</h4>
                        <p className='text-center'>The full-stack is like the complete human body that we see and do not see with normal eyes.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomePageServices;