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

const Testimonial = () => {
    return(
        <TestimonialContainer>
            <TestimonialHeader>
                <ContainerTitle>Testimonial</ContainerTitle>
                <Divider2 />
            </TestimonialHeader>
            <FeedbackList>
                <FeedbackCards>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Sundar Pichai</CardTitle>
                            <CardClient>CEO & Founder of <span>Google</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>
                    <FeedbackItem>
                        <Profile />
                        <CardInfo>
                            <CardTitle>Shantanu Narayen</CardTitle>
                            <CardClient>CEO of <span>Adobe</span></CardClient>
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
                            <CardClient>CEO & Founder of <span>Slack</span></CardClient>
                        </CardInfo>
                    </FeedbackItem>

                </FeedbackCards>
                <FeedbackText>
                    <Top>
                        <AiFillStar size={23} color='#c5c502'/>
                        <TopText>5.0 Star Rating</TopText>
                    </Top>
                    <RatingText>“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”</RatingText>
                </FeedbackText>
            </FeedbackList>
        </TestimonialContainer>
    )
};

export default Testimonial;