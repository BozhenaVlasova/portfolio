import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2>My Skills</h2>
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