import React from 'react';
import styles from './Project.module.css'

type WorkPropsType = {
    name: string,
    description: string,
    image: string,
    gitUrl: string
}

const Project = (props: WorkPropsType) => {
    return (
        <div className={styles.work}>
            <img src={props.image}/>
            <div className={styles.info}>
                <h5 className={styles.title}>{props.name}</h5>
                <span className={styles.description}>{props.description}</span>
            </div>
            {/*<div className={styles.image}>*/}
                {/*<a className={styles.button} href={props.gitUrl}>Посмотреть</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default Project;