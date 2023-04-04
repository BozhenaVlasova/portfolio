import React from 'react';
import styles from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";

const AboutMe = () => {
    return (
        <div className={styles.meBlock} id={'aboutMe'}>
            <Fade direction={"up"} triggerOnce>
                <div className={`${styleContainer.container} ${styles.meContainer}`}>
                    <div className={styles.photo}></div>
                    <div className={styles.titleAndInfo}>
                        <Title name={'About Me.'}/>
                        <div className={styles.info}>
                            <h2>I'm a Freelancer Front-end Developer with over 1 year of experience.</h2>
                            <p>I'm a Freelancer Front-end Developer with over 1 year of experience. I'm from Minsk.
                                I code and create web elements for amazing people around the world. I like work with new
                                people. New people new Experiences.</p>
                        </div>
                        <Button name={'Contact Me'} href={'#contacts'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;