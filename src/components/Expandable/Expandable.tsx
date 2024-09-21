import React, { PropsWithChildren,  useEffect,  useRef,  useState } from 'react';
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

    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        setExpanded(() => startExpanded);
    }, [startExpanded])

    useEffect(() => {
        if(isExpanded) { contentRef.current.focus(); }
        else { buttonRef.current.focus(); }
    })

    const handleClickToggle = () => {
        setExpanded(currentlyExpanded => !currentlyExpanded);
    }

    return (
        <div className={styles.container}>
            <div
                ref={contentRef}
                tabIndex={-1}
                data-testid="expandable-section"
                id="expandable-section"
                className={ styles.expandableBlock }
                hidden={!isExpanded}
            >
                {children}
            </div>
            <button
                ref={buttonRef}
                tabIndex={-1}
                className={styles.toggle}
                onClick={handleClickToggle}
                aria-expanded={isExpanded}
                aria-controls="expandable-section"
            >
                { isExpanded ? effectiveCollapsePrompt : effectiveExpandPrompt }
            </button>
        </div>
    )
}

export default Expandable;