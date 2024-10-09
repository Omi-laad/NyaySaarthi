import { React, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Toaster from 'react-hot-toast';
function Layout() {

    return (
        <>

            <Navbar />
            <Outlet />
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            <Footer />
        </>

    )
}

export default Layout