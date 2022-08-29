import * as React from 'react';
import {
    AboutContainer,
    AboutImages,
    ComputerImg,
    WhiteBg,
    InfoContainer,
    InfoHeading,
    InfoText,
    Experience,
    ContactBtn
} from './style';
import Computer from '../../assets/img/about.png';
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
    return(
        <AboutContainer id='about'>
            <AboutImages>
                <ComputerImg src={Computer} alt="" />
                <WhiteBg />
            </AboutImages>
            <InfoContainer>
                <InfoHeading>Software Engineer and Infrastructure specialist based in Brazil.</InfoHeading>
                <InfoText>Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.</InfoText>
                <Experience>
                    <div>
                        <h3>17+ </h3><span>Years of <br></br>Experience</span>
                    </div>
                    <div>
                        <h3>325+ </h3><span>Completed <br></br>Projects</span>
                    </div>
                </Experience>
                <ContactBtn>Say HI <BsArrowRight size={30} /></ContactBtn>
            </InfoContainer>
        </AboutContainer>
    )
};

export default About;