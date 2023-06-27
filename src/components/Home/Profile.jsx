import React from 'react';
import pic3 from '../../../public/man.jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Profile = () => {
    return (
        <div className='mb-8'>
            <div className='bg-sky-800 rounded p-3 mb-8'>
                <h3 className='text-4xl text-center font-bold text-slate-100'>About <span className='text-orange-400'>Me</span></h3>
               
            </div>
            <div className='md:flex justify-evenly gap-10'>
                <div className=''>
                    <div className='md:flex  gap-5 bg-sky-900 rounded-md'>
                        <div className='border-r-4 p-6 ml-5 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>45+</h2>
                            <p>Projects done</p>
                        </div>
                        <div className='border-r-4 p-6 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>12+</h2>
                            <p>Assignment Completed</p>
                        </div>
                        <div className=' p-6'>
                            <h2 className='text-center bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>1+</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <h3 className='text-2xl py-5 text-center'>Main Projects</h3>
                    <div className='md:flex gap-5 '>
                        <div className='bg-sky-800 w-48 p-6 rounded-md '>

                            <p>Name:  Sports Car Marketplace
                            </p>
                            <p>Github-repo:  <br /><a href="">client</a> | <a href="">server</a> | <a href="https://a-11-toys-marketplace.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                        <div className='bg-sky-800 w-48  p-6 rounded-md '>

                            <p>Name: Art School class
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="" target='_blank'>server</a> | <a href="https://summer-camp-2aa4b.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                        <div className='bg-sky-800 w-48 p-6 rounded-md '>

                            <p>Name:  Chef Recipe hunter
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="" target='_blank'>server</a> | <a href="https://a10-chef-recipe-hunter-client.web.app/" target='_blank'>live</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className=' rounded-md' src={pic3} alt="" />
                </div>
            </div>

            <div className='w-96 mt-5 flex gap-10 text-2xl text-center mx-auto p-5 rounded'>
                <a className='btn btn-success' href="">Github Repository<FaArrowAltCircleRight /></a>
                <a className='btn btn-success' href="">Resume Link<FaArrowAltCircleRight /></a>
            </div>


        </div>
    );
};

export default Profile;