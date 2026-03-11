import React, { useState } from 'react';
import './Appointment.css';
import Footer from './Footer';
import Customer from './images/customersupport.png';
import Doc from './images/pngegg.png';
import Sympt from './images/symptom.png'
import Doctor from './images/qdoctor.png'
import imgapp from './images/appointment1.png'
import Navigation from './Navigation';
import axios from 'axios';
import { useUser } from './UserProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Appointment = () => {
 
  const {user,doctor,form,setForm,}=useUser();
  const bloodGroups = ['Select', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const timeOptions = ['Select', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // //const appointments = sessionStorage.getItem('appointments')
    // const appointments = localStorage.getItem('appointments')
    // if (appointments == null) {
    //   let aa = []
    //   aa.push(form)
    //   //sessionStorage.setItem('appointments', JSON.stringify(aa)) // convert arrAY To string
    //   localStorage.setItem('appointments', JSON.stringify(aa)) // convert arrAY To string

    // }
    // else {
    //   let aa = JSON.parse(appointments) // string to array
    //   aa.push(form)
    //   //sessionStorage.setItem('appointments', JSON.stringify(aa))
    //   localStorage.setItem('appointments', JSON.stringify(aa))
    // }
    const res = await axios.post('http://127.0.0.1:5000/appointments', {doctorid:doctor._id,...form,status:"notCompleted",patientid:user._id,prescription:" "})
    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/appointment")
    }
    else {
      toast.error(res.data.message);
    }
    //console.log('aa:'+JSON.stringify(form))         ;
    //console.log('bb:'+JSON.stringify(sessionStorage.getItem('appointments')))    
    setForm({
      firstname: '',
      lastname: '',
      age: '',
      bloodGroup: '',
      gender: '',
      appointmentDate: '',
      appointmentTime: '',
      appointmentReason: '',
    })
  };

  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <Navigation />
      {/* <div className='row'>
        <div className='col-lg-3 col-sm-12'> */}
      <div className='cen'>
      {/* {user.user && <h2>Dr {doctor.user}</h2>} */}
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img src={imgapp} alt='doc img' width='350px' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <h2 className='marg'>New Patient Enrollment</h2>
            </div>
          </div>
          <div className='padd'>
            <label>
              Name <br />
              <input type="text" name="firstname" className='appointment mar' placeholder='First Name' value={form.firstname} onChange={handleChange} required />
              <input type="text" name="lastname" className='appointment' placeholder='Last Name' value={form.lastname} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Age <br />
              <input type="number" name="age" className='appointment mar' value={form.age} onChange={handleChange} required />
            </label>
            <label>
              Blood Group <br />
              <select className='appointment' name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Gender <br />
              <label>
                <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} required />
                Male
              </label>
              <br />
              <label>
                <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} required />
                Female
              </label>
            </label>
            <br />
            <hr />
            <label>
              Appointment Date <br />
              <input type="date" className='appointment mar' placeholder='DD-MM-YYYY' name="appointmentDate" value={form.appointmentDate} min={today} onChange={handleChange} required />
            </label>

            <label>
              Appointment Time <br />
              <select name="appointmentTime" className='appointment' value={form.appointmentTime} onChange={handleChange} required>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Reason for Appointment <br />
              <textarea className="form-control text" name="appointmentReason" rows="5" cols='70' value={form.appointmentReason} onChange={handleChange} required />
            </label>
            <br /><hr />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {/* </div>
        <div className='col-lg-5 col-sm-12' >
          <img src={Doc} alt='doc' className='doc' width='500px' height='650px' />
        </div>
        <div className='col-lg-4 col-sm-12 pt-5 pl-5' >
          <div className='row'>
            <div className='col-lg-2'>
              <img src={Customer} width="50px" alt="customer" />
            </div>
            <div className='col-lg-2'>
              <h6 className='disp'>Health Information</h6>
              <p className='move'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-2'>
              <img src={Sympt} width="50px" alt="customer" />
            </div>
            <div className='col-lg-2'>
              <h6 className='disp'>Symptom Check</h6>
              <p className='move'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-2'>
              <img src={Doctor} width="50px" alt="customer" />
            </div>
            <div className='col-lg-2'>
              <h6 className='disp'>Qualified Doctors</h6>
              <p className='move'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div>
          </div>
        </div>
      </div> */}


      <Footer />
    </>
  );
};

export default Appointment;
