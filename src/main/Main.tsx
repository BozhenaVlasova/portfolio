import React, {useContext} from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Button from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt';
import {ThemeContext} from "./../App";
import Switch from "./Switch";

const Main = () => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.main} ${styles[switchColor]}`} id={'home'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Switch />
                <Fade direction={"up"} triggerOnce className={styles.text}>
                    <div>
                        <h6>Hello! I am</h6>
                        <h1>Bozhena Vlasova</h1>
                        <span>I Am <span>
                            <ReactTypingEffect text={"Front-end Developer"}
                                               speed={200}
                                               eraseSpeed={200}
                                               typingDelay={1500}
                                               eraseDelay={2000}/>
                        </span></span>

                        <Button name={'Dowloand CV'}
                                href={'https://github.com/BozhenaVlasova/cv-folder/raw/main/CV_Bozhena_Vlasova.pdf'}/>
                    </div>
                </Fade>
                <Fade big triggerOnce className={styles.photo}>
                    <Tilt >
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};

export default Main;