import * as React from 'react';
import {
    TestimonialContainer,
    TestimonialHeader,
    ContainerTitle,
    Divider2,
    FeedbackList,
    FeedbackCards,
    FeedbackItem,
    Profile,
    CardInfo,
    CardTitle,
    CardClient,
    FeedbackText,
    Top,
    TopText,
    RatingText,
} from './style';
import { AiFillStar } from 'react-icons/ai';

export function Testimonial () {
    return(
        <TestimonialContainer>
            <TestimonialHeader>
                <ContainerTitle>Depoimentos</ContainerTitle>
                <Divider2 />
            </TestimonialHeader>
            <FeedbackList>
                <FeedbackCards>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Sundar Pichai</CardTitle>
                            <CardClient>CEO & Founder do <span>Google</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Shantanu Narayen</CardTitle>
                            <CardClient>CEO do <span>Adobe</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Noah Levin</CardTitle>
                            <CardClient>Director of Design, <span>Figma</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Stewart Butterfield</CardTitle>
                            <CardClient>CEO & Founder do <span>Slack</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>

                </FeedbackCards>
                <FeedbackText>
                    <Top>
                        <AiFillStar size={23} color='#c5c502'/>
                        <TopText>5.0 Avalia????o por entrelas</TopText>
                    </Top>
                    <RatingText>???Se voc?? est?? procurando algu??m que desafie seu pensamento de Front e realmente v?? a fundo no que ?? importante para os usu??rios, Carlos ?? o seu homem. Al??m disso, ele traz um n??vel de entusiasmo ao of??cio que ?? energizante para todos que trabalham com ele.???</RatingText>
                </FeedbackText>
            </FeedbackList>
        </TestimonialContainer>
    )
};

export default Testimonial;