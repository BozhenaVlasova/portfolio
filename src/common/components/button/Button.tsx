import React, {useContext} from 'react';
import styles from "./Button.module.scss";
import {ThemeContext} from "./../../../App";

type ButtonType = {
    name: string
    href?: string
    target?: string
    onClick?: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    const {switchColor} = useContext(ThemeContext)

    return (
        <div className={styles.buttonCV} onClick={props.onClick}>
            <a href={props.href} download target={props.target}
               className={styles[switchColor]}>{props.name}</a>
        </div>
    );
};

export default Button;