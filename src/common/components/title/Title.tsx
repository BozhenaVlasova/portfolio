import React from 'react';
import styles from "./Title.module.css";

type TitleType = {
    name: string
}

const Title: React.FC<TitleType> = (props) => {
    return (
        <div className={styles.title}>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Title;