import * as React from 'react';
import {
    AboutContainer,
    AboutImages,
    ComputerImg,
    InfoContainer,
    InfoHeading,
    InfoText,
    Experience,
    ContactBtn
} from './style';
import Computer from '../../assets/img/about1.png';
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
    return(
        <AboutContainer id='about'>
            <AboutImages>
                <ComputerImg src={Computer} alt="" />
            </AboutImages>
            <InfoContainer>
                <InfoHeading>Desenvolvendo sites e aplicativos com a melhor experiência do usuário.</InfoHeading>
                <InfoText>Minhas experiências anteriores trazems uma visão inovadora de quem já esteve do outro lado do desenvolvimento de sites/aplicativos podendo assim contribuir para uma melhor experiência de usuário e desenvolvimento de projetos para todos.</InfoText>
                <Experience>
                    <div>
                        <h3>1 </h3><span>Ano de <br></br>Experiência</span>
                    </div>
                    <div>
                        <h3>20+ </h3><span>Projetos <br></br>Concluídos</span>
                    </div>
                </Experience>
                <ContactBtn><a href="mailto:fernandes.cadu@gmail.com">Diga oi</a> <BsArrowRight size={30} /></ContactBtn>
            </InfoContainer>
        </AboutContainer>
    )
};

export default About;