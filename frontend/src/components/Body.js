import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Body = () => {
  return (
    <>
      <h2 className='service'>Health Services</h2>
      <div className='pad'>
        <Link to="/appointment">
          <div className='card-content'>
            Appointment
            <p><small>Click here to book Appointment</small></p>
          </div>
        </Link>
        <Link to="/blood">
          <div className='card-content'>
            Blood Donation
            <p><small>Click here to donate Blood</small></p>
          </div>
        </Link>
        <Link to="/appoishow">
          <div className='card-content'>
            Prescription
            <p><small>Click here for Prescription</small></p>
          </div>
        </Link>
      </div>
    </>

  );
};

export default Body;
