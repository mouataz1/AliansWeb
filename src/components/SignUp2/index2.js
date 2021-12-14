import React from 'react';
//import { Button } from '../ButtonElement';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2,TextWrapper, TopLine,Heading,Subtitle,/*BtnWrap,*/ ImgWrap, Img } from '../InfoSection/InfoElements';
//import { NavBtn, NavBtnLink } from '../Navbar/NavbarElements';
import { NavBtn2, NavBtnLink2 } from './SignUpElements2';

const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, /*buttonLabel,*/ img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
           <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                
               <NavBtn2>
                    <NavBtnLink2 to='/signupform'>Sign Up</NavBtnLink2>
                </NavBtn2>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={img} alt={alt} />
            </ImgWrap>
            </Column2> 
            </InfoRow> 
                
            </InfoWrapper>   
           </InfoContainer>  
        </>
    );
};

export default InfoSection2;
