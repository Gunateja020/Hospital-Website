import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About';
import './App.css';
import Appointment from './components/Appointment';
import Blood from './components/Blood';
import Contact from './components/Contact';
import Doctor from './components/Doctor';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Multipledoc from './components/Multipledoc';
import { useUser } from './components/UserProvider';
import AppointmentCompleted from './components/AppointmentCompleted';
import BloodDonated from './components/BloodDonated';
import AppoinmentsShow from './components/AppoinmentsShow';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const {user,setUser}=useUser()
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
         <Route path="/" element={<Login />} />
        {
          user && 
          <>
              
        {user.role==="Patient" && <Route path='/appointment' element={<Multipledoc />} />}
        {user.role==="Patient" && <Route path='/booking' element={<Appointment />} />}
        {user.role==="Patient" && <Route path='/appoishow' element={<AppoinmentsShow />} />}
        {user.role==="Patient" && <Route path='/home' element={<Home />} />}
        {user.role==="Patient" && <Route path='/About' element={<About />} />}
        {user.role==="Patient" && <Route path="/contact" element={<Contact />} />}
        {user.role==="Patient" && <Route path="/blood" element={<Blood />} />}
        {user.role==="Doctor" && <Route path="/doctor" element={<Doctor />} />}
        {user.role==="Patient" && <Route path="/profile" element={<Profile />} />}
        {user.role==="Doctor" && <Route path="/appoicompleted" element={<AppointmentCompleted />} />}
        {user.role==="Doctor" && <Route path="/blooddonated" element={<BloodDonated />} />}
          </>
        }
      </Routes>
    </div>
  );
}
export default App;
