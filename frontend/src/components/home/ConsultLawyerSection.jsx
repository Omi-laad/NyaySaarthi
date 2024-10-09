import React from 'react';
import { UserCheck, Shield, Clock, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConsultLawyersSection = React.forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/login')
    }
    return (
        <section ref={ref} className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Consult Verified Lawyers</h2>
                <p className="text-lg text-center text-orange-700 mb-12">Get expert legal advice from our network of verified professionals. Our lawyers are ready to assist you with any legal matter.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<UserCheck className="w-10 h-10 text-orange-500" />}
                        title="Verified Experts"
                        description="All our lawyers are thoroughly vetted and verified for their expertise and credentials."
                    />
                    <FeatureCard
                        icon={<Shield className="w-10 h-10 text-orange-500" />}
                        title="Secure Consultations"
                        description="Your consultations are protected by attorney-client privilege and our strict privacy policies."
                    />
                    <FeatureCard
                        icon={<Clock className="w-10 h-10 text-orange-500" />}
                        title="Quick Response"
                        description="Get responses to your legal queries within 24 hours, with options for urgent consultations."
                    />
                    <FeatureCard
                        icon={<MessageSquare className="w-10 h-10 text-orange-500" />}
                        title="Multiple Formats"
                        description="Choose from text, voice, or video consultations based on your preference and needs."
                    />
                </div>

                <div className="mt-12 text-center">
                    <button onClick={handleOnClick} className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300">
                        Find a Lawyer Now
                    </button>
                </div>
            </div>
        </section>
    );
});

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-orange-800 mb-2">{title}</h3>
        <p className="text-orange-600">{description}</p>
    </div>
);

export default ConsultLawyersSection;