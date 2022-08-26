import * as React from 'react';
import {
    CompanyContainer,
    CompanyText,
    ColoredText,
    LogoContainer,
    LogoItem,
    LogoImg,
} from './style';
import Youtube from '../../assets/img/youtube.png';
import Google from '../../assets/img/google.png';
import Adobe from '../../assets/img/adobe.png';
import Sketch from '../../assets/img/sketch.png';
import { BsArrowRight } from 'react-icons/bs';

const Company = () => {
    return(
        <CompanyContainer>
            <CompanyText>I worked with <ColoredText>289+</ColoredText> Companies all over the World.</CompanyText>
            <LogoContainer>
                <LogoItem>
                    <LogoImg src={Youtube} alt="" />
                </LogoItem>
                <LogoItem>
                    <LogoImg src={Google} alt="" />
                </LogoItem>
                <LogoItem>
                    <LogoImg src={Adobe} alt="" />
                </LogoItem>
                <LogoItem>
                    <LogoImg src={Sketch} alt="" />
                </LogoItem>
                <LogoItem>
                    <BsArrowRight />
                </LogoItem>
            </LogoContainer>
        </CompanyContainer>
    )
};

export default Company;