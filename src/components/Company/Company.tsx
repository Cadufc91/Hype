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

export function Company () {
    return(
        <CompanyContainer>
            <CompanyText>Trabalhei com <ColoredText>289+</ColoredText> empresas ao redor do mundo.</CompanyText>
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
                    <BsArrowRight size={32}/>
                </LogoItem>
            </LogoContainer>
        </CompanyContainer>
    )
};

export default Company;