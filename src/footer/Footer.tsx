import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h3>Божена Власова / Bozhena Vlasova</h3>
                <div className={styles.messengers}>
                    <div className={styles.messenger}></div>
                    <div className={styles.messenger}></div>
                    <div className={styles.messenger}></div>
                    <div className={styles.messenger}></div>
                </div>
                <h4>© 2023 Все права защищены :)</h4>
            </div>
        </div>
    );
};

export default Footer;