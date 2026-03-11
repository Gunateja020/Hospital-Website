import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import {toast} from "react-toastify";
import { useUser } from './UserProvider';
function Login() {
  const {user,setUser}=useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState(false);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  const data={"email":username, "password":password}
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('http://127.0.0.1:5000/loginusers',data)
    console.log(res.data.success)
    if(res.data.success){
      if (res.data.role === 'Doctor') {
        toast.success(res.data.message)
        localStorage.setItem('user',JSON.stringify(res.data))
        const newData=JSON.parse(localStorage.getItem('user'))
        setUser(newData.user)
        navigate('/doctor');
        return null;
      }
      else {
        navigate('/home')
        toast.success(res.data.message)
        localStorage.setItem('user',JSON.stringify(res.data))
        setUser(JSON.parse(localStorage.getItem('user')))
        return null;
      }
    }
    else{
      setErrorMessage(res.data.message);
        setInputError(true);
    }
  };
  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      const parseData = JSON.parse(data)
      setUser(
        parseData.user
      );
    }
    }
    , [])

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email*" required onChange={e => setUsername(e.target.value)} style={inputError ? { borderColor: 'red', backgroundColor: '#f1b3b3' } : {}} />
          <input type="password" placeholder="Password*" required onChange={e => setPassword(e.target.value)} style={inputError ? { borderColor: 'red', backgroundColor: '#f1b3b3' } : {}} />
          <button type="submit">Login</button>
          <div className='space'>
            <small>Dont have account? </small>
            <Link to="/register"><small>Create an account</small></Link>
          </div >
          {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
