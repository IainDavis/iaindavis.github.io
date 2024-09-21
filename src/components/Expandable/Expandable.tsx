import React, { KeyboardEventHandler, MouseEventHandler, PropsWithChildren,  useEffect,  useId,  useRef,  useState } from 'react';
import styles from './Expandable.module.css';
import getString from '../../strings/getString';

// let expandableCounter = 0; // unique ID suffix for aria components

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
    const idDiscriminator = useId();

    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    const effectiveExpandPrompt = expandPrompt || getString('expandable-component-default-expand-prompt');
    const effectiveCollapsePrompt = collapsePrompt || getString('expandable-component-default-collapse-prompt');

    const [isExpanded, setExpanded] = useState(startExpanded);

    useEffect(() => {
        setExpanded(() => startExpanded);
    }, [startExpanded])

    useEffect(() => {
        if(isExpanded) { contentRef.current.focus(); }
        else { buttonRef.current.focus(); }
    })

    const toggleExpanded = () => setExpanded(prevExpanded => !prevExpanded);

    const handleClick: MouseEventHandler = (e) => {
        toggleExpanded();
    }

    const handleKeyDown: KeyboardEventHandler = (e) => {
        if(['Enter', ' '].includes(e.key)) {
            e.preventDefault();
            toggleExpanded();
        }
    }

    return (
        <div className={styles.container}>
            <div
                ref={contentRef}
                tabIndex={isExpanded ? 0 : 1}
                data-testid={`expandable-section-${idDiscriminator}`}
                id={`expandable-section-${idDiscriminator}`}
                className={ styles.expandableBlock }
                hidden={!isExpanded}
            >
                {children}
            </div>
            <button
                ref={buttonRef}
                tabIndex={0}
                className={styles.toggle}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                aria-expanded={isExpanded}
                aria-controls={`expandable-section-toggle-${idDiscriminator}`}
            >
                { isExpanded ? effectiveCollapsePrompt : effectiveExpandPrompt }
            </button>
        </div>
    )
}

export default Expandable;