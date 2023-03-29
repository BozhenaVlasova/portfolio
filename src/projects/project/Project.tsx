import React from 'react';
import styles from './Project.module.scss'

type WorkPropsType = {
    name: string,
    description: string,
    image: string,
    gitUrl: string
}

const Project = (props: WorkPropsType) => {
    return (
        <div className={styles.work} style={{backgroundImage: "url("+props.image+")"}}>
            <div className={styles.info}>
                <h5 className={styles.title}>{props.name}</h5>
                {/*<span className={styles.description}>{props.description}</span>*/}
            </div>
            <a href={props.gitUrl} className={styles.button} target={'_blank'}>Open</a>
        </div>
    );
};

export default Project;