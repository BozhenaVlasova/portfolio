import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2>Контакты</h2>
                <form className={styles.form} action={'contacts.php'}>
                    <input placeholder={'ФИО'} name={'fio'} required/>
                    <input placeholder={'+(___)__ ___-__-__'} name={'telephone'} required/>
                    <textarea rows={7} cols={5} name={'info'} required/>
                </form>
                <button className={styleContainer.button}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;