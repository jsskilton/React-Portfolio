import React from 'react';
import { Card, Button } from 'react-bootstrap';
import projectsBackground from '../data/images/projects-background.jpg';


const Project = ({ title, description, image, deployedAppURL, repositoryURL }) => {
  const projectCardStyle = {
        height: '500px', 
        overflow: 'hidden', 
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10%', 
        marginRight: '10%',  
        marginBottom: '20px',

      };
    
    const textCardStyle = {
        display: 'flex', 
        justifyContent: 'space-between', 
        flexDirection: 'column', 
      

    }

    const imageContainerStyle = {
      flex: '1',
    };

    const imageStyle = {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      cursor: 'pointer',
      borderRadius: '0',
    };
  

    return (
    <Card style={projectCardStyle}>
      <Card.Body className="d-flex flex-column" style={{ backgroundColor: 'rgba(45,60,80, 1)', color: 'white' }}>
      <div>
          <Card.Title>{title}</Card.Title>
        </div>
      <div style={imageContainerStyle}>

        <Card.Img
          variant="top"
          src={image}
          style={imageStyle}
          onClick={() => window.open(deployedAppURL, '_blank')}
        />
      </div>
      
        
        <div className='mt-3' style={{ flex: 1 }}>
          <Card.Text>{description}</Card.Text>
        </div>
        <div className='mt-auto'>
          <Button variant="dark" href={deployedAppURL} target="_blank" style={{ fontSize: '14px' }}>
            View App
          </Button>
          <Button variant="secondary" href={repositoryURL} target="_blank" style={{ fontSize: '14px' }}>
            GitHub Repository
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;