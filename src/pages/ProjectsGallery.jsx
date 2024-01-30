import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import projects from '../data/projects.json';
import project1 from '../data/images/project-1.png';
import project2 from '../data/images/project-2.png';
import project3 from '../data/images/project-3.png';
import project4 from '../data/images/project-4.png';
import project5 from '../data/images/project-5.png';
import project6 from '../data/images/project-6.png';
import projectsBackground from '../data/images/projects-background.jpg';

function ProjectsGallery() {
    const allImages = [project1, project2, project3, project4, project5, project6]
    return (
        <div style={{ backgroundImage: `url(${projectsBackground})`, backgroundSize: 'cover' }}>
            <div style={{ height: '70px' }}>
            </div>
            <div>
                <Container>
                    <div style={{ backgroundColor: 'rgba(45,60,80, 0.6)', padding: '10px', color:'white', borderRadius: '5px', display: 'inline-block' }}>
                        <h2 className='mb-0'>List of My Past Projects</h2>
                    </div>
                    <div style={{marginBottom:'20px'}}></div>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {projects.map((project, i) => (
                            <Col key={project.id}>
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    image={allImages[i]}
                                    deployedAppURL={project.deployedAppURL}
                                    repositoryURL={project.repositoryURL}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default ProjectsGallery;
