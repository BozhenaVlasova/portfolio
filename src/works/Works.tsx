import React from 'react';
import styles from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>
                <h2>My Works</h2>
                <div className={styles.works}>
                    <Work name={'Проект 1'} description={'Краткое описание проекта'}/>
                    <Work name={'Проект 2'} description={'Краткое описание проекта'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;