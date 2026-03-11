import axios from 'axios'
import { useState,useEffect } from 'react'
import { useUser } from './UserProvider.js'
import "./Multipledoc.css"
import { Link } from 'react-router-dom'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import Appointment from './Appointment.js'
const Multipledoc = () => {
    const { user, setUser, registeredDoctors, setRegisteredDoctors,doctor,setDoctor } = useUser()
    useEffect(()=>{
        if (user) {
            const fetchedData = async () => {
                const fetched=await axios.get("http://127.0.0.1:5000/registereddoctors")
                console.log(fetched.data.user)
                setRegisteredDoctors(fetched.data.user)
            }
            fetchedData();
        }
    },[])
   
   const docs= registeredDoctors.map(data=>
            <div className='col-lg-3 block'>
                <i class="fa fa-user-md size" aria-hidden="true"></i>
                <p className='name'>Name: Dr.{data.user} {data.luser}</p>
                <Link to="/booking" className="book"><span onClick={()=>{setDoctor(data);console.log("inside the multipledoc"+doctor)}}>Book Appointment</span></Link>
            
            </div>
    )
    return (
        <>
        <Navigation/>
            <div className='row'>
                {docs}
            </div>
            <Footer/>
        </>
    )
}

export default Multipledoc