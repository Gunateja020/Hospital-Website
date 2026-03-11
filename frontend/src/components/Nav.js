import { toast } from 'react-toastify';
import Logo from './images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
function Nav(){
    const handleLogout = () => {
        toast.success("Logged Out");
        localStorage.removeItem('user');
    }
    return(
        <>
         <nav className="navbar navbar-expand-lg navigation">
                <div className="logo" title="Healing Horizons Medical Center"><img className='round' src={Logo} alt="LOGO" height={80} />HHMC</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navigation-links right">
                        <li className="nav-item">
                            <Link to="/" className="nav-button" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav