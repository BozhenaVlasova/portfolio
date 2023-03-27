import React from 'react';
import styles from './Header.module.css';
import telegram from '../images/messengers/telegram.svg';
import instagram from '../images/messengers/instagram.svg';
import github from '../images/messengers/github.svg';
import linkedin from '../images/messengers/linkedin.svg';
import logo from '../images/react.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faContactCard, faDatabase, faFolderOpen, faHomeUser, faUser} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.mobHeader} ${styles.menuOpen}`}>
                <button className={styles.togglerMenuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={styles.h1Top}>
                <img className={styles.img} src={logo}/>
                <h4>Bozhena</h4>
            </div>
            <div className={styles.pages}>
                    <a href={'#home'}><FontAwesomeIcon icon={faHomeUser}/><span>Home</span></a>
                    <a href={'#aboutMe'}><FontAwesomeIcon icon={faUser}/><span>About Me</span></a>
                    <a href={'#skills'} className={styles.active}><FontAwesomeIcon icon={faDatabase}/><span>Skills</span></a>
                    <a href={'#projects'} className={styles.active}><FontAwesomeIcon icon={faFolderOpen}/><span>Projects</span></a>
                    <a href={'#contacts'} className={styles.active}><FontAwesomeIcon icon={faContactCard}/><span>Contacts</span></a>
            </div>
            <div className={styles.socialIcons}>
                <a href={'https://t.me/bozhena_vl'} target={'_blank'}>
                    <img src={telegram} alt={'telegram'}/>
                </a>
                <a href={'https://www.instagram.com'} target={'_blank'}>
                    <img src={instagram} alt={'instagram'}/>
                </a>
                <a href={'https://github.com/BozhenaVlasova'} target={'_blank'}>
                    <img src={github} alt={'github'}/>
                </a>
                <a href={'#'} target={'_blank'}>
                    <img src={linkedin} alt={'linkedin'}/>
                </a>
            </div>
        </header>
    );
};

export default Header;