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
    Dribbble,
    Behance,
    Facebook,
    Instagram,
    Twitter,
    Youtube
} from './style';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiMapPin, FiMail, FiPhone, FiDribbble } from 'react-icons/fi';
import { AiOutlineBehance } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return(
        <ContactContainer>
            <InputContainer>
                <FormTitle>Let me know here.</FormTitle>
                <Form>
                    <FormTop>
                        <FullName type="text" placeholder='Full Name' />
                        <Email type="email" placeholder='Email address'/>
                    </FormTop>
                    <Subject type="text" placeholder='Subjects'/>
                    <TextArea className='message' placeholder='Message'></TextArea>
                </Form>
                <SubmiBtn>Send message <IoPaperPlaneOutline size={20}/></SubmiBtn>
            </InputContainer>
            <GitContainer>
                <ContactTitle>Get In Touch</ContactTitle>
                <ContactCards>
                    <ContactItem>
                        <FiMapPin size={32} color="#ED1CA6"/>
                        <ContactInfo>House #5, Street Number #98, brasilia-	70000-000, Brazil.</ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <FiMail size={32} color="#ED1CA6"/>
                        <ContactInfo>
                            albert.design@gmail.com
                            albert.flores@gmail.com
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
                        <Dribbble>
                            <FiDribbble size={20} />
                        </Dribbble>
                        <Behance>
                            <AiOutlineBehance size={20}/>
                        </Behance>
                        <Facebook>
                            <FaFacebookF size={20}/>
                        </Facebook>
                        <Twitter>
                            <FaTwitter size={20}/>
                        </Twitter>
                        <Instagram>
                            <FaInstagram size={20}/>
                        </Instagram>
                        <Youtube>
                            <FaYoutube size={20}/>
                        </Youtube>
                    </SocialMedia>
                </ContactCards>
            </GitContainer>
        </ContactContainer>
    )
};

export default Contact;