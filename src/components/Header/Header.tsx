import * as React from 'react';
import { 
    HeaderContainer,
    TopBar,
    Logo,
    NavBar, 
    MenuList, 
    MenuItem, 
    Banner, 
    BannerTitle, 
    ColoredTitle, 
    BannerText, 
    Buttons,
    ButtonHire,
    ButtonWork,
    SocialMedia,
    SocialMediaTitle,
    Dribbble,
    Behance,
    Facebook,
    Twitter,
    HeadShot,
    PurpleBg
} from './style';
import { AiOutlineDribbble, AiOutlineBehance, AiOutlineTwitter, } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Photo from '../../assets/img/headshot.png';

const Header = () => {
    return(
        <HeaderContainer>
            <TopBar>
                <Logo href="#home">A.f</Logo>
                <NavBar>
                    <MenuList>
                        <MenuItem><a href="#about">About</a></MenuItem>
                        <MenuItem><a href="#services">Services</a></MenuItem>
                        <MenuItem><a href="#work">Works</a></MenuItem>
                        <MenuItem><a href="#contact">Contact</a></MenuItem>
                    </MenuList>
                </NavBar>
            </TopBar>
            <Banner>
                <BannerTitle>Hello, I’m John, a <ColoredTitle>Software Engineer.</ColoredTitle></BannerTitle>
                <BannerText>Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</BannerText>
                <Buttons>
                    <ButtonHire><a href="#h">Hire me</a></ButtonHire>
                    <ButtonWork><a href="#v">View work</a></ButtonWork>
                </Buttons>
                <SocialMedia>
                    <SocialMediaTitle>Follow me on</SocialMediaTitle>
                    <Dribbble><AiOutlineDribbble size={20} /></Dribbble>
                    <Behance><AiOutlineBehance size={20} /></Behance>
                    <Facebook><FaFacebookF size={20} /></Facebook>
                    <Twitter><AiOutlineTwitter size={20} /></Twitter>
                </SocialMedia>
            </Banner>
            <HeadShot src={Photo} alt="" />
            <PurpleBg />
        </HeaderContainer>
    )
}

export default Header;