import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from './UserProvider';
import { toast } from 'react-toastify';

export default function Donation() {
    const{setCount, setCompletedDonations,donations, setDonations}=useUser()
    
    setCount(donations.length)

    const handleDonationYes = async (data) => {
        const res = await axios.put(`http://127.0.0.1:5000/donupdate/${data._id}`, data);
        if (res.data.success) {
            toast.success(res.data.message)
        }
        else {
            toast.error(res.data.message)

        }
    };

    const handleDonationNO = async (data)=>{
        const res = await axios.delete(`http://127.0.0.1:5000/dondelete/${data._id}`, data);
        if (res.data.success) {
            toast.success(res.data.message)
        }
        else {
            toast.error(res.data.message)
        }
    }

    return (
        <>
            <h1 className='middle'>Blood Donation</h1>
            <div className='table-responsive'>
            <table className='doc_table table table-striped table-bordered'>
                <thead>
                    <th>Donor Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Blood Group</th>
                    <th>No of Units</th>
                    <th>Check</th>
                </thead>
                <tbody>
                    {donations.map(data => (
                        <tr>
                            <td>{data.firstname + " " + data.lastname}</td>
                            <td>{data.gender}</td>
                            <td>{data.age}</td>
                            <td>{data.bloodGroup}</td>
                            <td>{data.units}</td>
                            <td>
                                <i onClick={() => handleDonationYes(data)} class="fa fa-check-circle mr-2 mb-2" style={{color:"green", fontSize:"30px", cursor:"pointer"}} aria-hidden="true"></i>                            
                                <i onClick={() => handleDonationNO(data)} class="fa fa-window-close" style={{color:"red", fontSize:"30px", cursor:"pointer"}} aria-hidden="true"></i>                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
