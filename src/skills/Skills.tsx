import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title name={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title='React' description='Подробное описание навыка.....'/>
                    <Skill title='Redux' description='Подробное описание навыка.....'/>
                    <Skill title='HTML/CSS' description='Подробное описание навыка.....'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;