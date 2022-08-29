import styled from "styled-components";

export const ContactContainer = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    margin-bottom: 108px;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.div`
    background: #fff;
    max-width: 50%;
    width: 45%;
    margin-right: 24px;
    heigth: 536px;
    border-radius: 8px;
`;

export const FormTitle = styled.h3`
    font-size: 30px;
    font-weight: 500;
    margin-left: 48px;
`;

export const Form = styled.form`
    height: 288px;
    max-width: 87%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormTop = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    margin-left: 48px;
`;

export const FullName = styled.input`
    margin-right: 16px;
    height: 52px;
    border: 1px solid #DFE3EB;
    width: 50%;

    ::placeholder{
        font-size: 16px;
        font-weight: 400;
        color: #A5A5A5;
        padding-left: 20px;
    }
`;

export const Email = styled.input`
    height: 52px;
    border: 1px solid #DFE3EB;
    width: 50%;

    ::placeholder{
        font-size: 16px;
        font-weight: 400;
        color: #A5A5A5;
        padding-left: 20px;
    }
`;

export const Subject = styled.input`
    width: 100%;
    margin-left: 48px;
    margin-top: 16px;
    border: 1px solid #DFE3EB;
    height: 52px;

    ::placeholder{
        font-size: 16px;
        font-weight: 400;
        color: #A5A5A5;
        padding-left: 20px;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    margin-left: 48px;
    margin-top: 16px;
    height: 120px;
    border: 1px solid #DFE3EB;

    ::placeholder{
        font-size: 16px;
        font-weight: 400;
        color: #A5A5A5;
        padding-left: 20px;
    }
`;

export const SubmiBtn = styled.button`
    margin-top: 32px;
    margin-left: 48px;
    margin-bottom: 48px;
    width: 45%;
    height: 64px;
    text-transform: uppercase;
    padding-left: 32px;
    font-size: 16px;
    color: #fff;
    border: none;
    background: #7D00FF;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

export const GitContainer = styled.div`
    width: 27%;
    height: 536px;
    background: #fff;
    border-radius: 8px;
`;

export const ContactTitle = styled.h3`
    margin-left: 48px;
    font-size: 32px;
    font-weight: 500;
`;

export const ContactCards = styled.div``;

export const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 63%;
    margin-left: 48px;
    align-items: center;
`;

export const ContactInfo = styled.p`
    margin-left: 20px;
    font-size; 18px;
    height: 56px;
`;

export const SocialMedia = styled.div`
    max-width: 78%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-left: 48px;
    margin-top: 40px;
`;

export const Github = styled.button`
    border-radius: 50%;
    background: #DFE3EB;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #fff;
        background: #7D00FF;
    }
`;

export const LinkedIn = styled.button`
    border-radius: 50%;
    background: #DFE3EB;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #fff;
        background: #7D00FF;
    }
`;

export const Facebook = styled.button`
    border-radius: 50%;
    background: #DFE3EB;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #fff;
        background: #7D00FF;
    }
`;

export const Instagram = styled.button`
    border-radius: 50%;
    background: #DFE3EB;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #fff;
        background: #7D00FF;
    }
`;