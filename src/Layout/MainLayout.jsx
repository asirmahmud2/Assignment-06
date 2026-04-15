import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet>
                <div>This is changeable part</div>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;