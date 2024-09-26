import './App.css';
import LandingPage from './components/home/landingpage'; // Importing the renamed component
import Footer from './components/common/footer';
import Login from './components/auth/login';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Register from './components/auth/register';
import Layout from './layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="/landingpage" element={<LandingPage />} />


        </Route>
      </Routes>

    </>
  );
}

export default App;
