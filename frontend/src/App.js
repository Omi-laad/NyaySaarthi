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

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />

        <Route path="/nyaysaarthi-admin@2024" element={<LoginPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />



        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bhartiyanyaySanhita" element={<LawList />} />
          <Route path="/readlaw/:id" element={<LawCard />} />
          <Route path="/consultverifiedlawyers" element={<ConsultLawyersSection />} />

        </Route>
      </Routes>

    </>
  );
}

export default App;
