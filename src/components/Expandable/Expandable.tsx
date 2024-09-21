import React, { PropsWithChildren,  useEffect,  useState } from 'react';
import styles from './Expandable.module.css';
import getString from '../../strings/getString';

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
    const effectiveExpandPrompt = expandPrompt || getString('expandable-component-default-expand-prompt');
    const effectiveCollapsePrompt = collapsePrompt || getString('expandable-component-default-collapse-prompt');

    const [isExpanded, setExpanded] = useState(startExpanded);

    useEffect(() => {
        setExpanded(() => startExpanded);
    }, [startExpanded])

    const handleClickToggle = () => {
        setExpanded(currentlyExpanded => !currentlyExpanded);
    }

    return (
        <div className={styles.container}>
            { isExpanded && (
                <div className={ styles.expandableBlock }>
                    {children}
                </div>
            )}
            <div className={ styles.toggle } onClick={() => handleClickToggle()}>
                { isExpanded ? effectiveCollapsePrompt : effectiveExpandPrompt }
            </div>
        </div>
    )
}

export default Expandable;