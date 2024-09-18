import React, { PropsWithChildren,  useState } from 'react';
import styles from './Expandable.module.css';

export type ExpandablePropsType = {
    startExpanded?: boolean;
    expandPrompt?: string;
    collapsePrompt?: string;
}

const Expandable: React.FC<PropsWithChildren<ExpandablePropsType>> = ({
    startExpanded = false,
    expandPrompt = 'show more...',
    collapsePrompt = 'show less',
    children
}) => {
    const [isExpanded, setExpanded] = useState(startExpanded);

    const handleClickToggle = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div className={styles.container}>
            <div className={ `${styles.expandableBlock} ${isExpanded ? '' : styles.hidden}` }>
                {children}
            </div>
            <div className={ styles.toggle } onClick={() => handleClickToggle()}>
                {isExpanded ? collapsePrompt : expandPrompt }
            </div>
        </div>
    )
}

export default Expandable;