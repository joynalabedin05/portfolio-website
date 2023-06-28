import React from 'react';
import four from '../../public/four.jpg'
import one from '../../public/one.jpg'
import eight from '../../public/eight.jpg'
import two from '../../public/two.jpg'
import five from '../../public/five.jpg'
import six from '../../public/six.jpg'
import seven from '../../public/seven.jpg'
const MyProject = () => {
    return (
        <div className='my-20 '>
            <h3 className='text-4xl p-5 mb-8 rounded text text-center font-bold text-slate-200'> My Projects </h3>
            <div className='md:flex gap-8 '>
                <div className='bg-sky-800 w-96 p-6 rounded-md border border-slate-500 hover:skew-y-3 transition duration-300 ease-in-out'>
                    <img className='p-2 mb-3' src={four} alt="" />
                    <p><span className='font-bold uppercase text-slate-200'>Name:</span>  Sports Car Marketplace
                    </p>
                    <p className='my-2'><span className='font-bold uppercase text-slate-200'>Key Features:</span> <br /> 1. A complete MERN stack full projects with all features <br />2. User authentication and login system implemented by Firebase. <br />3. Database established by Backend system that stored in Mongodb and it deployed in Vercel.</p>
                    <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span>  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://a-11-toys-marketplace.web.app/" target='_blank'>live</a>
                    </p>
                </div>
                <div className='bg-sky-800 w-96 p-6 rounded-md border border-slate-500 hover:skew-y-3 transition duration-300 ease-in-out'>
                    <img className='p-2 mb-3' src={eight} alt="" />
                    <p><span className='font-bold uppercase text-slate-200'>Name:</span> Art School Class
                    </p>
                    <p className='my-2'><span className='font-bold uppercase text-slate-200'>Key Features:</span> <br /> 1. Admin panel integration with several admin panel roles basis. <br /> 2. Validate individual user with JWT when they loggedin , rather logout immediately. <br />3. • International payment gateway system implemented by stripe.
                    </p>
                    <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span>  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://summer-camp-2aa4b.web.app/" target='_blank'>live</a>
                    </p>
                </div>
                <div className='bg-sky-800 w-96 p-6 rounded-md border border-slate-500 hover:skew-y-3 transition duration-300 ease-in-out'>
                    <img className='p-2 mb-3' src={one} alt="" />
                    <p><span className='font-bold uppercase text-slate-200'>Name:</span>  Chef Recipe Hunter
                    </p>
                    <p className='my-2'><span className='font-bold uppercase text-slate-200'>Key Features:</span> <br /> 1. Social and Gitgub Login system added and it implemented by Firebase. <br />2. Fetched backend data from Mongodb and usages Mongodb CRUD operations. <br />3. React router dom implemented.</p>
                    <p><span className='font-bold uppercase text-slate-200'>Github-repo :</span>  <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-joynalabedin05.git" target='_blank'>Client</a> | <a className='text-blue-400 hover:text-orange-400' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-joynalabedin05.git" target='_blank'>server</a> | <a className='text-blue-400 hover:text-orange-400' href="https://a10-chef-recipe-hunter-client.web.app/" target='_blank'>live</a>
                    </p>
                </div>
            </div>
            <h2 className='mt-10 text-slate-200 font-bold text-3xl text-center'>Screenshorts Of My Projects</h2>
            <div className="md:ml-24 h-96 md:h-[500px] mx-auto carousel carousel-vertical rounded-box mt-12">
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={one} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={eight} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={four} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={seven} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={two} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={five} />
                </div>
                <div className="carousel-item h-full">
                    <img className='md:w-[1000px]' src={six} />
                </div>
               
            </div>
        </div>
    );
};

export default MyProject;