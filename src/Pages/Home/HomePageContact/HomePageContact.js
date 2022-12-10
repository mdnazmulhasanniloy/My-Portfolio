import React, { useRef } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import emailjs from '@emailjs/browser';

const HomePageContact = () => {
    const [success, setSuccess] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_uqjaki9', 'template_zt12gxd', form.current, 'dtjoYZ8yxKiBWfpS7')
            .then((result) => {
                if (result.text === "OK");
                setSuccess(true);
                setFailed(false);
                event.target.user_name.value = '';
                event.target.user_email.value = '';
                event.target.subject.value = '';
                event.target.message.value = '';
            }, (error) => {
                setSuccess(false);
                setFailed(true);
            });
    }


    return (
        <section className='mt-20 w-11/12 mx-auto'>

            <div className="py-16 relative" id="contact">
                <div className="">
                    <h5 className="uppercase text-xl text-secondary mb-4 font-base tracking-widest" > Contact</h5 >
                    <h2 className="font-bol text-4xl sm:text-6xl mb-7">Contact With Me</h2>
                </div >
                <div className="grid sm:grid-cols-12 gap-10 mt-12" data-aos="fade-up" data-aos-offset="500"
                    data-aos-easing="ease-in-sine">
                    <div className="defaultGradient col-span-4 sm:col-span-8 p-4 sm:p-12 rounded-lg">
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit} ref={form}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block uppercase text-base tracking-widest text-gray-600">Your Name</label>
                                    <input type="text" name="user_name" id="name" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block uppercase text-base tracking-widest text-gray-600">Email</label>
                                    <input type="email" name="user_email" id="email" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block uppercase text-base tracking-widest text-gray-600">Subject</label>
                                <input type="text" name="subject" id="subject" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block uppercase text-base tracking-widest text-gray-600">Your Message</label>
                                <textarea name="message" rows="5" id="message" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                            </div>
                            <div>

                                <PrimaryButton><button type="submit" className="p-5">Send Message <FaPaperPlane className='inline' /></button></PrimaryButton>

                            </div>
                        </form >
                    </div >
                    <div className="defaultGradient col-span-4 py-8 px-6 rounded-lg" data-aos="fade-left" data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                        <h1 className="text-2xl font-bold mt-4">MD Nazmul Hasan</h1>
                        <h3 className="text-xl text-gray-600 mt-2">MERN-Stack Developer</h3>
                        <h5 className="text-lg text-gray-600 mt-2">I am available for freelance work. Feel free to contact with me.</h5>
                        <hr className="bg-gray-200 rounded-lg my-2" />
                        <h5 className="text-lg text-gray-600 mt-2">Phone: +880 1321-834780</h5>
                        <h5 className="text-lg text-gray-600 mt-2">Email: <Link href="mailto:mdnazmul.hasan@gmail.com">mdnazmul.hasan@gmail.com</Link></h5>
                        <hr className="bg-gray-200 rounded-lg my-2" />
                        <div className="mt-3">
                            <h5 className="uppercase text-gray-700 font-semibold">Follow Me</h5>

                        </div>
                    </div>
                </div>
                {
                    success && <div className="bg-green-300 p-4 fixed rounded left-4 bottom-4">
                        <FaCheckCircle className="text-green-800 inline" /> Your Message Successfully Sent!
                    </div>
                }
                {
                    failed && <div className="bg-red-300 p-4 fixed rounded left-4 bottom-4">
                        <FaExclamationCircle className="text-red-800 inline" /> Message Sent Failed!
                    </div>
                }

            </div >

        </section>
    );
};

export default HomePageContact;