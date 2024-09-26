import { React, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
function Layout() {

    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout