import React, {useContext} from 'react';
import styles from "./Switch.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "./../App";

const Switch = () => {
    const {switchColor,onClickSwitch} = useContext(ThemeContext);
    return (
        <label
            className={`${styles.switch} ${styles[switchColor]}`}
            onClick={onClickSwitch}>
            <FontAwesomeIcon icon={faMoon} className={styles.moon}/>
        </label>
    );
};

export default Switch;