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
import Learning from '../../assets/img/learning1.png';
import Learning2 from '../../assets/img/learning2.png';
import Marketing from '../../assets/img/marketing.png';
import Blog from '../../assets/img/blog.png';
import Educare from '../../assets/img/educare.png';
import Blogy from '../../assets/img/blogy.png';
import { BsArrowRight } from 'react-icons/bs';

const Work = () => {
    return(
        <WorkContainer>
            <WorkTitle>My Selected Work</WorkTitle>
            <Divider1 />
            <WorkCards>
                <CardItem>
                    <CardImage src={Learning} alt="" />
                    <CardInfo>
                        <CardTitle>Eduguard - E-learning Website</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>
                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Learning2} alt="" />
                    <CardInfo>
                        <CardTitle>Eduguard E-learning Website</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Marketing} alt="" />
                    <CardInfo>
                        <CardTitle>Huma Marketing Agency</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Blog} alt="" />
                    <CardInfo>
                        <CardTitle>Beeryblog Blog Website</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20} />

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Educare} alt="" />
                    <CardInfo>
                        <CardTitle>Educare Elearning website</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardImage src={Blogy} alt="" />
                    <CardInfo>
                        <CardTitle>Blogy Blog Website</CardTitle>
                        <ProjectLink>View Project</ProjectLink>
                        <BsArrowRight size={20}/>

                    </CardInfo>
                </CardItem>
            </WorkCards>
        </WorkContainer>
    )
};

export default Work;