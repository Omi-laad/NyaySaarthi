// export default SimplifiedRegister;
// import React, { useState } from 'react';
// import axios from 'axios';

// const SimplifiedRegister = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         mobile: '',
//         address: '',
//     });
//     const [profilePhoto, setProfilePhoto] = useState(null);
//     const [loading, setLoading] = useState(false); // To track API call status
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         setProfilePhoto(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         try {
//             const formDataToSend = new FormData();
//             formDataToSend.append('fullName', formData.fullName);
//             formDataToSend.append('email', formData.email);
//             formDataToSend.append('password', formData.password);
//             formDataToSend.append('mobile', formData.mobile);
//             formDataToSend.append('address', formData.address);
//             if (profilePhoto) {
//                 formDataToSend.append('profilePhoto', profilePhoto);
//             }

//             const response = await axios.post('/api/v1/litigant/register', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },

//             },


//             );


//             setSuccess('Registration successful!');
//             alert('Registration successful!');

//             // Reset form after successful submission
//             setFormData({
//                 fullName: '',
//                 email: '',
//                 password: '',
//                 mobile: '',
//                 address: '',
//             });
//             setProfilePhoto(null);
//         } catch (error) {
//             setError('Registration failed. Please try again.');
//             console.error('Error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
//                 <div className="bg-orange-500 px-6 py-8 text-white">
//                     <h1 className="text-3xl font-bold text-center">Litigant Registration</h1>
//                 </div>

//                 <div className="px-6 py-8">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="md:col-span-2">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Profile Photo
//                                 </label>
//                                 <div className="flex items-center justify-center w-full">
//                                     <label
//                                         className="flex flex-col w-full h-32 border-4 border-orange-200 border-dashed hover:bg-gray-100 hover:border-orange-300 cursor-pointer"
//                                     >
//                                         <div className="flex flex-col items-center justify-center pt-7">
//                                             {profilePhoto ? (
//                                                 <img
//                                                     src={URL.createObjectURL(profilePhoto)}
//                                                     alt="Profile Preview"
//                                                     className="w-24 h-24 rounded-full object-cover"
//                                                 />
//                                             ) : (
//                                                 <>
//                                                     <svg
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                         className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
//                                                         fill="none"
//                                                         viewBox="0 0 24 24"
//                                                         stroke="currentColor"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             strokeWidth="2"
//                                                             d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                                                         />
//                                                     </svg>
//                                                     <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
//                                                         Upload photo
//                                                     </p>
//                                                 </>
//                                             )}
//                                         </div>
//                                         <input type="file" className="opacity-0" accept="image/*" onChange={handleImageUpload} />
//                                     </label>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleInputChange}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                     placeholder="Your Full Name"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                     placeholder="Your Email Address"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                     placeholder="Create a password"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Mobile Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="mobile"
//                                     value={formData.mobile}
//                                     onChange={handleInputChange}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                     placeholder="Your Mobile Number"
//                                     required
//                                 />
//                             </div>

//                             <div className="md:col-span-2">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Address
//                                 </label>
//                                 <textarea
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleInputChange}
//                                     rows="3"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                     placeholder="Your Address"
//                                     required
//                                 ></textarea>
//                             </div>
//                         </div>

//                         {loading && <p className="text-orange-500">Submitting...</p>}
//                         {error && <p className="text-red-500">{error}</p>}
//                         {success && <p className="text-green-500">{success}</p>}

//                         <div className="flex items-center justify-center mt-6">
//                             <button
//                                 type="submit"
//                                 className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                                 disabled={loading}
//                             >
//                                 Register
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SimplifiedRegister;



import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SimplifiedRegister = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        mobile: '',
        address: '',
    });
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // For redirecting to login page

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfilePhoto(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            if (profilePhoto) {
                formDataToSend.append('profilePhoto', profilePhoto);
            }

            const response = await axios.post('/api/v1/litigant/register', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('Registration successful! Redirecting to login...');

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                password: '',
                mobile: '',
                address: '',
            });
            setProfilePhoto(null);

            // Redirect to login after 10 seconds
            setTimeout(() => navigate('/login'), 1000);
        } catch (error) {
            setError('Registration failed. Please try again.');
            toast.error('Registration failed!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
            {/* <Toaster position="top-right" reverseOrder={false} /> */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-orange-500 px-6 py-8 text-white">
                    <h1 className="text-3xl font-bold text-center">Litigant Registration</h1>
                </div>

                <div className="px-6 py-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Profile Photo
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col w-full h-32 border-4 border-orange-200 border-dashed hover:bg-gray-100 hover:border-orange-300 cursor-pointer">
                                        <div className="flex flex-col items-center justify-center pt-7">
                                            {profilePhoto ? (
                                                <img
                                                    src={URL.createObjectURL(profilePhoto)}
                                                    alt="Profile Preview"
                                                    className="w-24 h-24 rounded-full object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                        />
                                                    </svg>
                                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                        Upload photo
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                        <input type="file" className="opacity-0" accept="image/*" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>

                            {/* Form fields */}
                            {['fullName', 'email', 'password', 'mobile', 'address'].map((field, index) => (
                                <div key={index} className={field === 'address' ? 'md:col-span-2' : ''}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    {field !== 'address' ? (
                                        <input
                                            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                            required
                                        />
                                    ) : (
                                        <textarea
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="Your Address"
                                            required
                                        ></textarea>
                                    )}
                                </div>
                            ))}
                        </div>

                        {loading && <p className="text-orange-500">Submitting...</p>}
                        {error && <p className="text-red-500">{error}</p>}

                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                disabled={loading}
                            >
                                Register
                            </button>
                            <p>
                                Already have an account?{' '}
                                <a href="/login" className="text-orange-500 hover:underline">
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SimplifiedRegister;
