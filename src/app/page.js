import Navbar from "../components/Navbar/Navbar.jsx";
import Main from "../components/Main/Main.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import Footer from "@/Footer/Footer.jsx";
import Ourservices from "@/components/Ourservices/Ourservices.jsx";
import Team from "@/components/Team/Team.jsx";
import Ourclients from "../components/Ourclients/Ourclients.jsx";
import Tools from '../components/Tools/Tools.jsx';
import Deliver from "@/components/Deliver/Deliver.jsx";
import ITconsulting from "@/components/ITconsulting/ITconsulting.jsx";
import Optimization from "@/components/Optimization/Optimization.jsx";

export default function Home() {
  return (
  <>
   <Navbar />
   <Main />
   <Ourservices />  
   <Team /> 
   <Optimization />
   <Ourclients />
   <ITconsulting /> 
   {/* <Tools /> */}
   <Deliver />
   <Contact />
   <Footer />
  </>
  );
}
