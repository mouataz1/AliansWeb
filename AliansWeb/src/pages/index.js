import React, { useState} from 'react'
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services';
import Footer from '../components/Footer';
import InfoSection2 from '../components/SignUp2/index2';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} /> 
          <HeroSection /> 
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Services />

         


          <InfoSection2 {...homeObjThree}  />
          
          <Footer />
        </>
    );
};

export default Home;
