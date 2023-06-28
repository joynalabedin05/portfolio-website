import React from 'react';
import logo from '../../../public/mern.png'
import pic2 from '../../../public/pic2.jpg'
const AboutMe = () => {
    return (
        <div className='md:flex my-24 bg-slate-700 p-8 rounded-md '>

            <div className='w-1/2'>
                <img className='md:h-[500px] rounded' src={logo} alt="IMG" />
            </div>
            <div className='w-1/2 md:ml-20 space-y-4'>
                <h1 className='text-4xl font-bold text-slate-100'>Hi, I Am <br /><span className='text-5xl text-slate-200 uppercase'> Joynal Abedin </span></h1>
                <p className='text-xl font-bold text-slate-200'>Mern Stack Developer, Front End  Developer</p>
            
                <p>I am a innovative Front End developer and quick Learner. I am proficient in the MERN having 1 year experience with (Mongodb,
                    Express.Js, React.js, Node.js) stack, delivering high-quality solutions. Strong problem-solving skills and
                    attention to detail, with a passion for staying updated with the latest technologies and trends.</p>
                    <img className='md:h-[200px] md:w-[600px] rounded-md ' src={pic2} alt="" />

            </div>

        </div>
    );
};

export default AboutMe;