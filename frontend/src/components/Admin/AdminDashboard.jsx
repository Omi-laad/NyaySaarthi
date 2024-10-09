import React, { useState, useEffect } from 'react';
import { Users, Gavel, UserCheck, BookOpen, BarChart, Settings, LogOut } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

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
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-orange-500">Admin Dashboard</h1>
                </div>
                <nav className="mt-4">
                    <NavItem icon={<BarChart />} label="Overview" isActive={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                    <NavItem icon={<UserCheck />} label="Verify Lawyers" isActive={activeTab === 'verifyLawyers'} onClick={() => setActiveTab('verifyLawyers')} />
                    <NavItem icon={<Gavel />} label="Manage Laws" isActive={activeTab === 'manageLaws'} onClick={() => setActiveTab('manageLaws')} />
                    <NavItem icon={<Users />} label="Manage Users" isActive={activeTab === 'manageUsers'} onClick={() => setActiveTab('manageUsers')} />
                    <NavItem icon={<BarChart />} label="Analytics" isActive={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
                    <NavItem icon={<Settings />} label="Settings" isActive={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
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
            <div className="flex-1 overflow-y-auto p-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                console.log("API response:", response.data);

                if (Array.isArray(response.data.data)) {
                    setLawyers(response.data.data);
                } else {
                    console.error("Expected array but got:", response.data.data);
                    setError("Failed to fetch lawyers data");
                }
            } catch (error) {
                console.error('Error fetching lawyers:', error);
                setError("Failed to fetch lawyers data");
            } finally {
                setLoading(false);
            }
        };

        fetchLawyers();
    }, []);

    const verifyLawyer = async (lawyerId) => {
        try {
            console.log(`Verifying lawyer with ID: ${lawyerId}`);

            const response = await axios.put('/api/v1/lawyer/verifylawyer', { lawyerId });

            console.log('Verify lawyer response:', response.data);

            if (response.data.success) {
                setLawyers(lawyers.map(lawyer =>
                    lawyer._id === lawyerId ? { ...lawyer, isProfileVerified: true } : lawyer
                ));
            } else {
                console.error('Verification failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error verifying lawyer:', error);
        }
    };

    const revokeLawyer = async (lawyerId) => {
        try {
            const response = await axios.put('/api/v1/lawyer/revokelawyer', { lawyerId });

            console.log('Revoke lawyer response:', response.data);

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

    console.log("Filtered lawyers:", filteredLawyers);

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






// const LawyerRow = ({ name, email, status }) => (
//     <tr className="border-b border-gray-200 hover:bg-gray-100">
//         <td className="p-3">{name}</td>
//         <td className="p-3">{email}</td>
//         <td className="p-3">
//             <span className={`px-2 py-1 rounded-full text-xs ${status === 'Verified' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
//                 }`}>
//                 {status}
//             </span>
//         </td>
//         <td className="p-3">
//             <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
//                 {status === 'Verified' ? 'Revoke' : 'Verify'}
//             </button>
//         </td>
//     </tr>
// );

const ManageLaws = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Manage Laws</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add New Law</h3>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lawTitle">
                        Law Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lawTitle"
                        type="text"
                        placeholder="Enter law title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lawDescription">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lawDescription"
                        placeholder="Enter law description"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Add Law
                </button>
            </form>
        </div>
    </div>
);

const ManageUsers = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
                <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <UserRow name="Alice Johnson" email="alice@example.com" role="Litigant" />
                <UserRow name="Bob Williams" email="bob@example.com" role="Lawyer" />
                {/* Add more rows as needed */}
            </tbody>
        </table>
    </div>
);

const UserRow = ({ name, email, role }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="p-3">{name}</td>
        <td className="p-3">{email}</td>
        <td className="p-3">{role}</td>
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
