import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.main} id={'home'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.text}>
                    <h6>Hello! I am</h6>
                    <h1>Bozhena Vlasova</h1>
                    <p>I Am Frontend <span>Developer</span></p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;