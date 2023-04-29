import React, {useContext} from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import letter from "../images/letter.svg"
import {Fade} from "react-awesome-reveal";
import {ThemeContext} from "./../App";
import {FormFeedback} from "./FormFeedback";

const Contacts = () => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.contacts} ${styles[switchColor]}`} id={'contacts'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Fade direction={"up"} triggerOnce>
                    <Title name={'Contacts'}/>
                    <div className={styles.descriptionAndForm}>
                        <div
                            className={switchColor === 'dark' ? `${styles.description} ${styles.darkDescriptionAndForm}` : `${styles.description} ${styles.lightDescriptionAndForm}`}>
                            <span>Do you have suggestions?<br/>Write to me, don't be shy :)</span>
                            <p><img src={letter}/>dix20sept@gmail.com</p>
                        </div>
                        <div
                            className={switchColor === 'dark' ? `${styles.formAndButton} ${styles.darkDescriptionAndForm}` : `${styles.formAndButton} ${styles.lightDescriptionAndForm}`}>
                            <FormFeedback/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;