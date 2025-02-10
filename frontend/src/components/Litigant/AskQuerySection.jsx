import { API_BASE_URL } from '../../config';

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed
axios.defaults.withCredentials = true;


const AskQuerySection = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });
  const [author, setAuthor] = useState('');
  const [queries, setQueries] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Stores details of selected question
  const [details, setDetails] = useState(null); // Stores question and answers details

  // Fetch the author (litigant_id) from cookies via access token
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/auth/user`, {
          withCredentials: true, // Include cookies
        });
        setAuthor(response.data.litigant_id); // Store author ID
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };
    fetchAuthor();
  }, []);

  // Fetch all queries on component mount
  // useEffect(() => {
  //   const fetchQueries = async () => {
  //     try {
  //       const response = await axios.get(`/api/v1/questions/author/${questionAuthorId}`);
  //       setQueries(response.data);
  //     } catch (error) {
  //       console.error('Error fetching queries:', error);
  //     }
  //   };
  //   fetchQueries();
  // }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit a new query
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/questions/`,
        { ...formData, author },
        { withCredentials: true } // Ensure cookies are sent
      );
      setQueries([...queries, response.data]); // Update the queries list
      setFormData({ title: '', content: '', category: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };

  // Fetch details (question and answers) for a selected question
  const fetchDetails = async (questionId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/${questionId}/details`);
      setDetails(response.data); // Store details of the selected question
      setSelectedQuestion(questionId); // Track the selected question ID
    } catch (error) {
      console.error('Error fetching question details:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Ask a Query</h2>
      <p className="text-center mb-6 text-gray-600">
        Have a legal question? Ask our experts for guidance.
      </p>

      {/* Form to submit a new query */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter the title..."
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Describe your query..."
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter the category..."
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Submit Query
        </button>
      </form>

    </div>
  );
};

export default AskQuerySection;
