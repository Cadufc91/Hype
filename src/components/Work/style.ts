import styled from "styled-components";

export const WorkContainer = styled.section`
    height: 1247px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    max-width: 70%;
    margin-left: 15%;
`;

export const WorkTitle = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff
`;

export const Divider1 = styled.span`
    width: 80px;
    height: 3px;
    background: #ED1CA6;
    border: 1px solid #ED1CA6;
    margin-bottom: 50px;
`;

export const WorkCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CardItem = styled.div`
    background: #fff;
    margin-left: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    max-width: 30%;
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardInfo = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 24px;
`;

export const ProjectLink = styled.p`
    display: none;
`;

