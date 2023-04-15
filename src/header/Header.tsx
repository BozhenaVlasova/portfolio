import React, {useContext, useState} from 'react';
import styles from './Header.module.scss';
import telegram from '../images/messengers/telegram.svg';
import instagram from '../images/messengers/instagram.svg';
import github from '../images/messengers/github.svg';
import linkedin from '../images/messengers/linkedin.svg';
import logo from '../images/react.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faContactCard, faDatabase, faFolderOpen, faHomeUser, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import {ThemeContext} from "./../App";
import NavBurger from "./NavBurger";

const Header = () => {
    const {switchColor} = useContext(ThemeContext);
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const onClickBurger = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <>
            <NavBurger onClickBurger={onClickBurger}/>
            <header className={menuIsOpen
                    ? `${styles.header} ${styles.show} ${styles[switchColor]}`
                    : `${styles.header} ${styles[switchColor]}`}>
                <div className={switchColor==='dark' ? styles.h1Top : `${styles.h1Top} ${styles.h1TopColorLightTheme}`}>
                    <img className={styles.img} src={logo}/>
                    <h4>Bozhena</h4>
                </div>
                <div className={styles.pages}>
                    <Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={-50} duration={500}>
                        <FontAwesomeIcon icon={faHomeUser}/>
                        Home
                    </Link>
                    <Link activeClass={styles.active} to="aboutMe" spy={true} smooth={true} offset={-50} duration={500}>
                        <FontAwesomeIcon icon={faUser}/>
                        About Me
                    </Link>
                    <Link activeClass={styles.active} to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <FontAwesomeIcon icon={faDatabase}/>
                        Skills
                    </Link>
                    <Link activeClass={styles.active} to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <FontAwesomeIcon icon={faFolderOpen}/>
                        Projects
                    </Link>
                    <Link activeClass={styles.active} to="contacts" spy={true} smooth={true} offset={-50} duration={500}>
                        <FontAwesomeIcon icon={faContactCard}/>
                        Contacts
                    </Link>
                </div>
                <div className={styles.socialIcons}>
                    <a href={'https://t.me/bozhena_vl'} target={'_blank'}>
                        <img src={telegram} alt={'telegram'}/>
                    </a>
                    <a href={'https://www.instagram.com/_bozhena_v'} target={'_blank'}>
                        <img src={instagram} alt={'instagram'}/>
                    </a>
                    <a href={'https://github.com/BozhenaVlasova'} target={'_blank'}>
                        <img src={github} alt={'github'}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/bozhena-vlasova/'} target={'_blank'}>
                        <img src={linkedin} alt={'linkedin'}/>
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;