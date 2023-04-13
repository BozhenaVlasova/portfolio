import React, {useContext} from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {skills} from "./MySkills";
import {Fade} from "react-awesome-reveal";
import {ThemeContext} from "./../App";


const Skills = () => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.skillsBlock} ${styles[switchColor]}`} id={'skills'}>
            <Fade direction={"up"} triggerOnce>
                <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                    <Title name={'My Skills'}/>
                    <div className={styles.skills}>
                        {skills.map(sk => <Skill key={sk.id} title={sk.title} image={sk.image}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;