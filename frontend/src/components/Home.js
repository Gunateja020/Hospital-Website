import Body from './Body';
import './Home.css';
import Footer from './Footer';
import Carsel from './Carsel';
import Navigation from './Navigation';
import Services from './Services';
import News from './News';
import { useUser } from './UserProvider';
function Home() {
  const {user,setUser}=useUser()
  return (
    <>
      <Navigation />
      <Carsel />
      <Services />
      <Body />
      <News />
      <Footer />
       
    </>
  );
}
export default Home;