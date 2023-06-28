import React from 'react';
import pic2 from '../../public/pic2.jpg'
import { Link } from 'react-router-dom';
const AboutMyself = () => {
    return (
        <div className='mt-20 mb-16 md:flex bg-slate-700 p-8 rounded-md gap-8'>
            
            <div className='w-1/2 py-5'>
                <h1 className='text-4xl font-bold text-slate-100'>Hi, I Am <br /><span className='text-5xl text-slate-200 uppercase'> Joynal Abedin </span></h1>
                <p className='text-xl font-bold text-slate-200 my-5'>Mern Stack Developer, Front End  Developer</p>

                <p>I am a innovative Front End developer and quick Learner. I am proficient in the MERN having 1 year experience with (Mongodb,
                    Express.Js, React.js, Node.js) stack, delivering high-quality solutions. Strong problem-solving skills and
                    attention to detail, with a passion for staying updated with the latest technologies and trends.</p>
                    <div className='mt-8'>
                       <Link to='/'> <button className='btn btn-outline btn-success'>Learn More</button></Link>
                        <a href='resume 5.pdf' target='_blank'><button className='btn btn-outline btn-success ml-3'>See Resume</button></a>
                    </div>

            </div>
            <div className='w-1/2'>
                <img className='md:h-[400px] rounded-md ' src={pic2} alt="" />
            </div>
        </div>
    );
};

export default AboutMyself;