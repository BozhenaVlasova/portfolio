import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/components/button/Button";

const Main = () => {
    return (
        <div className={styles.main} id={'home'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.text}>
                    <h6>Hello! I am</h6>
                    <h1>Bozhena Vlasova</h1>
                    <p>I Am Frontend <span className={styles.animated}>Developer</span></p>
                    <Button name={'Dowloand CV'} href={'cv'} target={'_blank'} download={'BozhenaVlasovaCV'}/>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;