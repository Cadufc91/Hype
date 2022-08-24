import styled from 'styled-components';


export const HeaderContainer = styled.div`
    height: 1080px;
`;

export const TopBar = styled.div`
    height: 96px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-between;
    margin: 24px 300px;
    font-size: 14px;
`;

export const Logo = styled.a`
    padding: 12px 0;
    width: 72px;
    height: 48px;
    text-decoration: none;
    color: transparent;
    cursor: pointer;
`;

export const NavBar = styled.nav`
    width: 377px;
    height: 40px;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    
`;

export const MenuItem = styled.li`
    margin-right: 40px; 
        a {
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
        };
`;

export const Banner = styled.div`
    margin-left: 300px;
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

        a{
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
        }
`;

export const ButtonWork = styled.button`
    widht: 131px;
    height: 56px;
    padding: 0 32px;
    background: #fff;
    border: 1px solid #DFE3EB;
    border-radius: 5px;
        
        a{
            text-decoration: none;
            color: #242424;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
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
`;

export const Facebook = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    padding: 14px;
    margin-right: 12px;
    cursor: pointer;
`;

export const Twitter = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    padding: 14px;
    cursor: pointer;
`;

export const HeadShot = styled.img`
    position: absolute;
    top: 106px;
    left: 867px;
    z-index; -1;
`;

export const PurpleBg = styled.div`
    width: 724px;
    height: 1080px;
    background: #7D00FF;
    opacity: 60%;
    position: absolute;
    top: 0px;
    left: 1196px;
    z-index: -1;
`;