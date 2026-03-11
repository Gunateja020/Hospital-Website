import Logo from './images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Foot(){
    const handleLogout = () => {
        toast.success("Logged Out");
        localStorage.removeItem('user');
    }
    return(
        <>
        <div className="footer">
                <div className="row">
                    <div className="col-lg-2  col-sm-4  padd">
                        <div className="logo" title="Healing Horizons Medical Center"><img className='round' src={Logo} alt="LOGO" height={80} />HHMC</div>
                    </div>
                    <div className="col-lg-2 col-sm-4  padd">
                        <h5>Quick Links</h5>
                        <Link to="/" className="links" onClick={handleLogout}>Logout</Link>
                    </div>
                    <div className="col-lg-2 col-sm-4  padd">
                        <h5>Legal</h5>
                        <a href='#' className="links">Terms and Conditions</a><br />
                        <a href="#" className="links">Privacy Policy</a><br />
                        <a href="#" className="links">Support Policy</a>
                    </div>
                    <div className="col-lg-2 col-sm-4  padd">
                        <h5>Contact</h5>
                        <p>hhmc@gmail.com</p>
                        <p>+123 456 7890</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  padd">
                        <h5>Address</h5>
                        <p>123 HHMC Street, Chennai, India</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  padd">
                        <h5 className="center">Social</h5>
                        <a href="#" class="fa fa-facebook ficon"></a>
                        <a href="#" class="fa fa-twitter ficon"></a>
                        <a href="#" class="fa fa-youtube-play ficon"></a>
                        {/* <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-whatsapp"></a> */}
                    </div>
                </div>
                <small>&copy; Copyright 2024, Healing Horizons Medical Center</small>
                <br /><br />
            </div>
        </>
    )
}

export default Foot