import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import {projects} from "./MyProjects";

const Projects = () => {
    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title name={'My Projects'} />
                <div className={styles.projects}>
                    {projects.map(pr => <Project key={pr.id} name={pr.name} description={pr.description} image={pr.image} gitUrl={pr.gitUrl}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;