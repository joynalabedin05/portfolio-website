import React from 'react';
import pic3 from '../../../public/man.jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Profile = () => {
    return (
        <div className='mb-20 bg-slate-700 p-7 rounded-md'>
            <div className='bg-sky-800 rounded p-3 mb-8'>
                <h3 className='text-4xl text-center font-bold text-slate-100'>About <span className='text-orange-400'>Me</span></h3>
               
            </div>
            <div className='md:flex justify-evenly gap-10'>
                <div className=''>
                    <div className='md:flex  gap-5 bg-sky-900 rounded-md'>
                        <div className='border-r-4 p-6 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>45+</h2>
                            <p>Projects done</p>
                        </div>
                        <div className='border-r-4 p-6 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>12+</h2>
                            <p>Assignment Completed</p>
                        </div>
                        <div className=' p-6 border-r-4 border-indigo-500'>
                            <h2 className='text-center bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>1+</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <h3 className='text-2xl py-5 text-center'>Main Projects</h3>
                    <div className='md:flex gap-5 '>
                        <div className=' w-48 p-6 rounded-md border border-slate-500'>
                            <p><span className='font-bold uppercase text-slate-200'>Name:</span>  Sports Car Marketplace
                            </p>
                            <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span> <br />  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://a-11-toys-marketplace.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                        <div className=' w-48 p-6 rounded-md border border-slate-500'>
                            <p><span className='font-bold uppercase text-slate-200'>Name:</span> Art School Class
                            </p>
                            <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span> <br />  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://summer-camp-2aa4b.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                        <div className=' w-48 p-6 rounded-md border border-slate-500'>
                            <p><span className='font-bold uppercase text-slate-200'>Name:</span>  Chef Recipe Hunter
                            </p>
                            <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span> <br />  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://a10-chef-recipe-hunter-client.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className=' rounded-md py-5' src={pic3} alt="" />
                </div>
            </div>

            <div className='w-1/2  mt-5 md:flex gap-10 text-2xl text-center mx-auto p-8 rounded'>
                <a className='btn btn-success' href="https://github.com/joynalabedin05" target='_blank'>Github Repository<FaArrowAltCircleRight /></a>
                <a  className='btn btn-success md:my-0 my-4' href="resume 5.pdf" target='_blank'>Resume Link<FaArrowAltCircleRight /></a>
            </div>


        </div>
    );
};

export default Profile;