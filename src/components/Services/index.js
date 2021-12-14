import React from 'react';
import Icon1 from '../../images/svg-6.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>What on the website?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Dayly stufs management</ServicesH2>
                    <ServicesP>I use this web site to manage my dayly activities as tracking my favorit currency, listenung to my prefered music..</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Manage my studies stufs</ServicesH2>
                    <ServicesP>I use this manage my school modules , check list, also i configure here my allert for exams date..</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Blog</ServicesH2>
                    <ServicesP>Manage my blog posts from a dashboard, also i manage my portfolio from here.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        
    )
}

export default Services
