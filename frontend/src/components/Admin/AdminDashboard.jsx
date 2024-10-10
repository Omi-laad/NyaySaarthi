import React, { useState, useEffect } from 'react';
import { Users, Gavel, UserCheck, BookOpen, BarChart, Settings, LogOut, Menu } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const res = await axios.post('/api/v1/admins/logout')
            localStorage.removeItem('AccessToken');
            toast(res.data.message)
            navigate('/nyaysaarthi-admin@2024')
        }
        catch (err) {
            console.log(err);
        }
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />;
            case 'verifyLawyers':
                return <VerifyLawyers />;
            case 'manageLaws':
                return <ManageLaws />;
            case 'manageUsers':
                return <ManageUsers />;
            case 'analytics':
                return <Analytics />;
            case 'settings':
                return <Settings />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Mobile Header */}
            <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-500">Admin Dashboard</h1>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-orange-500">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white shadow-md`}>
                <div className="p-4 hidden md:block">
                    <h1 className="text-2xl font-bold text-orange-500">Admin Dashboard</h1>
                </div>
                <nav className="mt-4">
                    <NavItem icon={<BarChart />} label="Overview" isActive={activeTab === 'overview'} onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }} />
                    <NavItem icon={<UserCheck />} label="Verify Lawyers" isActive={activeTab === 'verifyLawyers'} onClick={() => { setActiveTab('verifyLawyers'); setIsSidebarOpen(false); }} />
                    <NavItem icon={<Gavel />} label="Manage Laws" isActive={activeTab === 'manageLaws'} onClick={() => { setActiveTab('manageLaws'); setIsSidebarOpen(false); }} />
                    <NavItem icon={<Users />} label="Manage Users" isActive={activeTab === 'manageUsers'} onClick={() => { setActiveTab('manageUsers'); setIsSidebarOpen(false); }} />
                    <NavItem icon={<BarChart />} label="Analytics" isActive={activeTab === 'analytics'} onClick={() => { setActiveTab('analytics'); setIsSidebarOpen(false); }} />
                    <NavItem icon={<Settings />} label="Settings" isActive={activeTab === 'settings'} onClick={() => { setActiveTab('settings'); setIsSidebarOpen(false); }} />
                </nav>
                <div className="mt-auto p-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full p-4 text-left text-gray-600 hover:bg-orange-50"
                    >
                        <LogOut className="mr-4" /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                {renderContent()}
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, isActive, onClick }) => (
    <button
        className={`flex items-center w-full p-4 text-left ${isActive ? 'bg-orange-100 text-orange-500' : 'text-gray-600 hover:bg-orange-50'
            }`}
        onClick={onClick}
    >
        {React.cloneElement(icon, { className: 'mr-4' })}
        {label}
    </button>
);

const Overview = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard title="Total Users" value="1,234" icon={<Users />} />
            <StatCard title="Verified Lawyers" value="567" icon={<UserCheck />} />
            <StatCard title="Total Laws" value="789" icon={<Gavel />} />
        </div>
    </div>
);

const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
            <div>
                <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
                <p className="text-3xl font-bold text-orange-500">{value}</p>
            </div>
            <div className="text-orange-500">
                {React.cloneElement(icon, { size: 40 })}
            </div>
        </div>
    </div>
);

// ... (rest of the components remain the same)
const VerifyLawyers = () => {
    const [lawyers, setLawyers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/v1/lawyer/getalllawyer');

                if (Array.isArray(response.data.data)) {
                    setLawyers(response.data.data);
                } else {
                    console.error("Expected array but got:", response.data.data);
                    setError("Failed to fetch lawyers data");
                }
            } catch (error) {
                setError("Failed to fetch lawyers data");
            } finally {
                setLoading(false);
            }
        };

        fetchLawyers();
    }, []);

    const verifyLawyer = async (lawyerId) => {
        try {

            const response = await axios.put('/api/v1/lawyer/verifylawyer', { lawyerId });


            if (response.data.success) {
                setLawyers(lawyers.map(lawyer =>
                    lawyer._id === lawyerId ? { ...lawyer, isProfileVerified: true } : lawyer

                )
                );
                alert(response.data.message)
            } else {
                alert('Verification failed:', response.data.message);
            }
        } catch (error) {
            alert('Error verifying lawyer:', error);
        }
    };

    const revokeLawyer = async (lawyerId) => {
        // <Toaster />

        try {
            const response = await axios.put('/api/v1/lawyer/revokelawyer', { lawyerId });

            alert(response.data.message);

            if (response.data.success) {
                setLawyers(lawyers.map(lawyer =>
                    lawyer._id === lawyerId ? { ...lawyer, isProfileVerified: false } : lawyer
                ));
            } else {
                console.error('Revocation failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error revoking lawyer:', error);
        }
    };

    const filteredLawyers = lawyers.filter((lawyer) => {
        const searchRegex = new RegExp(searchTerm, "i");
        return (
            searchRegex.test(lawyer.fullName) ||
            searchRegex.test(lawyer.email) ||
            searchRegex.test(lawyer.isProfileVerified ? 'Verified' : 'Not Verified')
        );
    });

    // console.log("Filtered lawyers:", filteredLawyers);

    if (loading) return <div className="text-center py-20 text-2xl text-orange-600">Loading...</div>;
    if (error) return <div className="text-center py-20 text-2xl text-red-500">{error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Verify Lawyers</h2>
            <input
                type="text"
                placeholder="Search lawyers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full max-w-md mx-auto mb-8 p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />

            {filteredLawyers.length === 0 ? (
                <p>No lawyers found matching your search criteria.</p>
            ) : (
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLawyers.map((lawyer) => (
                            <LawyerRow
                                key={lawyer._id}
                                lawyer={lawyer}
                                onVerify={() => verifyLawyer(lawyer._id)}
                                onRevoke={() => revokeLawyer(lawyer._id)}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const LawyerRow = ({ lawyer, onVerify, onRevoke }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="p-3">{lawyer.fullName}</td>
        <td className="p-3">{lawyer.email}</td>
        <td className="p-3">
            <span className={`px-2 py-1 rounded-full text-xs ${lawyer.isProfileVerified ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                }`}>
                {lawyer.isProfileVerified ? 'Verified' : 'Not Verified'}
            </span>
        </td>
        <td className="p-3">
            {lawyer.isProfileVerified ? (
                <button onClick={onRevoke} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Revoke
                </button>
            ) : (
                <button onClick={onVerify} className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                    Verify
                </button>
            )}
        </td>
    </tr>
);


const ManageLaws = () => {
    const [formData, setFormData] = useState({
        lawName: '',
        lawCode: '',
        description: '',
        sections: [{ sectionNumber: '', title: '', description: '' }],
        enactedYear: '',
        ministry: '',
        jurisdiction: '',
        amendments: [],
        status: 'Active',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleArrayInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value.split(',').map(item => item.trim()),
        }));
    };

    const handleSectionChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSections = [...formData.sections];
        updatedSections[index][name] = value;
        setFormData({ ...formData, sections: updatedSections });
    };

    const addSection = () => {
        setFormData((prevState) => ({
            ...prevState,
            sections: [...prevState.sections, { sectionNumber: '', title: '', description: '' }],
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/laws/createlaw', formData);
            console.log('Law added successfully:', response.data);
            setFormData({
                lawName: '',
                lawCode: '',
                description: '',
                sections: [{ sectionNumber: '', title: '', description: '' }],
                enactedYear: '',
                ministry: '',
                jurisdiction: '',
                amendments: [],
                status: 'Active',
            });
        } catch (error) {
            console.error('Error adding law:', error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Manage Laws</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Add New Law</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lawName">
                            Law Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lawName"
                            type="text"
                            placeholder="Enter law name"
                            value={formData.lawName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lawCode">
                            Law Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lawCode"
                            type="text"
                            placeholder="Enter law code"
                            value={formData.lawCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Enter law description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    {/* Sections */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Sections
                        </label>
                        {formData.sections.map((section, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="text-lg font-semibold mb-2">Section {index + 1}</h4>
                                <input
                                    type="text"
                                    name="sectionNumber"
                                    placeholder="Section Number"
                                    value={section.sectionNumber}
                                    onChange={(e) => handleSectionChange(index, e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
                                />
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Section Title"
                                    value={section.title}
                                    onChange={(e) => handleSectionChange(index, e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
                                />
                                <textarea
                                    name="description"
                                    placeholder="Section Description"
                                    value={section.description}
                                    onChange={(e) => handleSectionChange(index, e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
                                    rows="2"
                                ></textarea>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                            onClick={addSection}
                        >
                            Add Section
                        </button>

                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enactedYear">
                            Enacted Year
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="enactedYear"
                            type="number"
                            placeholder="Enter enacted year"
                            value={formData.enactedYear}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ministry">
                            Ministry
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ministry"
                            type="text"
                            placeholder="Enter ministry"
                            value={formData.ministry}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jurisdiction">
                            Jurisdiction
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="jurisdiction"
                            value={formData.jurisdiction}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select jurisdiction</option>
                            <option value="Central">Central</option>
                            <option value="State">State</option>
                            <option value="Concurrent">Concurrent</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amendments">
                            Amendments
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="amendments"
                            type="text"
                            placeholder="Enter amendments (comma-separated)"
                            value={formData.amendments.join(', ')}
                            onChange={handleArrayInputChange}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Status
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Repealed">Repealed</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Add Law
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};




const ManageUsers = () => {
    const [litigants, setLitigant] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch litigants on component mount
    useEffect(() => {
        const fetchLitigants = async () => {
            try {
                setLoading(true); // Start loading state
                const response = await axios.get('/api/v1/litigant/getalllitigants');
                console.log("Full API response:", response); // Log full response to inspect structure

                // Check if data is an array and assign to state
                if (response.data && Array.isArray(response.data.data)) {
                    setLitigant(response.data.data);
                } else {
                    console.error("Unexpected data structure:", response.data);
                    setError("Failed to fetch litigants data. Unexpected data format.");
                }
            } catch (error) {
                // Handle errors - network or response errors
                if (error.response) {
                    console.error("Server error:", error.response.data);
                    setError("Failed to fetch litigants: " + error.response.data.message);
                } else if (error.request) {
                    console.error("Network error:", error.request);
                    setError("Network error. Please try again later.");
                } else {
                    console.error("Error:", error.message);
                    setError("An unexpected error occurred.");
                }
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchLitigants();
    }, []); // Empty dependency array to run only once on mount

    // Filter the litigants based on search term
    const filteredLitigants = litigants.filter((litigant) => {
        const searchRegex = new RegExp(searchTerm, "i");
        return (
            searchRegex.test(litigant.fullName) ||
            searchRegex.test(litigant.email) ||
            searchRegex.test(litigant.mobile)
        );
    });

    // Return loading state or error message if necessary
    if (loading) return <div className="text-center py-20 text-2xl text-orange-600">Loading...</div>;
    if (error) return <div className="text-center py-20 text-2xl text-red-500">{error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
            <input
                type="text"
                placeholder="Search litigants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full max-w-md mx-auto mb-8 p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            {filteredLitigants.length === 0 ? (
                <p>No litigants found matching your search criteria.</p>
            ) : (
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLitigants.map((litigant) => (
                            <LitigantRow
                                key={litigant._id}
                                litigant={litigant}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

// Litigant Row Component for each row in the table
const LitigantRow = ({ litigant }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="p-3">{litigant.fullName}</td>
        <td className="p-3">{litigant.email}</td>
        <td className="p-3">
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Remove
            </button>
        </td>
    </tr>
);




const Analytics = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Analytics</h2>
        <p>This section will contain analytics data.</p>
    </div>
);
export default AdminDashboard;