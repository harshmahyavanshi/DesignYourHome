import React from 'react'
import './components/App.css'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards';
import Footer from './components/Footer'
import Navbar from './components/Navbar';


function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />  
            <Cards />
            <Footer />
            
        </>
    );
}


export default Home;