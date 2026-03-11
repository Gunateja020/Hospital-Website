import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false)
  const [doctor, setDoctor] = useState({})
  const [count, setCount] = useState()
  const [appointments, setAppointments] = useState([]);
  const [array, setArray] = useState([]);
  const [registeredDoctors, setRegisteredDoctors] = useState([])
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [completedDonations, setCompletedDonations] = useState([]);
  const [donationDetails, setDonationDetails] = useState([]);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    age: '',
    bloodGroup: '',
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentReason: '',
  });
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      const parseData = JSON.parse(data)
      setUser(
        parseData.user
      );
      async function Appo() {
        let appointment=[]
        if(user.role==="Doctor"){
           appointment = await axios.get(`http://127.0.0.1:5000/docapp/doctor/${user._id}`);
        }
        else{
          appointment = await axios.get(`http://127.0.0.1:5000/docapp/patient/${user._id}`);
          

        }
        const b = appointment.data.message;
        setAppointments(b);
        const c = b.filter(user => user.status === "notCompleted");
        setArray(c);
      }
      Appo()
    }
    async function Dona() {
      const donation = await axios.get('http://127.0.0.1:5000/docdon');
      const allDonations = donation.data.message;
      const notCompletedDonations = allDonations.filter(donation => donation.status === "notCompleted");
      const completedDonations = allDonations.filter(donation => donation.status === "Completed");
      setDonations(notCompletedDonations);
      setCompletedDonations(completedDonations);
      setCount(notCompletedDonations.length);
  }
  Dona();
  }
 , [appointments,donations])
  return (<>
    <UserContext.Provider value={{ user, setUser, form, setForm, login, setLogin, registeredDoctors, setRegisteredDoctors, doctor, setDoctor, count, setCount, completedAppointments, setCompletedAppointments, completedDonations, setCompletedDonations, donationDetails, setDonationDetails, appointments, setAppointments, array, setArray,donations,setDonations }}>
      {children}
    </UserContext.Provider>
  </>)
}
export const useUser = () => {
  return useContext(UserContext)
}
