import Ambulance from './images/ambulance.png'
import Customer from './images/customersupport.png';
import Blood from './images/blood.png';

export default function Services() {
    return (
        <>
            <h2 className="service">Service We Offer</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='row p-5'>
                        <div className='col-lg-2'>
                            <img src={Ambulance} width="50px" alt="ambulance" />
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='disp'>Emergency Care</h6>
                            <p className='move'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='row p-5'>
                        <div className='col-lg-2'>
                            <img src={Customer} width="50px" alt="customer" />
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='disp'>Call Center</h6>
                            <p className='move'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='row p-5'>
                        <div className='col-lg-2'>
                            <img src={Blood} width="50px" alt="blood" />
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='disp'>Blood Test</h6>
                            <p className='move'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        </div>
                    </div>

                </div>
            </div>


        </>

    );
}