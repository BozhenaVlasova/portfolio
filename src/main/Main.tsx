import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.text}>
                    <span>Hi There!</span>
                    <h1>I am Bozhena Vlasova</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;