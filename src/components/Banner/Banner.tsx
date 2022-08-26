import * as React from 'react';
import {
    BannerContainer,
    CTA,
    ColoredText,
    HireBtn
} from './style';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
    return(
        <BannerContainer>
            <CTA>Got a project in mind? Let's make<br></br> something awesome <ColoredText>together</ColoredText>.</CTA>
            <HireBtn><a href="#h">Hire me </a><BsArrowRight size={24}/></HireBtn>
        </BannerContainer>
    )
};

export default Banner;