import * as React from 'react';
import { 
    ContactContainer,
    InputContainer,
    FormTitle,
    Form,
    FormTop,
    FullName,
    Email,
    Subject,
    TextArea,
    SubmiBtn,
    GitContainer,
    ContactTitle,
    ContactCards,
    ContactItem,
    ContactInfo,
    SocialMedia,
    Github,
    LinkedIn,
    Facebook,
    Instagram,
} from './style';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiMapPin, FiMail, FiPhone,  } from 'react-icons/fi';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export function Contact () {
    return(
        <ContactContainer id='contact'>
            <InputContainer>
                <FormTitle>Me mande uma mensagem aqui.</FormTitle>
                <Form>
                    <FormTop>
                        <FullName type="text" placeholder='Nome completo' />
                        <Email type="email" placeholder='Seu e-mail'/>
                    </FormTop>
                    <Subject type="text" placeholder='Assunto'/>
                    <TextArea className='message' placeholder='Mensagem'></TextArea>
                </Form>
                <SubmiBtn>Enviar Mensagem <IoPaperPlaneOutline size={20}/></SubmiBtn>
            </InputContainer>
            <GitContainer>
                <ContactTitle>Entre em contato</ContactTitle>
                <ContactCards>
                    <ContactItem>
                        <FiMapPin size={32} color="#ED1CA6"/>
                        <ContactInfo>Quissamã, Rio de Janeiro -	28735-000, Brazil.</ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <FiMail size={32} color="#ED1CA6"/>
                        <ContactInfo>
                            dev.cadu@gmail.com
                            cadu.dev@gmail.com
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <FiPhone size={24} color="#ED1CA6"/>
                        <ContactInfo>
                            +55 955 258 2699 <br></br>
                            +55 955 100 9449
                        </ContactInfo>
                    </ContactItem>
                    <SocialMedia>
                        <Github>
                            <AiOutlineGithub size={30} />
                        </Github>
                        <LinkedIn>
                            <AiFillLinkedin size={30}/>
                        </LinkedIn>
                        <Facebook>
                            <FaFacebookF size={30}/>
                        </Facebook>
                        <Instagram>
                            <FaInstagram size={30}/>
                        </Instagram>
                    </SocialMedia>
                </ContactCards>
            </GitContainer>
        </ContactContainer>
    )
};

export default Contact;