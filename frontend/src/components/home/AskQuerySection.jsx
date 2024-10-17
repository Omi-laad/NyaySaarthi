import React from 'react';
import { MessageCircle, Clock, Shield, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AskQuerySection = React.forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <section ref={ref} className="py-16 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Ask a Legal Query</h2>
                <p className="text-lg text-center text-orange-700 mb-12">Have a legal question? Our experts are here to help. Submit your query and receive guidance from experienced professionals.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <FeatureCard
                        icon={<MessageCircle className="w-10 h-10 text-orange-500" />}
                        title="Expert Responses"
                        description="Get answers from qualified legal professionals across various specializations."
                    />
                    <FeatureCard
                        icon={<Clock className="w-10 h-10 text-orange-500" />}
                        title="Quick Turnaround"
                        description="Receive responses to your queries within 24-48 hours, with an option for urgent inquiries."
                    />
                    <FeatureCard
                        icon={<Shield className="w-10 h-10 text-orange-500" />}
                        title="Confidentiality"
                        description="Your queries and personal information are protected by our strict privacy policy."
                    />
                    <FeatureCard
                        icon={<ThumbsUp className="w-10 h-10 text-orange-500" />}
                        title="Satisfaction Guaranteed"
                        description="If you're not satisfied with the response, we'll connect you with another expert at no extra cost."
                    />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Ask Your Query</h3>

                    <div className="text-center">
                        <button onClick={handleNavigate} type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300">
                            Ask  Query
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold text-orange-800 ml-4">{title}</h3>
        </div>
        <p className="text-orange-500">{description}</p>
    </div>
);

export default AskQuerySection;