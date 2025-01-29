import React, { useRef } from 'react';
import HomePage from './HomePage';
import LegalServicesSection from './LegalServicesSection';
import LegalStatsBar from './LegalStatsBar';
import LawyerShowcase from './LawyerShowcase';
import ConsultLawyersSection from './ConsultLawyerSection';
import BhartiyaNyaysanhitaSection from './BhartiyaNyaysanhitaSection';
import AskQuerySection from './AskQuerySection';
import LawyerBlogSection from './LawyerBlogSection';
import Navbar from '../common/navbar';


const LandingPage = () => {
    const consultLawyersRef = useRef(null);
    const nyaysanhitaRef = useRef(null);    
    const askQueryRef = useRef(null);
    const blogPostsRef = useRef(null);

    const scrollToSection = (sectionId) => {
        let ref;
        switch (sectionId) {
            case 'consultLawyers':
                ref = consultLawyersRef;
                break;
            case 'nyaysanhita':
                ref = nyaysanhitaRef;
                break;
            case 'askQuery':
                ref = askQueryRef;
                break;
            case 'blogPosts':
                ref = blogPostsRef;
                break;
            default:
                ref = null;
        }
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <> {/* Add padding top to account for fixed navbar */}
                <HomePage />
                <LegalServicesSection />
                <LegalStatsBar />
                <LawyerShowcase />

                <div ref={consultLawyersRef}>
                    <ConsultLawyersSection />
                </div>
                <div ref={nyaysanhitaRef}>
                    <BhartiyaNyaysanhitaSection />
                </div>
                <div ref={askQueryRef}>
                    <AskQuerySection />
                </div>
                <div ref={blogPostsRef}>
                    <LawyerBlogSection />
                </div>
            </>
        </>
    );
};

export default LandingPage;