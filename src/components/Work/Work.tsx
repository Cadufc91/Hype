import * as React from 'react';
import { 
    WorkContainer,
    WorkTitle,
    Divider1,
    WorkCards,
    CardItem,
    CardImage,
    CardInfo,
    CardTitle,
    ProjectLink
} from './style';
import Projeto1 from '../../assets/img/proj1.jpg';
import Projeto2 from '../../assets/img/proj2.jpg';
import Projeto3 from '../../assets/img/proj3.jpg';
import Projeto4 from '../../assets/img/proj4.jpg';
import Projeto5 from '../../assets/img/proj5.jpg';
import Projeto6 from '../../assets/img/proj6.jpg';
import { BsArrowRight } from 'react-icons/bs';

const Work = () => {
    return(
        <WorkContainer id='work'>
            <WorkTitle>Meus Trabalhos</WorkTitle>
            <Divider1 />
            <WorkCards>
                <CardItem>
                    <CardImage src={Projeto1} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91/SPA">Site para um SPA</a></CardTitle>
                        <ProjectLink>Ver Projeto</ProjectLink>
                        <BsArrowRight size={20}/>
                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Projeto2} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91/controle-financeiro"> Controle Financeiro</a></CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Projeto3} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91/Plan-teste">Site desenvolvedora de software</a> </CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Projeto4} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91/Alura-Geek">E-commerce de games e consoles</a> </CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20} />

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Projeto5} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91">Landing page para captação de leads</a> </CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Projeto6} alt="" />
                    <CardInfo>
                        <CardTitle><a href="https://github.com/Cadufc91/Desafio-H">Landing page para venda de produtos</a></CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
            </WorkCards>
        </WorkContainer>
    )
};

export default Work;