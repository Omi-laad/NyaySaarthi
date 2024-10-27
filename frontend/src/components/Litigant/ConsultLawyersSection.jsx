
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LawyerCard =({lawyers})=>{
//   return(  
//   <div  className="border border-gray-200 rounded-lg p-4 flex flex-col">
//     <div className="flex items-center mb-2">
//         <img
//             src={lawyers.profilePhoto || "/api/placeholder/100/100"}
//             alt={lawyers.fullName}
//             className="w-12 h-12 rounded-full mr-3"
//         />
//         <div>
//             <h3 className="text-lg font-semibold text-orange-600">{lawyers.fullName}</h3>
//             <p className="text-sm text-gray-600">{lawyers.typeOfLaw}</p>
//         </div>
//     </div>
//     <p className="text-sm text-gray-700 mb-2">Bar Code: {lawyers.barCodeNumber}</p>
//     <p className="text-sm text-gray-700 mb-2">
//         Courts: {lawyers.courtPractices}
//     </p>
//     <p className="text-sm text-gray-700 mb-2">{lawyers.officeAddress}</p>
//     <div className="mt-auto">
//         <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
//             Book Consultation
//         </button>
//     </div>
// </div>
// )
// }

// const ConsultLawyersSection = () => {
//     const [lawyers, setLawyers] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredlawyers, setFilteredlawyers] = useState([]);

//     useEffect(() => {
//         const fetchLawyers = async () => {
//             try {
//                 const response = await axios.get('/api/v1/lawyer/getalllawyer');
//                 if (typeof response.data.data === 'object' && response.data !== null) {
//                     setLawyers(response.data.data);
//                     setFilteredlawyers(response.data.data)
//                 } else {
//                     throw new Error('Data received is not a valid object');
//                 }
//             } catch (err) {
//                 setError(err.message || 'An error occurred while fetching lawyers');
//                 console.error('Error fetching lawyers:', err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLawyers();
//     }, []);
//     useEffect(() => {
//         if (searchTerm) {
//             const regex = new RegExp(searchTerm, 'i');
//             const filtered = lawyers.filter(lawyer =>
//                 Object.values(lawyer).some(value =>
//                     typeof value === 'string' && regex.test(value)
//                 )
//             );
//             setFilteredlawyers(filtered);
//         } else {
//             setFilteredlawyers(lawyers);
//         }
//     }, [searchTerm, lawyers]);

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };


