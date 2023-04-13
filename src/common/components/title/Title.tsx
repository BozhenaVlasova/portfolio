import React, {useContext} from 'react';
import styles from "./Title.module.scss";
import {ThemeContext} from "./../../../App";

type TitleType = {
    name: string
}

const Title: React.FC<TitleType> = (props) => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.title} ${styles[switchColor]}`}>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Title;