import React, {useState} from 'react';
import styles from './Header.module.scss';
import telegram from '../images/messengers/telegram.svg';
import instagram from '../images/messengers/instagram.svg';
import github from '../images/messengers/github.svg';
import linkedin from '../images/messengers/linkedin.svg';
import logo from '../images/react.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faContactCard, faDatabase, faFolderOpen, faHomeUser, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

const Header = () => {
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const onClickBurger = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <>
            <div className={`${styles.burgerNav}`}>
                <button className={styles.togglerMenuOpen} onClick={onClickBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <header className={menuIsOpen ? `${styles.header} ${styles.show}` : `${styles.header}`}>
                <div className={styles.h1Top}>
                    <img className={styles.img} src={logo}/>
                    <h4>Bozhena</h4>
                </div>
                <div className={styles.pages}>
                    <Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faHomeUser}/>
                        Home
                    </Link>
                    <Link activeClass={styles.active} to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faUser}/>
                        About Me
                    </Link>
                    <Link activeClass={styles.active} to="skills" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faDatabase}/>
                        Skills
                    </Link>
                    <Link activeClass={styles.active} to="projects" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faFolderOpen}/>
                        Projects
                    </Link>
                    <Link activeClass={styles.active} to="contacts" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faContactCard}/>
                        Contacts
                    </Link>
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
        </>
    );
};

export default Header;