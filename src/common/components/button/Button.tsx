import React from 'react';
import styles from "../../../common/components/button/Button.module.css";

type ButtonType = {
    name: string
    href?: string
    target?: string
    download?: string
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <div className={styles.buttonCV}>
            <a href={props.href} download={props.download} target={props.target}>{props.name}</a>
        </div>
    );
};

export default Button;