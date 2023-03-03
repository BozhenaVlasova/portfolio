import React from 'react';
import styles from './Header.module.css';
import telegram from '../images/messengers/telegram.svg';
import instagram from '../images/messengers/instagram.svg';
import github from '../images/messengers/github.svg';
import linkedin from '../images/messengers/linkedin.svg';
import home from '../images/navigation/home.svg';
import skills from '../images/navigation/skills.svg';
import projects from '../images/navigation/projects.svg';
import contacts from '../images/navigation/contacts.svg';
import logo from '../images/react.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.h1Top}>
                <img className={styles.img} src={logo}/>
                <h4>Bozhena</h4>
            </div>
            <div className={styles.pages}>
                <a href={'#home'}><img src={home}/><span>Home</span></a>
                <a href={'#skills'}><img src={skills}/><span>Skills</span></a>
                <a href={'#projects'}><img src={projects}/><span>Projects</span></a>
                <a href={'#contacts'}><img src={contacts}/><span>Contacts</span></a>
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