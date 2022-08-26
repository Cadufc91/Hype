import styled from "styled-components";

export const TestimonialContainer = styled.section`
    max-width: 68%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 15%;
    margin-top: 220px;
    margin-bottom: 127px;
`;

export const TestimonialHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTitle = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 16px;
`;

export const Divider2 = styled.span`
    width: 80px;
    height: 3px;
    border: 1px solid #ED1CA6;
    background: #ED1CA6;
    border-radius: 3px;
    margin-bottom: 50px;
`;

export const FeedbackList = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FeedbackCards = styled.div`
    height: 411px;
    margin-right: 44px;
`;

export const FeedbackItem = styled.div`
    width: 312px;
    height: 100px;
    align-items: center;
    background: #fff;
    margin-bottom: 4px;
    display: flex;
    `;
    
export const Profile = styled.img`
    width: 52px;
    margin-right: 16px;
    height: 52px;
    margin-left: 24px;
    border-radius: 50%;
    background: #A5A5A5;
`;

export const CardInfo = styled.div`
    
`;

export const CardTitle = styled.h4`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: -10px;
`;

export const CardClient = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #A5A5A5;

    span{
        color: #ED1CA6;
    }
`;

export const FeedbackText = styled.div`
    height: 411px;
    background: #fff;
`;

export const Top = styled.div`
    padding: 52px 0 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TopText = styled.p`
    margin-left: 11px;
    font-size: 18px;
    font-weight: 400;
`;

export const RatingText = styled.p`
    padding: 0 50px 50px 50px;
    font-size: 22px;
`;