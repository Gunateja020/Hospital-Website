// import React from 'react';
// import './Profile.css';
// import Navigation from './Navigation';
// import Footer from './Footer'
// import { Link } from 'react-router-dom';
// import img from "./images/profile.jpg"
// function Profile() {
//     let data = localStorage.getItem('user')
//     let parsedData = JSON.parse(data)
//     return (
//         <>
//             <Navigation />
//             {/* <h1 className='center'>My Profile</h1>
//             <div className='row'>
//                 <div className='col-lg-3'>
//                     <div className='bod'>
//                         <i class="fa fa-user-circle big" aria-hidden="true"></i>
//                         <p className='mi'>{parsedData.user.user}</p>
//                         <p className='email'>{parsedData.user.email}</p>
//                     </div>
//                 </div>
//                 <div className='col-lg-9'>
//                     <div className='bo'>
//                         <div className='table-responsive bi'>
//                             <table className='table doc_table table table-striped table-bordered table-info table-hover table-lg tab'>
//                                 <tr>
//                                     <th>ID</th>
//                                     <td>{parsedData.user._id}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Name</th>
//                                     <td>{parsedData.user.user}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Email</th>
//                                     <td>{parsedData.user.email}</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//             import React from 'react';
//             import {Container, Row, Col, Image, Button} from 'react-bootstrap';

//             function Profile({profile, handleLogin, formatDate}) {
//   return(
//             <>
//                 <Container fluid className="bg-dark mt-5">
//                     <Row>
//                         <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover" fluid />

//                         <Col sm={8} xs={9} className="mx-auto d-flex">
//                             <i className="fas fa-user rounded-circle text-white position-relative" style={{ width: '12rem', height: '12rem' }}></i>

//                             <h1 className="w-100 text-left my-4 text-light display-4 font-serif">
//                                 Hello, {profile.Firstname}
//                             </h1>
//                         </Col>

//                         <Col xl={8} lg={9} md={9} sm={10} xs={9} className="mx-auto d-flex flex-column gap-3 position-relative" style={{ top: '-2rem' }}>
//                             <p className="text-primary display-4">Account Details</p>
//                             <div className="w-100 py-3 d-flex flex-column justify-content-center border border-4 border-primary rounded p-3">
//                                 <div className="w-100 d-flex flex-sm-row flex-xs-column gap-2 justify-content-center">
//                                     <div className="w-100">
//                                         <dl className="text-white">
//                                             <div className="d-flex flex-column pb-2">
//                                                 <dt className="mb-1 text-muted display-6">
//                                                     First Name
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">{profile.Firstname}</dd>
//                                             </div>
//                                             <div className="d-flex flex-column py-1">
//                                                 <dt className="text-muted display-6">
//                                                     Last Name
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">{profile.Lastname}</dd>
//                                             </div>
//                                             <div className="d-flex flex-column py-1">
//                                                 <dt className="text-muted display-6">
//                                                     User Since
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">
//                                                     {formatDate(profile.createdAt)}
//                                                 </dd>
//                                             </div>
//                                         </dl>
//                                     </div>
//                                     <div className="w-100">
//                                         <dl className="text-white">
//                                             <div className="d-flex flex-column pb-2">
//                                                 <dt className="mb-1 text-muted display-6">
//                                                     Email
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">{profile.Email}</dd>
//                                             </div>

//                                             <div className="d-flex flex-column pt-2">
//                                                 <dt className="mb-1 text-muted display-6">
//                                                     Phone Number
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">{profile.Phone}</dd>
//                                             </div>
//                                             <div className="d-flex flex-column pt-2">
//                                                 <dt className="mb-1 text-muted display-6">
//                                                     Address
//                                                 </dt>
//                                                 <dd className="display-5 font-weight-bold">
//                                                     samuelabera87@gmail.com
//                                                 </dd>
//                                             </div>
//                                         </dl>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-center display-6 text-success mt-3">
//                                     <a href="/orders" className="text-decoration-none">
//                                         Order History
//                                     </a>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                     <div className="d-flex justify-content-center">
//                         <Button onClick={handleLogin} variant="danger" className="text-white px-3">
//                             Logout
//                         </Button>
//                     </div>
//                 </Container>
//                 <Footer />
//             </>
//             )
// }

//             export default Profile

import React from 'react';
import './Profile.css';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from "./images/profile.avif"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from './UserProvider';


function Profile() {
    const { user, setUser } = useUser();
    let data = localStorage.getItem('user')
    let parsedData = JSON.parse(data)
    function formatDate(dateString) {
        const date = new Date(dateString);
        const month = date.toLocaleString("default", { month: "long" });
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();

        return `${month} ${day} ${year}`;
    }

    return (
        <>
            <Navigation />
            <Container fluid>
                <Row className="align-items-center">
                    <Image src={img} alt="User Cover" width="100%" height="250px" />
                    {/* <Col xs={12} md={6} lg={12}>
                        <Image src={img} alt="User Cover" width="100%" height="250px" />
                    </Col> */}

                    <Col className="d-flex ">
                        <div style={{ position: 'relative', top: '25%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                            <i className="fa fa-user big mb-5 ml-5 profile" aria-hidden="true"></i>
                        </div>

                        <h1 className="text-dark display-4 font-serif ml-5" style={{ margin: '0', padding: '0', lineHeight: '1' }}>
                            Hello, {parsedData.user.user}
                        </h1>

                    </Col>

                    <Col xs={10} lg={8} className="mx-auto">
                        <p className="text-primary display-4" style={{ marginTop: '0' }}>
                            Account Details
                        </p>
                        <div className="w-100 py-3  border border-4 border-primary rounded p-3">
                            <div className="row">
                                <div className="w-100 col-sm-12 col-lg-6">
                                    <dl className="text-white">
                                        <div className="d-flex flex-column pb-2">
                                            <dt className="mb-1 text-muted que">
                                                ID
                                            </dt>
                                            <dd className=" font-weight-bold res">#{parsedData.user._id}</dd>
                                        </div>
                                        <div className="d-flex flex-column py-1">
                                            <dt className="text-muted que">
                                                First Name
                                            </dt>
                                            <dd className=" font-weight-bold res">{parsedData.user.user}</dd>
                                        </div>
                                        <div className="d-flex flex-column py-1">
                                            <dt className="text-muted que">
                                                Last Name
                                            </dt>
                                            <dd className=" font-weight-bold res">{parsedData.user.luser}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="w-100 col-sm-12 col-lg-6">
                                    <dl className="text-white">
                                        <div className="d-flex flex-column pb-2">
                                            <dt className="mb-1 text-muted display-6">
                                                Email
                                            </dt>
                                            <dd className="display-5 font-weight-bold res">{parsedData.user.email}</dd>
                                        </div>

                                        <div className="d-flex flex-column pt-2">
                                            <dt className="mb-1 text-muted display-6">
                                                Phone Number
                                            </dt>
                                            <dd className="display-5 font-weight-bold res">{parsedData.user.mobile}</dd>
                                        </div>
                                        <div className="d-flex flex-column pt-2">
                                            <dt className="mb-1 text-muted display-6">
                                                Account Created
                                            </dt>
                                            <dd className="display-5 font-weight-bold res">
                                                {formatDate(parsedData.user.createdAt)}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center display-6 text-success mt-3">
                                <Link to={"/appoishow"} className="text-decoration-none">
                                    <p>My Appointments</p>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-center m-5">
                <Link to="/" className="btn btn-danger" onClick={() => { localStorage.removeItem('user'); setUser({}); toast.success("Logged Out") }}>Logout</Link>
            </div>

            <Footer />



        </>
    );
}

export default Profile;
