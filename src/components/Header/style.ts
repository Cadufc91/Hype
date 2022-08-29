import styled from 'styled-components';


export const HeaderContainer = styled.div`
    height: 100vh;
`;

export const TopBar = styled.div`
    margin: 0 15%;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`;

export const Logo = styled.a`
    padding: 12px 0;
    height: 48px;
    text-decoration: none;
    color: transparent;
    cursor: pointer;
`;

export const NavBar = styled.nav`
    height: 40px;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

export const MenuItem = styled.li`
    margin-right: 40px; 
    transition: all 0.3s ease-in-out;
        a {
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;

        };
        
        :hover{
            text-decoration: underline;
            text-decoration-thickness: 2px;
            transform: scale(1.1);
        }
`;

export const Banner = styled.div`
    margin-left: 15%;
    margin-top: 238px;
    max-width: 100% !important;
`;

export const BannerTitle = styled.h1`
    width: 758px;
    height: 196px;
    font-size: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-weight: 400;
    position: relative;
    z-index: 1;
`;

export const ColoredTitle = styled.span`
    color: #7D00FF;
`;

export const BannerText = styled.p`
    width: 673px;
    margin-top: 32px;
    height: 96px;
    font-size: 20px;
    font-weight: 400;
    color: #A5A5A5;
    text-align: left;
    position: relative;
    z-index: 1;
`;

export const Buttons = styled.div`
    widht: 309px;
    height: 56px;
`;

export const ButtonHire = styled.button`
    widht: 131px;
    height: 56px;
    padding: 0 32px;
    background: #7D00FF;
    margin-right: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    a{
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;

    }

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;

export const ButtonWork = styled.button`
    widht: 131px;
    height: 56px;
    padding: 0 32px;
    background: #fff;
    border: 1px solid #DFE3EB;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
        
        a{
            text-decoration: none;
            color: #242424;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
        }

        :hover{
            transform: translateY(-10px);
            opacity: 0.5;
        }
`;

export const SocialMedia = styled.div`
    margin-top: 202px;
`;

export const SocialMediaTitle = styled.h4`
    width: 100px;
    height: 24px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
`;

export const Dribbble = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    padding: 14px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;

export const Behance = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 3px;
    padding: 14px;
    background: #7D00FF;
    color: #fff;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;

export const Facebook = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    padding: 14px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;

export const Twitter = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover{
        transform: translateY(-10px);
        opacity: 0.5;
    }
`;

export const HeadShot = styled.img`
    position: absolute;
    top: 106px;
    left: 55%;
    z-index; -1;
    width: 45%;
`;

export const PurpleBg = styled.div`
    width: 35%;
    height: 1025px;
    background: #7D00FF;
    opacity: 60%;
    position: absolute;
    top: 0px;
    left: 65%;
    z-index: -1;
`;