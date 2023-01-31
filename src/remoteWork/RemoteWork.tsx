import React from 'react';
import styles from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={styles.remoteWork}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button className={styles.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default RemoteWork;