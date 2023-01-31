import React from 'react';
import styles from './Skill.module.css'

type SkillPropsType = {
    title: string,
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default Skill;