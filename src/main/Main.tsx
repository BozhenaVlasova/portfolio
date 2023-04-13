import React, {useContext} from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Button from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt';
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ThemeContext} from "./../App";

const Main = () => {
    const {switchColor,onClickSwitch} = useContext(ThemeContext);
    return (
        <div className={`${styles.main} ${styles[switchColor]}`} id={'home'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <label className={styles[switchColor]} onClick={onClickSwitch}>
                    <FontAwesomeIcon icon={faMoon} className={styles.moon}/>
                </label>
                <Fade direction={"up"} triggerOnce className={styles.text}>
                    <div>
                        <h6>Hello! I am</h6>
                        <h1>Bozhena Vlasova</h1>
                        <p>I Am <span className={styles.animated}>
                            <ReactTypingEffect text={"Front-end Developer"}
                                               speed={200}
                                               eraseSpeed={200}
                                               typingDelay={1500}
                                               eraseDelay={2000}/>
                        </span></p>

                        <Button name={'Dowloand CV'} href={'./CV_Bozhena_Vlasova.pdf'} download={'./CV_Bozhena_Vlasova.pdf'}/>
                    </div>
                </Fade>
                <Fade big triggerOnce className={styles.photo}>
                    <Tilt>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};

export default Main;