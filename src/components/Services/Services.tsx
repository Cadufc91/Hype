import * as React from 'react';
import {
    ServiceContainer,
    ServiceTitle,
    Divider1,
    CardsContainer,
    Cards,
    CardInfo,
    CardTitle,
    Divider2,
    CtaBtn,
}from './style';
import { BsArrowRight, BsBox, BsCode } from 'react-icons/bs';
import { FiLayers, FiColumns } from 'react-icons/fi';

const Services = () => {
    return(
        <ServiceContainer id='services'>
            <ServiceTitle>My Service</ServiceTitle>
            <Divider1 />
            <CardsContainer>
                <Cards>
                    <FiLayers size={40}/>
                    <CardInfo>
                        <CardTitle>UI/UX Design</CardTitle>
                        <Divider2 />
                        <CtaBtn>Discuss now</CtaBtn>
                        <BsArrowRight size={30} />
                    </CardInfo>
                </Cards>
                <Cards>
                    <BsBox  size={40}/>
                    <CardInfo>
                        <CardTitle>Product Design</CardTitle>
                        <Divider2 />
                        <CtaBtn>Discuss now</CtaBtn>
                        <BsArrowRight size={30} />

                    </CardInfo>
                </Cards>
                <Cards>
                    <FiColumns  size={40}/>
                    <CardInfo>
                        <CardTitle>Branding Design</CardTitle>
                        <Divider2 />
                        <CtaBtn>Discuss now</CtaBtn>
                        <BsArrowRight size={30} />

                    </CardInfo>
                </Cards>
                <Cards>
                    <BsCode  size={40}/>
                    <CardInfo>
                        <CardTitle>Front End Development</CardTitle>
                        <Divider2 />
                        <CtaBtn>Discuss now</CtaBtn>
                        <BsArrowRight size={30} />

                    </CardInfo>
                </Cards>
            </CardsContainer>
        </ServiceContainer>
    )
};

export default Services;