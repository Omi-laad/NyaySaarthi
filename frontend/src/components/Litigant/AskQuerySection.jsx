import React, { useState } from 'react';

const AskQuerySection = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle query submission logic here
        console.log('Submitted query:', query);
        // Reset the form
        setQuery('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Ask a Query</h2>
            <p className="text-gray-700 mb-4">Have a legal question? Ask our experts for guidance.</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows="4"
                    placeholder="Type your query here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                    Submit Query
                </button>
            </form>
        </div>
    );
};

export default AskQuerySection;