import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import Video_2 from "../videos/video-1.mp4";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video_2} autoPlay loop muted />
            <h1>A AVENTURA ESTÁ À ESPERA</h1>
            <p>De que estás à espera?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>COMEÇA AGORA</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    ASSISTIR TRAILER <i className='far fa-play-circle' /> 
                </Button>


            </div>
        </div>
    )
}

 export default HeroSection
