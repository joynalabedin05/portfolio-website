import React from 'react';
import pic3 from '../../../public/resume.jpg'

const Profile = () => {
    return (
        <div className='mb-12'>
            <h3 className='text-4xl text-center font-bold text-slate-100'>About <span className='text-orange-400'>Me</span></h3>
            <h3 className='text-center mb-10 text-xl uppercase'>In Brief</h3>
            <div className='md:flex justify-evenly gap-10'>
                <div className='w-9/12'>
                    <div className='md:flex p-10 gap-5 bg-sky-900 rounded-md'>
                        <div className='border-r-4 p-5 border-indigo-500'>
                            <h2>45+</h2>
                            <p>Projects </p>
                        </div>
                        <div className='border-r-4 p-5 border-indigo-500'>
                            <h2>12+</h2>
                            <p>Assignment </p>
                        </div>
                        <div className='border-r-4 p-5'>
                            <h2>1+</h2>
                            <p>Experience</p>
                        </div>
                    </div>
                    <h3 className='text-2xl py-4'>My Projects</h3>
                    <div className='flex'>
                        <div className='bg-sky-800 p-5 rounded-md '>
                            <h4 className='text-center ml-12 bg-slate-300 p-3 text-orange-400 text-2xl w-14 font-bold rounded mb-2'>1</h4>
                            <p>Name: <br /> Sports Car Marketplace
                            </p>
                            <p>Github-repo: <br /><a href="">client</a> | <a href="">server</a> | <a href="">live</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='md:h-[400px] md:w-[450px] rounded-md' src={pic3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;