//     if (loading) return <div className="text-center p-4">Loading lawyers...</div>;
//     if (error) return <div className="text-center p-4 text-red-600">Error: {error}</div>;
//     if (Object.keys(lawyers).length === 0) return <div className="text-center p-4">No lawyers found.</div>;

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-2xl font-bold text-orange-600 mb-4">Consult Verified Lawyers</h2>
//             <p className="text-gray-700 mb-4">Connect with experienced lawyers for professional legal advice.</p>
//             <div className="relative">
//                 <input
//                     type="text"
//                     placeholder="Search Lawyers..."
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mb-4"
//                 />
//                 <svg
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredlawyers.map(lawyer => (
//                     <LawyerCard key={lawyers._id} lawyers={lawyer} />
//                 ))}
//             </div>
//             {filteredlawyers.length === 0 && (
//                 <p className="text-center text-gray-500">No Lawyers found matching your search.</p>
//             )}
//         </div>
//     );
// };

// export default ConsultLawyersSection;















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react'; // Importing the loader icon

const LawyerCard = ({ lawyers, onBookConsultation }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
      <div className="flex items-center mb-2">
        <img
          src={lawyers.profilePhoto || "/api/placeholder/100/100"}
          alt={lawyers.fullName}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-semibold text-orange-600">
            {lawyers.fullName}
          </h3>
          <p className="text-sm text-gray-600">{lawyers.typeOfLaw}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">
        Bar Code: {lawyers.barCodeNumber}
      </p>
      <p className="text-sm text-gray-700 mb-2">
        Courts: {lawyers.courtPractices}
      </p>
      <p className="text-sm text-gray-700 mb-2">{lawyers.officeAddress}</p>
      <div className="mt-auto">
        <button
          onClick={() => onBookConsultation(lawyers)}
          className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};




// const ConsultationModal = ({ lawyer = {}, isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     clientName: '',
//     clientEmail: '',
//     consultationDateTime: '',
//     lawyerName: lawyer?.fullName || '',
//     lawyerEmail: lawyer?.email || '',
//   });
//   const [Loading,setLoading]=useState(false);

//   useEffect(() => {
//     // Update the lawyer details in formData when the lawyer prop changes
//     if (lawyer) {
//       setFormData((prevData) => ({
//         ...prevData,
//         lawyerName: lawyer.fullName || '',
//         lawyerEmail: lawyer.email || '',
//       }));
//     }
//   }, [lawyer]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
        
//       await axios.post('/api/v1/email/send-consultation-email', {
//         lawyerId: lawyer?._id,
//         ...formData,
        
//       });
//       setLoading(true)
//       alert('Consultation request sent successfully!');
//       onClose(); // Close the modal after successful submission
//     } catch (error) {
//       alert('Failed to send consultation request. Please try again.');
//     }
//     finally {
//         setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//           <h3 className="text-xl font-bold mb-4">
//             Consult {lawyer?.fullName || 'Lawyer'}
//           </h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Lawyer Name
//               </label>
//               <input
//                 type="text"
//                 name="lawyerName"
//                 value={formData.lawyerName}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Lawyer Email
//               </label>
//               <input
//                 type="email"
//                 name="lawyerEmail"
//                 value={formData.lawyerEmail}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="clientName"
//                 value={formData.clientName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="clientEmail"
//                 value={formData.clientEmail}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Consultation Date & Time
//               </label>
//               <input
//                 type="datetime-local"
//                 name="consultationDateTime"
//                 value={formData.consultationDateTime}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//               >
//                 Send Request
//               </button>
//             </div>
//           </form>
//           <Loading loading={Loading} />
//         </div>
//       </div>
//     </>
//   );
// };




const ConsultationModal = ({ lawyer = {}, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    consultationDateTime: '',
    lawyerName: lawyer?.fullName || '',
    lawyerEmail: lawyer?.email || '',
  });
  const [loading, setLoading] = useState(false); // Changed to lowercase 'loading'

  useEffect(() => {
    if (lawyer) {
      setFormData((prevData) => ({
        ...prevData,
        lawyerName: lawyer.fullName || '',
        lawyerEmail: lawyer.email || '',
      }));
    }
  }, [lawyer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader while submitting
    try {
      await axios.post('/api/v1/email/send-consultation-email', {
        lawyerId: lawyer?._id,
        ...formData,
      });
      alert('Consultation request sent successfully!');
      onClose(); // Close the modal after success
    } catch (error) {
      alert('Failed to send consultation request. Please try again.');
    } finally {
        setLoading(false); 
      // Hide loader
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-xl font-bold mb-4">
            Consult {lawyer?.fullName || 'Lawyer'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Lawyer Name
              </label>
              <input
                type="text"
                name="lawyerName"
                value={formData.lawyerName}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Lawyer Email
              </label>
              <input
                type="email"
                name="lawyerEmail"
                value={formData.lawyerEmail}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Consultation Date & Time
              </label>
              <input
                type="datetime-local"
                name="consultationDateTime"
                value={formData.consultationDateTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                disabled={loading} // Disable button during loading
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center justify-center"
                disabled={loading} // Disable button during loading
              >
                {loading ? (
                  <Loader2 className="animate-spin mr-2" size={18} />
                ) : (
                  'Send Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};



const ConsultLawyersSection = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get('/api/v1/lawyer/getalllawyer');
        if (Array.isArray(response.data.data)) {
          setLawyers(response.data.data);
          setFilteredLawyers(response.data.data);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching lawyers');
        console.error('Error fetching lawyers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');
      const filtered = lawyers.filter((lawyer) =>
        Object.values(lawyer).some(
          (value) => typeof value === 'string' && regex.test(value)
        )
      );
      setFilteredLawyers(filtered);
    } else {
      setFilteredLawyers(lawyers);
    }
  }, [searchTerm, lawyers]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBookConsultation = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  const handleCloseModal = () => {
    setSelectedLawyer(null);
  };

  if (loading) return <div className="text-center p-4">Loading lawyers...</div>;
  if (error) return <div className="text-center p-4 text-red-600">Error: {error}</div>;
  if (lawyers.length === 0) return <div className="text-center p-4">No lawyers found.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Consult Verified Lawyers</h2>
      <p className="text-gray-700 mb-4">Connect with experienced lawyers for professional legal advice.</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Lawyers..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mb-4"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLawyers.map((lawyer) => (
          <LawyerCard
            key={lawyer._id}
            lawyers={lawyer}
            onBookConsultation={handleBookConsultation}
          />
        ))}
      </div>
      {filteredLawyers.length === 0 && (
        <p className="text-center text-gray-500">No Lawyers found matching your search.</p>
      )}
      <ConsultationModal
        lawyer={selectedLawyer}
        isOpen={!!selectedLawyer}
        onClose={handleCloseModal}
        onSend={() => {}}
      />
    </div>
  );
};

export default ConsultLawyersSection;
