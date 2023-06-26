import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown, FaLinkedin,FaFacebook ,FaGithub} from 'react-icons/fa';
import logo from '../../public/FACEBOOK.jpg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 rounded-md bg-neutral text-neutral-content">
                <div className=''>
                    <Link className='md:mx-auto' to='/profile'><img className='w-20 h-16 rounded' src={logo} alt="" /></Link>
                    <h1 className='md:text-2xl text-lg  footer-title'>MD  <span className='text-orange-400'>JOYNAL ABEDIN</span></h1>
                    All rights reserved  &copy; by Myself created <br />for the purpose of Portfolio
                </div>
                <div>
                    <h3 className='text-xl footer-title'>Important Link</h3>
                    <div>
                        <ul className=" gap-4 uppercase grid md:grid-cols-2">
                            <li className='hover:text-orange-300'><Link to='/home'>Home</Link></li>
                            <li className='hover:text-orange-300'><Link to='/aboutme'>About Me</Link></li>
                            <li className='hover:text-orange-300'><Link to='/contacts'>Contacts</Link></li>
                            <li className='hover:text-orange-300'><Link to='/projects'>Projects</Link></li>

                            <li className='hover:text-orange-300'><Link to='/profile'>Profile</Link></li>
                            <li className=''><a href='resume 5.pdf' download className='text-orange-400  font-bold flex justify-center items-center gap-1 footer-title'>Download Resume <FaArrowCircleDown /></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-lg">Social Link</span>
                    <div className="flex gap-4">
                        <Link to='https://www.linkedin.com/in/joynal-abedin-51a872278?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BR8VtxCvLRpuQPF%2FgfQDpuw%3D%3D' target="_blank"><FaLinkedin size={34}/></Link>
                        <Link to='https://www.facebook.com/joynal.talukder.3' target="_blank"><FaFacebook size={34}/></Link>
                        <Link to='https://github.com/joynalabedin05' target="_blank"><FaGithub size={34}/></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;