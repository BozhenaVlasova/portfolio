import React from 'react';
import styles from './Work.module.css'

type WorkPropsType = {
    name: string,
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.image}>
                <button className={styles.button}>Смотреть</button>
            </div>
            <div className={styles.description}>
                <p>{props.name}</p>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;