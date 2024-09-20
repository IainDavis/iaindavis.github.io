import React, { PropsWithChildren,  useEffect,  useState } from 'react';
import styles from './Expandable.module.css';

const DEFAULTS = {
    expandPrompt: 'show more...',
    collapsePrompt: 'show less',
}

export type ExpandablePropsType = {
    startExpanded?: boolean;
    expandPrompt?: string;
    collapsePrompt?: string;
}

const Expandable: React.FC<PropsWithChildren<ExpandablePropsType>> = ({
    startExpanded = false,
    expandPrompt,
    collapsePrompt,
    children
}) => {
    const [isExpanded, setExpanded] = useState(startExpanded);

    useEffect(() => {
        setExpanded(startExpanded);
    }, [startExpanded])

    const handleClickToggle = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div className={styles.container}>
            { isExpanded && (
                <div className={ styles.expandableBlock }>
                    {children}
                </div>
            )}
            <div className={ styles.toggle } onClick={() => handleClickToggle()}>
                { isExpanded
                    ? collapsePrompt || DEFAULTS.collapsePrompt
                    : expandPrompt || DEFAULTS.expandPrompt
                }
            </div>
        </div>
    )
}

export default Expandable;