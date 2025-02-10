import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
// Questions List Component
const QuestionsList = ({ onQuestionSelect }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/questions`);
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-gray-600">Loading questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Legal Questions</h1>
      {questions.map((question) => (
        <div 
          key={question._id}
          className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onQuestionSelect(question._id)}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold text-gray-900">{question.title}</h2>
          </div>
          <p className="mt-2 text-gray-700">{question.content}</p>
          <div className="mt-4 text-sm text-gray-600">
            Asked by: {question.author?.email||"nyaysaarthi user"}
          </div>
        </div>
      ))}
    </div>
  );
};

// Question Detail Component with Answer Form
const QuestionDetail = ({ questionId, onBack }) => {
  const [question, setQuestion] = useState(null);
  const [answerContent, setAnswerContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`/api/v1/questions/${questionId}`);
        setQuestion(response.data.data);
       
        
      } catch (err) {
        setError('Failed to load question details');
      }
    };

    if (questionId) {
      fetchQuestion();
    }
  }, [questionId]);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitSuccess(false);

    try {
      await axios.post(`/api/v1/questions/${questionId}/answers`, {
        content: answerContent
      });
      
      setAnswerContent('');
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit answer');
      setIsSubmitting(false);
    }
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-gray-600">Loading question...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="mb-4 text-orange-600 hover:text-orange-800 flex items-center"
      >
        ← Back to Questions
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold text-gray-900">{question.title}</h1>
        <p className="mt-4 text-gray-700">{question.content}</p>
        <div className="mt-4 text-sm text-gray-600">
          Asked by: {question.author?.email}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Submit Your Answer</h2>
        <form onSubmit={handleSubmitAnswer} className="space-y-4">
          <div>
            <textarea
              value={answerContent}
              onChange={(e) => setAnswerContent(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              rows="6"
              placeholder="Type your answer here..."
              required
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">
              {error}
            </div>
          )}

          {submitSuccess && (
            <div className="text-green-600 text-sm">
              Answer submitted successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Answer'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Container Component
const QuestionsPage = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {selectedQuestionId ? (
        <QuestionDetail 
          questionId={selectedQuestionId}
          onBack={() => setSelectedQuestionId(null)}
        />
      ) : (
        <QuestionsList 
          onQuestionSelect={setSelectedQuestionId}
        />
      )}
    </div>
  );
};

export default QuestionsPage;