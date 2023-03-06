import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import letter from "../images/letter.svg"

const Contacts = () => {
    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Title name={'Contacts'}/>
                <div className={styles.descriptionAndForm}>
                    <div className={styles.description}>
                    <span>Do you have suggestions? Write to me, don't be shy :)</span>
                        <p><img src={letter}/>dix20sept@gmail.com</p>
                    </div>
                    <div className={styles.formAndButton}>
                        {/*<h4>Do you have suggestions? Write to me, don't be shy :)</h4>*/}
                        <form className={styles.form} action={'contacts.php'}>
                            <input placeholder={'Name*'} name={'name'} required/>
                            <input placeholder={'Email*'} name={'email'} required/>
                            <textarea placeholder={'Your message...*'} rows={7} cols={5} name={'message'} required/>
                        </form>
                        <Button name={'Send message'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;