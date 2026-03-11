import { Link, useNavigate } from 'react-router-dom';
import './Doctor.css'
import Donation from './Donation';
import { useUser } from './UserProvider.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Foot from './Foot';
import { toast } from 'react-toastify';



export default function Doctor() {
    const { user, count, completedAppointments, setCompletedAppointments, completedDonations, setDonationDetails, appointments, setAppointments, array, setArray } = useUser();
    const [model, setModel] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [id, setId] = useState('');

    const handleClose = () => setIsOpen(!isOpen);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = async (data,index) => {
        console.log(id)
        const res = await axios.put("http://127.0.0.1:5000/prescription", {id:id,prescription:text });
        if (res.data.success) {
            toast.success(res.data.message);
            setText('');
            setIsOpen(false);
        }
        else {
            toast.error(res.data.message);
        }


    };
    const navigate = useNavigate();


    const handleAppointmentYes = async (data) => {
        const res = await axios.put(`http://127.0.0.1:5000/appupdate/${data._id}`, data);
        if (res.data.success) {
            toast.success(res.data.message)
        }
        else {
            toast.error(res.data.message)

        }
    }

    const handleAppointmentNO = async (data) => {
        const res = await axios.put(`http://127.0.0.1:5000/appdelete/${data._id}`, data);
        if (res.data.success) {
            toast.success(res.data.message)
        }
        else {
            toast.error(res.data.message)
        }
    }

    const handleAppointmentEdit = (data) => {
        setIsOpen(!isOpen)
        setId(data)
    }

    const handleViewDetails = () => {
        const completed = appointments.filter(appointment => appointment.status === "Completed");
        setCompletedAppointments(completed);
        navigate("/appoicompleted")
    }

    const handleViewDonationDetails = () => {
        const donations = completedDonations.filter(appointment => appointment.status === "Completed");
        setDonationDetails(donations);
        navigate("/blooddonated")
    }


    useEffect(() => {
        async function Appo() {
            const appointment = await axios.get(`http://127.0.0.1:5000/docapp/doctor/${user._id}`);
            const b = appointment.data.message;
            setAppointments(b);
            const c = b.filter(user => user.status === "notCompleted");
            setArray(c);
        }
        Appo();
    }, []);


    return (
        <>
            <Nav />
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='back'>
                        <h2 style={{ color: 'green' }}>{array.length}</h2>
                        <p>Total Number of Appointments</p>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='back'>
                        <h2 style={{ color: 'red' }}>{count}</h2>
                        <p>Total Number of Blood Donations</p>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='back'>
                        <p>Appointments Completed</p>
                        <p className='view' onClick={handleViewDetails}>View Details</p>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='back'>
                        <p>Blood Donated</p>
                        <p className='view' onClick={handleViewDonationDetails}>View Details</p>                    </div>

                </div>
            </div>
            <h1 className='middle'>Appointments</h1>
            <div className='table-responsive'>
                <table className='doc_table table table-striped table-bordered'>
                    <thead>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Reason</th>
                        <th>Check</th>
                    </thead>
                    <tbody>
                        {array.map((data,index) => (
                            <tr>
                                <td>{data.firstname + " " + data.lastname}</td>
                                <td>{data.gender}</td>
                                <td>{data.age}</td>
                                <td>{data.bloodGroup}</td>
                                <td>{data.appointmentDate}</td>
                                <td>{data.appointmentTime}</td>
                                <td>{data.appointmentReason}</td>
                                <td>
                                    <i onClick={() => handleAppointmentYes(data)} class="fa fa-check-circle mr-2 mb-2" style={{ color: "green", fontSize: "30px", cursor: "pointer" }} aria-hidden="true"></i>
                                    <i onClick={() => handleAppointmentNO(data)} class="fa fa-window-close mr-2 mb-2" style={{ color: "red", fontSize: "30px", cursor: "pointer" }} aria-hidden="true"></i>
                                    <i onClick={()=>handleAppointmentEdit(data._id)} class="fa fa-clipboard" style={{ color: "black", fontSize: "30px", cursor: "pointer" }} aria-hidden="true">
                                        <div>
                                            {isOpen && (
                                                <div
                                                    onClick={handleClose}
                                                    style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '1em', zIndex: 1000 }} >
                                                    <div onClick={(e) => e.stopPropagation()}>
                                                        <h2>Prescription</h2>
                                                        <textarea className='form-control' type="text" rows={18} cols={100} value={text} name="prescription" onChange={handleChange} />
                                                        <button className='btn btn-success btn-lg m-2' onClick={() => handleSubmit(data,index)}>Submit</button>
                                                        <button className='btn btn-secondary btn-lg m-2' onClick={(handleClose)}>Close</button>
                                                    </div>
                                                </div>
                                            )}

                                            <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} />
                                        </div>
                                    </i>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>
            <Donation />
            <Foot />

        </>
    );
}



