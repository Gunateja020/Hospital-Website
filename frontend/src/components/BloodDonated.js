import React from 'react';
import Nav from './Nav.js';
import { useUser } from './UserProvider.js';

function BloodDonated() {
    const { donationDetails } = useUser();
    return (
        <>
        <Nav/>
            {donationDetails.length > 0 ? (
                <div className='table-responsive'>
                    <table className='doc_table table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Blood Group</th>
                                <th>Blood Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donationDetails.map((donation, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{donation.firstname + " " + donation.lastname}</td>
                                    <td>{donation.gender}</td>
                                    <td>{donation.age}</td>
                                    <td>{donation.bloodGroup}</td>
                                    <td>{donation.units}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No Donations found.</p>
            )}
        </>
    )
}
export default BloodDonated