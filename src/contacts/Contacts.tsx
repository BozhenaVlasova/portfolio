import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import letter from "../images/letter.svg"
import {Fade} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Fade direction={"up"} triggerOnce>
                    <Title name={'Contacts'}/>
                    <div className={styles.descriptionAndForm}>
                        <div className={styles.description}>
                            <span>Do you have suggestions?<br/>Write to me, don't be shy :)</span>
                            <p><img src={letter}/>dix20sept@gmail.com</p>
                        </div>
                        <div className={styles.formAndButton}>
                            <form className={styles.form} action={'contacts.php'}>
                                <input placeholder={'Name*'} name={'name'} required/>
                                <input placeholder={'Email*'} name={'email'} required/>
                                <textarea placeholder={'Your message...*'} rows={7} cols={5} name={'message'} required/>
                            </form>
                            <Button name={'Send message'}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;