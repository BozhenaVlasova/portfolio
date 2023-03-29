import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {skills} from "./MySkills";


const Skills = () => {
    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title name={'My Skills'}/>
                <div className={styles.skills}>
                    {skills.map(sk => <Skill key={sk.id} title={sk.title} image={sk.image}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;