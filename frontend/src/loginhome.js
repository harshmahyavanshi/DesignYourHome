import React from 'react'
import './components/App.css'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards';
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2';


function Home() {
    return (
        <>
            <Navbar2 />
            <HeroSection />  
            <Cards />
            <Footer />
            
        </>
    );
}


export default Home;