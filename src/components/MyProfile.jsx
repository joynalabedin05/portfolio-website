import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/FACEBOOK.jpg'
import resume from '../../public/resume.jpg'
const MyProfile = () => {
    return (
        <div className='md:my-20 mt-40'>
            <h3 className='text-4xl p-5 mb-8 rounded text text-center font-bold text-slate-200'> My Profile </h3>
            <div className="card mx-auto md:w-1/2 bg-slate-700 shadow-xl">
                <figure className="px-10 pt-10">
                <div className=''>
                    <Link className='md:mx-auto' to='/'><img className='w-32 h-24 md:ml-20 rounded-full' src={logo} alt="" /></Link>
                    <h1 className='md:text-4xl text-lg  footer-title mb-0 mt-5'>JOYNAL ABEDIN</h1>
                    <span className=''>Mern Stack Developer</span>
                  
                </div>
                </figure>
                <div className="card-body items-center text-center">
                   <img className='rounded ' src={resume} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;