import * as React from 'react';
import {
    BannerContainer,
    CTA,
    ColoredText,
    HireBtn
} from './style';
import { BsArrowRight } from 'react-icons/bs';

export function Banner () {
    return(
        <BannerContainer>
            <CTA>Tem um projeto que quer tirar do papel? <br></br>Vamos criar algo incrível <ColoredText>juntos</ColoredText>.</CTA>
            <HireBtn><a href="mailto:fernandes.cadu@gmail.com">Contrate me </a><BsArrowRight size={24}/></HireBtn>
        </BannerContainer>
    )
};

export default Banner;