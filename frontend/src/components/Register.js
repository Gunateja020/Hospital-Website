import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [role, setRole] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [change, setChange] = useState(false);
    const navigate1 = useNavigate();
    const data={"user":name,"luser":lname,"email":email,"mobile": mobile,"password":password,"role":role};
    const handleName = (e) => {
        setName(e.target.value);
        // setData({...data,[e.target.name]:e.target.value});
    };

    const handleLname=(e)=>{
        setLname(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // setData({...data,[e.target.name]:e.target.value});
    };
    const handleMobile = (e) => {
        setMobile(e.target.value);
        // setData({...data,[e.target.name]:e.target.value});
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        // setData({...data,[e.target.name]:e.target.value});
    };
    const handleRePassword = (e) => {
        setCheckPassword(e.target.value);
    };

    const handleRole = (e) => {
        setRole(e.target.value);
        // setData({...data,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (password === checkPassword) {
            try{
                console.log(data)
                const res=await axios.post('http://127.0.0.1:5000/registeredusers',data)
                if(res.data.success){
                    toast.success(res.data.message);
                    setRedirect(true);
                }
                else{
                    toast.error(res.data.message)
                }
             
               }catch(error){
                console.log(error.message)
               }
           
        }
        else {
            setChange(true);
            // document.getElementById("result").innerHTML = "Password does not match";
            toast.error("Password does not match")
        }

    };

    if (redirect) {
        navigate1('/');
        return null;
    }

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user"
                    placeholder="First Name*"
                    value={name}
                    required
                    onChange={handleName}
                />
                <input
                    type="text"
                    name="luser"
                    placeholder="Last Name*"
                    value={lname}
                    required
                    onChange={handleLname}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    required
                    onChange={handleEmail}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number*"
                    value={mobile}
                    required
                    onChange={handleMobile}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={password}
                    required
                    style={change ? { borderColor: 'red', backgroundColor: '#f1b3b3' } : {}}
                    onChange={handlePassword}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Re-Type Password*"
                    value={checkPassword}
                    required
                    style={change ? { borderColor: 'red', backgroundColor: '#f1b3b3' } : {}}
                    onChange={handleRePassword}
                />
                <select
                    name="role"
                    value={role}
                    required
                    onChange={handleRole}
                >
                    <option value="" disabled >Select Role*</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Patient">Patient</option>
                </select>
                <button type="submit">Register</button>
            </form>
            {/* <div id="result" style={{ color: 'red', textAlign: 'center' }}></div> */}
        </div>
    );
};

export default Register;
