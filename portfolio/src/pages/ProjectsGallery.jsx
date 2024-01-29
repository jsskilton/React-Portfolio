import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    return (
        <div>
            <h2>List of My Past Projects</h2>
            <div>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}               
                        deployedAppURL={project.deployedAppURL} 
                        repositoryURL={project.repositoryURL}   
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsGallery;
