import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar p-6 bg-slate-800 fixed top-0 md:w-[1200px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1]  p-2 shadow bg-slate-700 rounded-box w-60">
                        <li className='hover:text-orange-300'><Link to='/'>Home</Link></li>                     
                        <li className='hover:text-orange-300'><Link to='/aboutme'>About Me</Link></li>
                        <li className='hover:text-orange-300'><Link to='/contacts'>Contacts</Link></li>                     
                        <li className='hover:text-orange-300'><Link to='/projects'>Projects</Link></li>
                        
                        <li className='hover:text-orange-300'><Link to='/profile'>Profile</Link></li>
                        <li className=''><a href='resume 5.pdf' download className='text-orange-400  font-bold '>Download Resume</a></li>
                        </ul>
                    </div>
                    <Link to='/profile' className="btn btn-ghost normal-case text-xl"><div>
                            <h1 className='md:text-4xl'>  <span className='text-slate-200 text-center ml-20'>JOYNAL .DEV</span></h1>
                        </div></Link>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="flex gap-5 ">
                        <li className='hover:text-orange-300'><Link to='/'>Home</Link></li>                     
                        <li className='hover:text-orange-300'><Link to='/aboutme'>About Me</Link></li>
                        <li className='hover:text-orange-300'><Link to='/contacts'>Contacts</Link></li>                     
                        <li className='hover:text-orange-300'><Link to='/projects'>Projects</Link></li>
                        
                        <li className='hover:text-orange-300'><Link to='/profile'>Profile</Link></li>
                        <li className=''><a href='resume 5.pdf' download className='text-orange-400  font-bold flex justify-center items-center gap-1'>Download Resume <FaArrowCircleDown /></a></li>
                    </ul>
                </div>
                
            </div>

        </div>
    );
};

export default Navbar;