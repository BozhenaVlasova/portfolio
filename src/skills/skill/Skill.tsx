import React from 'react';
import styles from './Skill.module.css';

type SkillPropsType = {
    title: string,
    image: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <img src={props.image} alt={`${props.image}`}/>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;