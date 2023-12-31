import React from 'react';
import contact from '../../public/contact.jpg'
const ContactMyself = () => {
    return (
        <div>
            <div className=' mt-20 mb-20 bg-slate-700 p-7 rounded-md text-slate-200'>
                <h3 className='text-4xl p-5 mb-12 rounded text text-center font-bold'> Contact  <span className='text-slate-200'>Me</span></h3>
                <div className='md:flex gap-14'>
                    <div className='w-1/2 '>
                        <img className='rounded-md md:h-[350px] mt-6' src={contact} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <div>
                            <h2 className='font-bold text-2xl uppercase'>Your Name</h2>
                            <input className='text-black p-3 rounded my-3 w-full bg-slate-200' type="text" placeholder='your name' />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl uppercase'>Your Email</h2>
                            <input className='text-black p-3 rounded my-3 w-full bg-slate-200' type="email" name="email" placeholder='your email' id="" />
                        </div>
                        <div>
                            <label className='font-bold text-2xl uppercase'>Your message</label>
                            <textarea className='w-full text-black p-5 rounded my-4 bg-slate-200' name="" placeholder='your message' id="" cols="20" rows="3"></textarea>
                        </div>
                        <button className='btn btn-success'>Send Message</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactMyself;