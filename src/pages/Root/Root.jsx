import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className="font-inter bg-[#D9D9D950]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;