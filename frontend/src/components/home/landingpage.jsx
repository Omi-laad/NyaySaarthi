import React from 'react';
import Navbar from '../common/navbar'; // Import the Navbar component we created earlier
import HomePage from './HomePage';
import LegalServicesSection from './LegalServicesSection';
import LegalStatsBar from './LegalStatsBar';
import LawyerShowcase from './LawyerShowcase';

const LandingPage = () => {
    return (
        <>
            <HomePage />
            <LegalServicesSection />
            <LegalStatsBar />
            <LawyerShowcase />
        </>
    );
};

export default LandingPage;