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
    Github,
    LinkedIn,
    Facebook,
    Instagram,
    HeadShot,
    PurpleBg
} from './style';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Photo from '../../assets/img/perfil.png';

const Header = () => {
    return(
        <HeaderContainer>
            <TopBar>
                <Logo href="#home">A.f</Logo>
                <NavBar>
                    <MenuList>
                        <MenuItem><a href="#about">Sobre</a></MenuItem>
                        <MenuItem><a href="#services">Serviços</a></MenuItem>
                        <MenuItem><a href="#work">Trabalhos</a></MenuItem>
                        <MenuItem><a href="#contact">Contato</a></MenuItem>
                    </MenuList>
                </NavBar>
            </TopBar>
            <Banner>
                <BannerTitle>Olá, sou o Carlos,<ColoredTitle>Desenvolvedor Front End.</ColoredTitle></BannerTitle>
                <BannerText>Profissional com foco no client-side e na experiência do usuário. Utilizo diariamente ReactJS, React Native, Styled Components e Git nos projetos onde estou atuando. E também utilizei jQuery, JavaScript, HTML, CSS, TypeScript, NodeJS e outras tecnologias relacionadas ao Desenvolvimento Web.</BannerText>
                <Buttons>
                    <ButtonHire><a href="mailto:fernandes.cadu@gmail.com">Contrate me</a></ButtonHire>
                    <ButtonWork><a href="#work">Trabalhos</a></ButtonWork>
                </Buttons>
                <SocialMedia>
                    <SocialMediaTitle>Follow me on</SocialMediaTitle>
                    <Github><a href="https://github.com/Cadufc91"><AiOutlineGithub size={20} /></a></Github>
                    <LinkedIn><a href="https://www.linkedin.com/in/carloseduardo-fernandes/"><AiFillLinkedin size={20} /></a></LinkedIn>
                    <Facebook><a href="https://www.facebook.com/carloseduardo.fernandes.16"><FaFacebookF size={20} /></a></Facebook>
                    <Instagram><a href="https://www.instagram.com/cadufc"><AiOutlineInstagram size={20} /></a></Instagram>
                </SocialMedia>
            </Banner>
            <HeadShot src={Photo} alt="" />
            <PurpleBg />
        </HeaderContainer>
    )
}

export default Header;