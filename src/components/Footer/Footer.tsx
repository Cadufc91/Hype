import * as React from 'react';
import {
    FooterContainer,
    FooterImg,
    FooterText,
    Heart,
    ColoredText
} from './style';
import Hypesoft from '../../assets/img/hypesoft.png'

const Footer = () => {
    return(
        <FooterContainer>
            <FooterImg src={Hypesoft} alt="" />
            <FooterText>Made with <Heart>♥</Heart> por Carlos e <ColoredText>Hypesoft</ColoredText></FooterText>
        </FooterContainer>
    )
};

export default Footer;