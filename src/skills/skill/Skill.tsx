import React, {useContext} from 'react';
import styles from './Skill.module.scss';
import {ThemeContext} from "../../App";

type SkillPropsType = {
    title: string,
    image: string
}

const Skill = (props: SkillPropsType) => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.skill} ${styles[switchColor]}`}>
            <div className={styles.icon}></div>
            <img src={props.image} alt={`${props.image}`}/>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;