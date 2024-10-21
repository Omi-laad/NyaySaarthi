import './App.css';
import LandingPage from './components/home/landingpage'; // Importing the renamed component
import Footer from './components/common/footer';
import Login from './components/Litigant/login';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Litigant/navbar';
import Register from './components/auth/register';
import Layout from './layout';
import LoginPage from './components/Admin/Loginpage';
import AboutUs from './components/home/AboutUs';
import ContactUs from './components/home/ContactUs';
import LawList from './components/features/Laws/LawList';
import LawCard from './components/features/Laws/LawCard';
import ConsultLawyersSection from './components/home/ConsultLawyerSection';
import AdminDashboard from './components/Admin/AdminDashboard';
import SimplifiedRegister from './components/Litigant/SimplifiedRegister';
import { Toaster } from 'react-hot-toast';
import LitigantDashboard from './components/Litigant/LitigantDashboard_TEMP'; // Fix the import path
import BlogDetailPage from './components/Litigant/BlogDetailPage';
// import LitigantDashboard from './components/Litigant/LitigantDashboard';
import LoginLawyer from "./components/Lawyer/loginLawyer"
import LawyerDashboard from './components/Lawyer/LawyerDashboard';
import WriteBlogPage from './components/Lawyer/WriteBlogPage';


function App() {
  return (
    <>
      {/* <Toaster /> */}

      <Routes>
        <Route path="/registerlawyer" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/registerlitigant" element={<SimplifiedRegister />} />

        {/* Lawyer */}
        <Route path='/login-lawyer' element={<LoginLawyer />} />
        <Route path='/lawyer-dashboard' element={<LawyerDashboard />} />
        <Route path="/write-blog" element={<WriteBlogPage />} />

        {/* //Admin */}
        <Route path="/nyaysaarthi-admin@2024" element={<LoginPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        <Route path="/litigant-dashboard" element={<LitigantDashboard />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />


        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bhartiyanyaySanhita" element={<LawList />} />
          <Route path="/readlaw/:id" element={<LawCard />} />
          <Route path="/consultverifiedlawyers" element={<ConsultLawyersSection />} />


{/* PORT=8000
CORS_ORIGIN=*
MONGODB_URI=mongodb+srv://nyay-omkar:nyay-omkar-69@cluster0.j60tc.mongodb.net
ACCESS_TOKEN_SECRET=Nyaysaarthisem5
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN=saarthiNyaysem5
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_NAME=ddrw2kfzy
CLOUDINARY_API_KEY=868635836711813
CLOUDINARY_API_SECRET=41j7nIeUfAf4OKEbz4wQ5FA2kmI */}

        </Route>
      </Routes>

    </>
  );
}

export default App;
