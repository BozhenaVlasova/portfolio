import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title name={'My Projects'} />
                <div className={styles.projects}>
                    <Project name={'Проект 1'} description={'Краткое описание проекта'}/>
                    <Project name={'Проект 2'} description={'Краткое описание проекта'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;