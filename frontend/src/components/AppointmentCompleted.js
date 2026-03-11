import { Link } from "react-router-dom";
import { useUser } from "./UserProvider";
import Logo from './images/logo.jpg';
import { toast } from 'react-toastify';
import Foot from "./Foot";
import Nav from "./Nav";

function AppointmentCompleted() {
    const { completedAppointments, setCompletedAppointments } = useUser();
    const handleLogout = () => {
        toast.success("Logged Out");
        localStorage.removeItem('user');
    }

    return (
        <>
           <Nav/>
            {completedAppointments.length > 0 ? (
            <div className='table-responsive'>
                <table className='doc_table table table-striped table-bordered'>
                    <thead>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Reason</th>
                    </thead>
                    <tbody>
                        {completedAppointments.map((data,index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.firstname + " " + data.lastname}</td>
                                <td>{data.gender}</td>
                                <td>{data.age}</td>
                                <td>{data.bloodGroup}</td>
                                <td>{data.appointmentDate}</td>
                                <td>{data.appointmentTime}</td>
                                <td>{data.appointmentReason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             ) : (
                <p>No Appointments found.</p>
            )}
        </>
    )
}
export default AppointmentCompleted