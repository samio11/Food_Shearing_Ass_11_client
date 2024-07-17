import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const RootElement = () => {
    return (
        <div>
           <NavBar></NavBar>
           <div className='min-h-[calc(100vh-180px)]'>
             <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default RootElement;