import React, {useContext} from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import {projects} from "./MyProjects";
import {Fade} from "react-awesome-reveal";
import {ThemeContext} from "./../App";

const Projects = () => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.projectsBlock} ${styles[switchColor]}`} id={'projects'}>
            <Fade direction={"up"} triggerOnce>
                <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                    <Title name={'My Projects'}/>
                    <div className={styles.projects}>
                        {projects.map(pr => <Project key={pr.id} name={pr.name} description={pr.description}
                                                     image={pr.image} gitUrl={pr.gitUrl}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;