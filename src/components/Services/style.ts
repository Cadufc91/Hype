import styled from "styled-components";

export const ServiceContainer = styled.div`
    margin-top: 67px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 468px;
`;

export const ServiceTitle = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff;
`;

export const Divider1 = styled.span`
    width: 80px;
    height: 3px;
    background: #ED1CA6;
    border: 1px solid #ED1CA6;
    margin-bottom: 50px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 70%;
    height: 351px;
`;

export const Cards = styled.div`
    padding: 22px;
    width: 400px !important;
    background: #fff;
    margin-right: 24px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #ED1CA6;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const CardTitle = styled.h2`
    margin-top: 100px;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: 400;
`;

export const Divider2 = styled.span`
    width: 64px;
    height: 3px;
    background: #ED1CA6;
    border: 1px solid #ED1CA6;
    border-radius: 50px;
    opacity: 30%;
    z-index: 1;
    margin-bottom: 24px;
`;

export const CtaBtn = styled.p`
    display: none;
`;
