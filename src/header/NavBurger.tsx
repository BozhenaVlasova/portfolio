import React, {useContext} from 'react';
import styles from "./NavBurger.module.scss";
import {ThemeContext} from "./../App";

type BurgerType = {
    onClickBurger: () => void
}

const NavBurger: React.FC<BurgerType> = (props) => {
    const {switchColor} = useContext(ThemeContext);
    return (
        <div className={`${styles.burgerNav} ${styles[switchColor]}`}>
            <button className={styles.togglerMenuOpen} onClick={props.onClickBurger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};

export default NavBurger;