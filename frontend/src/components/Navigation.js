// import React, { useState } from 'react';
import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.jpg';
import { useUser } from './UserProvider';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import About from './About';
// import Login from './Login';
// import Contact from './Contact';
// import { Link } from 'react-router-dom';

const Navigation = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState('');
  // const navigate = useNavigate();
  // const client=localStorage.getItem('user')
  // setName(client.user)

  // const [currentComponent, CurrentComponent] = useState('Home');
  // const Component = () => {
  //   switch(currentComponent) {
  //     case 'Home':
  //       return <Home />;
  //     case 'About':
  //       return <About />;
  //     case 'Contact':
  //       return <Contact />;
  //     case 'Logout':
  //       return <Login />;
  //     default:
  //       return <Home />;
  //   }
  // };

  return (
    <>

      {/* <nav className="navbar navbar-expand-lg navigation" style={{ padding: 0 }}>
        <div className="logo" title="Healing Horizons Medical Center"><img className='round' src={Logo} alt="LOGO" height={80} />HHMC</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto navigation-links center">
            <li className="nav-item">
              <Link to="/home" className="nav-button">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-button">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-button">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-button">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link to="/blood" className="nav-button">Donation</Link>
            </li>
          </ul>

          <ul className="navbar-nav navigation-links right">
            <li class="nav-item dropdown mr-3 profile-button">
              <a class="dropdown p-0 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user-circle-o p-0 text-white" aria-hidden="true"></i>
              </a>
              <div class="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown">
                <div><Link to="/profile" className="">Profile</Link></div>
                <div><Link to="/" className="">Logout</Link></div>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* {currentComponent !== 'Logout' && (
      <nav className="navigation">
        <div className="navigation-content">
          <div className="logo" title="Healing Horizons Medical Center"><img src={Logo} alt="LOGO" height={80} />HHMC</div>
          <div className="navigation-links center">
            <button className="nav-button" onClick={() => CurrentComponent('Home')}>Home</button>
            <button className="nav-button" onClick={() => CurrentComponent('About')}>About</button>
            <button className="nav-button" onClick={() => CurrentComponent('Contact')}>Contact</button>
          </div>
          <div className="navigation-links right">
            <button className="nav-button" onClick={() => CurrentComponent('Logout')}>Logout</button>
          </div>
        </div>
      </nav>
    )}
      {Component()} */}
      {/* <nav className="navbar navbar-expand-lg navigation" style={{ padding: 0 }}>
  <div className="logo" title="Healing Horizons Medical Center">
    <img className='round' src={Logo} alt="LOGO" height={80} />HHMC
  </div>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto navigation-links center">
      <li className="nav-item">
        <Link to="/home" className="nav-button">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-button">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-button">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/appointment" className="nav-button">Appointment</Link>
      </li>
      <li className="nav-item">
        <Link to="/blood" className="nav-button">Donation</Link>
      </li>
    </ul>
  </div>
  <div className="d-flex">
    <li class="nav-item dropdown mr-3 profile-button">
      <a class="dropdown p-0 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        <i class="fa fa-user-circle-o p-0 text-white" aria-hidden="true"></i>
      </a>
      <div class="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown">
        <div><Link to="/profile" className="">Profile</Link></div>
        <div><Link to="/" className="">Logout</Link></div>
      </div>
    </li>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
    </button>
  </div>
</nav> */}

      <nav className="navbar navbar-expand-lg navigation" style={{ padding: 0, position: 'relative' }}>
        <div className="logo" title="Healing Horizons Medical Center">
          <img className='round' src={Logo} alt="LOGO" height={80} />HHMC
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navigation-links center">
            <li className="nav-item">
              <Link to="/home" className="nav-button">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-button">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-button">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-button">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link to="/blood" className="nav-button">Donation</Link>
            </li>
            <li className="nav-item">
              <Link to="/appoishow" className="nav-button">Prescription</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex " style={{ position: 'absolute', right: 0, top: 0 }}>
          <li class="nav-item dropdown mr-3 profile-button">
            <a class="dropdown p-0 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-user-circle-o p-0 text-white fa-lg" aria-hidden="true"></i>
            </a>
            <div class="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown">
              <div><Link to="/profile" className="option">Profile</Link></div>
              <div><Link to="/" className="option" onClick={()=>{localStorage.removeItem('user');setUser({});toast.success("Logged Out")}}>Logout</Link></div>
            </div>
          </li>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
          </button>
        </div>
      </nav>





    </>
  );
};

export default Navigation;
