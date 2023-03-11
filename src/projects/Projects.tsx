import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import counter from "../images/projects/counter.png"

const Projects = () => {
    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title name={'My Projects'} />
                <div className={styles.projects}>
                    <Project name={'Counter'} description={'Краткое описание проекта'} image={counter} gitUrl={'https://github.com/BozhenaVlasova/counter2'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;