import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video1.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] =useState(false)
     
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video1/mp4' />
            </HeroBg> 
            <HeroContent>
            <HeroH1>AliansWeb</HeroH1>
            <HeroP>A web site created by me whith some alians 👽.</HeroP>
            <HeroP>I use this website to manage my studies stufs.</HeroP>
            <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}    
            </Button>    
            </HeroBtnWrapper>   
             </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
