import React from 'react';
import logo from '../../../public/mern.png'
import pic2 from '../../../public/pic2.jpg'
const AboutMe = () => {
    return (
        <div className='md:flex my-10'>

            <div className='w-1/2'>
                <img className='py-5 rounded' src={logo} alt="IMG" />
            </div>
            <div className='w-1/2 md:ml-20 space-y-4'>
                <h1 className='text-4xl'>Hi, I Am <br /><span className='text-5xl text-orange-400 uppercase'> MD Joynal Abedin </span></h1>
                <p>I am a innovative Front End developer and quick Learner. I am proficient in the MERN (Mongodb,
                    Express.Js, React.js, Node.js) stack, delivering high-quality solutions. Strong problem-solving skills and
                    attention to detail, with a passion for staying updated with the latest technologies and trends.</p>
                    <img className='md:h-[180px] md:w-[600px] rounded-md ' src={pic2} alt="" />

            </div>

        </div>
    );
};

export default AboutMe;