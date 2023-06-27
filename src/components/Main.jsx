import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-slate-800 text-white'>
            <div className='md:px-20 md:py-12 p-5'>
              <Navbar></Navbar>
                <Outlet></Outlet>
              <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Main;