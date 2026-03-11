import React, { useState } from 'react';
import './Blood.css';
import Footer from './Footer';
import Navigation from './Navigation';
import Bd from './images/bd1.jpg';
import Bdon from './images/blooddon.png'
import axios from 'axios';


const Blood = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    age: '',
    bloodGroup: '',
    gender: '',
    units: '',
    status:"notCompleted"
  });

  const bloodGroups = ['Select', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const donations = localStorage.getItem('donation')
    // if (donations == null) {
    //   let aa = []
    //   aa.push(form)
    //   localStorage.setItem('donation', JSON.stringify(aa))
    // }
    // else {
    //   let aa = JSON.parse(donations)
    //   aa.push(form)
    //   localStorage.setItem('donation', JSON.stringify(aa))
    // }
    // document.getElementById("result").innerHTML = " Thank you for your intrest in Blood donation.";
    const res= await axios.post("http://127.0.0.1:5000/donation", form)
    if(res.data.success){
          document.getElementById("result").innerHTML = res.data.message;
    }
    else{
      document.getElementById("result").innerHTML = res.data.message;
    }
    setForm({
    firstname: '',
    lastname: '',
    age: '',
    bloodGroup: '',
    gender: '',
    units: '',
    })
  };

  return (
    <>
      <Navigation />
      {/* <div className='row'>
        <div className='col-lg-6'> */}
      <div className='bcen'>
        <form onSubmit={handleSubmit} className="donation-form">
          <div className='row bgc'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img src={Bdon} alt='image' width='340px' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <h2 className='bmarg'>Blood Donation</h2>
            </div>
          </div>
          <div className='padd'>
          <label>
            Name <br/>
            <input type="text" name="firstname" placeholder='First Name' value={form.firstname} className="donation mar" onChange={handleChange} required />
            <input type="text" name="lastname" placeholder='Last Name' value={form.lastname} className="donation" onChange={handleChange} required />
          </label>
          <br />
          <label>
            Age <br/>
            <input type="number" name="age" value={form.age} className="donation mar" onChange={handleChange} required />
          </label>
          <label>
            Blood Group <br/>
            <select className='donation' name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required >
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
            </label><br />
            <label>
              <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} required />
              Female
            </label>
          </label>
          <br />
          <label>
            Number of units <br/>
            <input type="number" name="units" min={1} max={3} className="donation" value={form.units} onChange={handleChange} required />
          </label>
          </div>
          <hr/>
          <button type="submit">Submit</button>
          <div id="result" style={{ textAlign: 'center' }}></div>
        </form>
      </div>
      {/* </div> */}
      {/* <div className='col-lg-6'>
          <img src={Bd} alt="img" width='500px' />

        </div>
      </div> */}
      <div id="result"></div>
      <Footer />
    </>
  );
};

export default Blood;
