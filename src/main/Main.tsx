import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

const Main = () => {
    return (
        <div className={styles.main} id={'home'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Fade direction={"up"} triggerOnce>
                    <div className={styles.text}>
                        <h6>Hello! I am</h6>
                        <h1>Bozhena Vlasova</h1>
                        <p>I Am <span className={styles.animated}>
                            <ReactTypingEffect text={"Front-end Developer"}
                                               speed={200}
                                               eraseSpeed={200}
                                               typingDelay={1500}
                                               eraseDelay={2000}/>
                        </span></p>

                        <Button name={'Dowloand CV'}/>
                    </div>
                </Fade>
                <Fade big triggerOnce>
                    <div className={styles.photo}></div>
                </Fade>
            </div>
        </div>
    );
};

export default Main;