import React from 'react';
import { FaReact, FaHtml5,FaCss3Alt,FaBootstrap,FaJs, FaNode, FaChrome,FaGithub,FaNpm,FaStripe } from 'react-icons/fa';
import exp from '../../../public/express.jpg'
import mongo from '../../../public/mongo.png'
const Skills = () => {
    return (
        <div className='p-7 mb-20 bg-slate-700 rounded-md'>
            <h3 className='text-4xl bg-sky-800 p-5 rounded text text-center font-bold'> My <span className='text-orange-400'>Skills</span></h3>
            <div className='mx-auto p-5 text-xl bg-slate-600 mt-8 text-sky-400 rounded mb-7'>
                <p><span className=' font-bold text-slate-300 '>Expert:</span> Html, Html-5, CSS-3, Vanila CSS, Bootstrap, Tailwind CSS, Daisy UI, Javascript,
                    React.Js, Express.Js, MongoDb etc. <br />
                    <span className=' font-bold text-slate-300'>Comfortable:</span> Node.Js, , Flowbite, Rest API, Next.js etc. <br />
                    <span className=' font-bold text-slate-300'>Tools:</span> VS Code, Git, Netlify, Firebase, npm, Vercel,jwt, Chrome dev tools etc</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6  gap-8'>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaHtml5 className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Html-5</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaCss3Alt className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>CSS-3</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaBootstrap className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Bootstrap</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaJs className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>JavaScript</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaReact className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>React</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaNode className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Node Js</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                   
                    <img className='h-[100px] rounded' src={exp} alt="" />
                    <p className='text-lg '>Express Js</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                   
                    <img className='h-[100px] rounded' src={mongo} alt="" />
                    <p className='text-lg '>Mongodb</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaChrome className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Chrome Tools</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaGithub className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Github</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaNpm className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Npm Js</p>
                </div>
                <div className='bg-sky-800 p-7 rounded md:text-center'>
                    <span><FaStripe className='text-sky-300' size={110} /></span>
                    <p className='text-lg '>Stipe</p>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;