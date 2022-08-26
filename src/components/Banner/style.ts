import styled from "styled-components";

export const BannerContainer = styled.section`
    margin-top: 69px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 68%;
    margin-left: 15%;
`;

export const CTA = styled.h3`
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    color: #fff;
`;

export const ColoredText = styled.span`
    color: #ED1CA6;
`;

export const HireBtn = styled.button`
    widht: 131px;
    height: 56px;
    padding: 0 32px;
    background: #7D00FF;
    margin-right: 16px;
    margin-bottom: 64px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #fff;

        a{
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
        }
`;