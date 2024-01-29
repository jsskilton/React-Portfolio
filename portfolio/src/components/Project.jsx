import React from 'react';

function Project({ title, description, image, deployedAppURL, repositoryURL }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt={title} />
            <p>Deployed App: <a href={deployedAppURL} target="_blank" rel="noopener noreferrer">{deployedAppURL}</a></p>
            <p>Repository: <a href={repositoryURL} target="_blank" rel="noopener noreferrer">{repositoryURL}</a></p>
        </div>
    );
}

export default Project;
