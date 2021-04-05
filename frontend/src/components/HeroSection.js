import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
        {  /* <video src='videos/video-1.mp4'
            type="video/mp4" 
            autoPlay loop muted></video> */ }
            <h1> GIVE IT A TRY! </h1>
            <p> what are you waiting for?</p>
            <div className='hero-btns'>
                <Button Link to="/signup"
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>

        
                <Button Link to ="/Watcht"
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                WATCH TRAILER <i className='far
                fa-play-circle' 
               />
                </Button >

            </div>
        </div>
    );
}

export default HeroSection;
