import React from 'react';
import styles from './Project.module.css'

type WorkPropsType = {
    name: string,
    description: string
}

const Project = (props: WorkPropsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.image}>
                <a className={styles.button}>Посмотреть</a>
            </div>
            <p className={styles.title}>{props.name}</p>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default Project;