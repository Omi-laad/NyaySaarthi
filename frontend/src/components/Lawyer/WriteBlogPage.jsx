// import React, { useState } from 'react';
// import axios from 'axios';

// // Configure axios to send cookies with every request
// axios.defaults.withCredentials = true;

// const WriteBlogPage = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [date, setDate] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await axios.post('/api/v1/lawyerblogs/createblog',
//         { title, content, date },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       setSubmitStatus({ type: 'success', message: 'Blog post created successfully!' });
//       setTitle('');
//       setContent('');
//       setDate('');
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setSubmitStatus({ type: 'error', message: 'You must be logged in to create a blog post.' });
//       } else {
//         setSubmitStatus({
//           type: 'error',
//           message: error.response?.data?.message || 'An error occurred. Please try again.'
//         }

//         );
//         console.log(error)

//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-orange-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-orange-800 mb-6">Write a New Blog Post</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="title" className="block text-sm font-medium text-orange-700">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="content" className="block text-sm font-medium text-orange-700">
//                 Content
//               </label>
//               <textarea
//                 id="content"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 required
//                 rows={6}
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="date" className="block text-sm font-medium text-orange-700">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Create Blog Post'}
//               </button>
//             </div>
//           </form>
//           {submitStatus && (
//             <div className={`mt-4 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
//               {submitStatus.message}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteBlogPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// // Configure axios to send cookies with every request
// axios.defaults.withCredentials = true;

// const WriteBlogPage = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [date, setDate] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Helper function to decode JWT token and extract fullName and email
//   const decodeToken = (token) => {
//     try {
//       const payload = JSON.parse(atob(token.split('.')[1]));
//       return { fullName: payload.fullName, email: payload.email };
//     } catch (error) {
//       console.error('Error decoding token:', error);
//       return { fullName: '', email: '' }; // Fallback if token is invalid
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const accessToken = localStorage.getItem('accessToken');
//       const { fullName, email } = decodeToken(accessToken); // Extract fullName and email

//       const formattedDate = new Date(date).toISOString().split('T')[0];

//       const response = await axios.post(
//         '/api/v1/lawyerblogs/createblog',
//         {
//           blogTitle: title,
//           content,
//           date: formattedDate,
//           fullName,  // Add fullName to payload
//           email,     // Add email to payload
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${accessToken.trim()}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setSubmitStatus({ type: 'success', message: 'Blog post created successfully!' });
//         setTitle('');
//         setContent('');
//         setDate('');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setSubmitStatus({ type: 'error', message: 'You must be logged in to create a blog post.' });
//       } else {
//         setSubmitStatus({
//           type: 'error',
//           message: error.response?.data?.message || 'An error occurred. Please try again.',
//         });
//         console.error(error);
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-orange-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-orange-800 mb-6">Write a New Blog Post</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="title" className="block text-sm font-medium text-orange-700">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="content" className="block text-sm font-medium text-orange-700">
//                 Content
//               </label>
//               <textarea
//                 id="content"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 required
//                 rows={6}
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="date" className="block text-sm font-medium text-orange-700">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//                 className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Create Blog Post'}
//               </button>
//             </div>
//           </form>
//           {submitStatus && (
//             <div
//               className={`mt-4 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
//                 }`}
//             >
//               {submitStatus.message}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteBlogPage;



import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast'; // Import toast components

axios.defaults.withCredentials = true;

const WriteBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Helper function to decode JWT token and extract fullName and email
  const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return { fullName: payload.fullName, email: payload.email };
    } catch (error) {
      console.error('Error decoding token:', error);
      return { fullName: '', email: '' }; // Fallback if token is invalid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status on new submission

    try {
      const accessToken = localStorage.getItem('accessToken');
      const { fullName, email } = decodeToken(accessToken); // Extract fullName and email

      const formattedDate = new Date(date).toISOString().split('T')[0];

      const response = await axios.post(
        '/api/v1/lawyerblogs/createblog',
        {
          blogTitle: title,
          content,
          date: formattedDate,
          fullName, // Add fullName to payload
          email, // Add email to payload
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken.trim()}`,
          },
        }
      );

      if (response.status === 201) {
        alert('Blog post created successfully!'); // Show success toast
        setTitle('');
        setContent('');
        setDate('');
        setSubmitStatus({ type: 'success', message: 'Blog post created successfully!' });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      alert(errorMessage); // Show error toast

      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">Write a New Blog Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-orange-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-orange-700">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={6}
                className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-orange-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Create Blog Post'}
              </button>
            </div>
          </form>
          {submitStatus && (
            <div
              className={`mt-4 p-4 rounded-md ${submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'}`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WriteBlogPage;
