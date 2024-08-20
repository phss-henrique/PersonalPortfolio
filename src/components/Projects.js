import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import LibrasLearn from "../assets/img/LibrasLearn.JPG"
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "LibrasLearn",
            description: "Aplicação feita para ensino de Libras de maneira Gamificada",
            imgUrl: LibrasLearn,
        },
    ]






return(
    <section className="project" id="project">
    
    
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({isVisible})=>
            <div className={isVisible ? "animate__animated animate__bounce": ""}>
                    <h2>Projetos</h2>
                    <p>Um pouco da minha experiência com programação através de algumas aplicações.</p>
                    
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="nav-pills mb-5 justify-content-center align items-center" id="pills-tab" >
                        <Nav.Item>
                            <Nav.Link eventKey="first">Primeira Aba</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>
                            <Nav.Link eventKey="second"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >
                            
                            </Nav.Link>
                        </Nav.Item>*/}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                               <ProjectCard
                                               key={index}
                                               {...project}
                                               />                       
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>           
        </Container>
            <img className="background-image-right" src={colorSharp2}></img>
    </section>
)
}