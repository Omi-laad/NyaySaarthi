import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, Search, AlertCircle, Loader } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/v1/questions/all', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data.success) {
        setQuestions(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch questions');
      setLoading(false);
    }
  };

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredQuestions = questions.filter(item =>
    item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answers?.some(answer => 
      answer.content?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-orange-600 text-white';
      case 'medium':
        return 'bg-orange-400 text-white';
      default:
        return 'bg-orange-200 text-orange-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader className="w-6 h-6 text-orange-600 animate-spin" />
          <span className="text-orange-600 font-medium">Loading questions...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="w-6 h-6" />
          <span className="font-medium">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen   bg-white  md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-900 mb-6 md:mb-8">
          Frequently Asked Questions
        </h1>
        
        {/* Search Bar */}
        <div className="relative mb-6 md:mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 bg-white shadow-sm"
          />
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-orange-200">
              <p className="text-orange-600 font-medium">No questions found matching your search.</p>
            </div>
          ) : (
            filteredQuestions.map((item) => (
              <div
                key={item._id}
                className="border-2 border-orange-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item._id)}
                  className="w-full text-left p-4 md:p-5 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 flex-1">
                  <span className="font-medium  text-orange-900 text-sm md:text-base">{item.title}</span>
                  <span className="font-medium  text-orange-900 text-sm md:text-base">#{item.category}</span>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(item.priority)} whitespace-nowrap`}>
                        {item.priority}
                      </span>
                      <span className="text-xs text-orange-600">
                        {item.author?.fullname || 'Anonymous'}
                      </span>
                    </div>
                  </div>
                  {openItems[item._id] ? (
                    <ChevronUp className="text-orange-600 flex-shrink-0 ml-4 w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-orange-600 flex-shrink-0 ml-4 w-5 h-5" />
                  )}
                </button>
                
                {openItems[item._id] && (
                  <div className="p-4 md:p-5 border-t-2 border-orange-100 bg-orange-50">

                    {item.answers && item.answers.length > 0 ? (
                      <div className="space-y-4">
                    <span className="font-medium text-orange-900 text-sm md:text-base">{item.content}</span>

                        {item.answers.map((answer, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border border-orange-200">

                            <p className="text-orange-800 text-sm md:text-base mb-2">{answer.content}</p>
                            <div className="flex items-center gap-2 mt-2">
                                
                              <span className="text-xs text-orange-600">
                                Answered by: {answer.author?.email || 'Nyaysaarthi Lawyer'}
                              </span>
                              
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-orange-600 italic">No answers yet.</p>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;