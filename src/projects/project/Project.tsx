import React, {useState} from 'react';
import styles from './Project.module.scss'

type ProjectPropsType = {
    name: string,
    description: string,
    image: string,
    gitUrl: string
}

const Project = (props: ProjectPropsType) => {
    const [showButtons, setShowButtons] = useState(false);

    const handleMouseEnter = () => {
        setShowButtons(true);
    };

    const handleMouseLeave = () => {
        setShowButtons(false);
    };
    return (
        <div className={styles.project}
             style={{backgroundImage: "url(" + props.image + ")"}}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            {showButtons && (
                <>
                    <div className={styles.info}>
                        <h5 className={styles.title}>{props.name}</h5>
                        {/*<span className={styles.description}>{props.description}</span>*/}
                    </div>
                    <div className={styles.buttons}>
                        <a href={''} className={styles.button} target={'_blank'}>Show</a>
                        <a href={props.gitUrl} className={styles.button} target={'_blank'}>Github</a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Project;