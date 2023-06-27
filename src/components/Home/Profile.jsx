import React from 'react';
import pic3 from '../../../public/resume.jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Profile = () => {
    return (
        <div className='mb-12'>
            <h3 className='text-4xl text-center font-bold text-slate-100'>About <span className='text-orange-400'>Me</span></h3>
            <h3 className='text-center mb-10 text-xl uppercase'>In Brief</h3>
            <div className='md:flex justify-evenly gap-10'>
                <div className='w-9/12'>
                    <div className='md:flex p-5 gap-5 bg-sky-900 rounded-md'>
                        <div className='border-r-4 p-5 ml-5 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>45+</h2>
                            <p>Projects done</p>
                        </div>
                        <div className='border-r-4 p-5 ml-5 border-indigo-500'>
                            <h2 className='text-center  bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>12+</h2>
                            <p>Assignment Completed</p>
                        </div>
                        <div className=' p-5 ml-5'>
                            <h2 className='text-center bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>1+</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <h3 className='text-2xl py-6 text-center'>Main Projects</h3>
                    <div className='md:flex gap-8 text-lg'>
                        <div className='bg-sky-800 p-8 rounded-md '>
                            <h4 className='text-center ml-10 bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>1</h4>
                            <p>Name: <br /> Sports Car Marketplace
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="">server</a> | <a href="">live</a>
                            </p>
                        </div>
                        <div className='bg-sky-800  p-8 rounded-md '>
                            <h4 className='text-center ml-10 bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>2</h4>
                            <p>Name: <br /> Art School class
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="">server</a> | <a href="">live</a>
                            </p>
                        </div>
                        <div className='bg-sky-800 p-8 rounded-md '>
                            <h4 className='text-center ml-10 bg-slate-300 p-3 text-orange-400 text-2xl w-16 font-bold rounded mb-2'>3</h4>
                            <p>Name: <br /> Chef Recipe hunter
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="">server</a> | <a href="">live</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='md:h-[500px] rounded-md' src={pic3} alt="" />
                </div>
            </div>

            <div className='w-96 mt-5 flex gap-10 text-2xl text-center mx-auto p-5 rounded'>
                <a className='btn btn-success' href="">Github Repository<FaArrowAltCircleRight/></a>
                <a className='btn btn-success' href="">Resume Link<FaArrowAltCircleRight/></a>
            </div>


        </div>
    );
};

export default Profile;