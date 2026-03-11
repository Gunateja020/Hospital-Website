import Footer from "./Footer";
import Navigation from "./Navigation";
import { useUser } from './UserProvider.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./AppoinmentsShow.css";


function AppoinmentsShow() {
    const { setAppointments, user, appointments } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(false);
    const handleAppointmentEdit = (data) => {
        setIsOpen(!isOpen)
        setId(data)
    }
    const handleClose = () => setIsOpen(!isOpen);

    useEffect(() => {
        async function Appo() {
            const appointment = await axios.get(`http://127.0.0.1:5000/docapp/patient/${user._id}`);
            console.log(appointment.data);
            const b = appointment.data.message;
            setAppointments(b);
        }
        Appo();
    }, []);
    return (
        <>
            <Navigation />
            <h1 className="mid">My Appointments</h1>
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
                    <th>Status</th>
                    <th>Check</th>

                </thead>
                <tbody>
                    {appointments.map(data => (
                        <tr>
                            <td>{data.firstname + " " + data.lastname}</td>
                            <td>{data.gender}</td>
                            <td>{data.age}</td>
                            <td>{data.bloodGroup}</td>
                            <td>{data.appointmentDate}</td>
                            <td>{data.appointmentTime}</td>
                            <td>{data.appointmentReason}</td>
                            <td>{data.status === "notCompleted" ? "Not Completed" : "Completed"}</td>
                            <td><i onClick={() => handleAppointmentEdit(data.prescription)} class="fa fa-clipboard" style={{ color: "black", fontSize: "30px", cursor: "pointer" }} aria-hidden="true">
                                <div>
                                    {isOpen && (
                                        <div
                                            onClick={handleClose}
                                            style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '1em', zIndex: 1000 }} >
                                            <div onClick={(e) => e.stopPropagation()}>
                                                <h2>Prescription</h2>
                                                <div className="appshow">
                                                <p>{id}</p>
                                                </div>
                                                
                                                <button className='btn btn-secondary btn-lg m-2' onClick={(handleClose)}>Close</button>
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} />
                                </div>
                            </i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <Footer />
        </>
    )
}
export default AppoinmentsShow;