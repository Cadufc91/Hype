import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 300px;
    height: 795px;
`;

export const AboutImages = styled.div`
    margin-left: 15%;
    margin-top: 100px;
    max-width: 30%;
`;

export const ComputerImg = styled.img`
    width: 100%;
`;

export const InfoContainer = styled.div`
    margin-left: 80px;
    margin-right: 5%;
    width: 672px;
    margin-top: 70px;
`;

export const InfoHeading = styled.h2`
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const InfoText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #A5A5A5;
    `;
    
export const Experience = styled.div`
    display: flex;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        h3 {
            font-size: 40px;
            font-weight: 400;
            color: #ED1CA6;
            margin-right: 16px;
        }

        span {
           
            font-size: 18px;
            color: #fff;
            margin-right: 50px;
        }
    }
`;

export const ContactBtn = styled.button`
    width: 162px;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 32px;
    text-transform: uppercase;
    background: #7D00FF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;