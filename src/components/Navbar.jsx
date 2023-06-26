import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>                     
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>                     
                        <li><Link to='/projects'>Projects</Link></li>
                        
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/download' className='text-orange-400 text-xl font-bold'>Download CV</Link></li>
                        </ul>
                    </div>
                    <Link to='/profile' className="btn btn-ghost normal-case text-xl"><div>
                            <h1 className='text-4xl'>MD  <span className='text-orange-400'>JOYNAL ABEDIN</span></h1>
                        </div></Link>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="flex gap-4 uppercase">
                    <li><Link to='/home'>Home</Link></li>                     
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>                     
                        <li><Link to='/projects'>Projects</Link></li>
                        
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/download' className='text-orange-400 text-xl font-bold'>Download CV</Link></li>
                    </ul>
                </div>
                
            </div>

        </div>
    );
};

export default Navbar;