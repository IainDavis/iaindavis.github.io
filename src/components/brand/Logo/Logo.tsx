import React, { FC } from 'react'
import ExpandedGeneric from '../../../../static/img/logo/logo-expanded-generic.svg';
import ExpandedNoBGGeneric from '../../../../static/img/logo/logo-expanded-nobg-generic.svg'
import CompactGeneric from '../../../../static/img/logo/logo-compact-generic.svg';
import CompactSquareGeneric from '../../../../static/img/logo/logo-compact-square-generic.svg'
import CompactNoBGGeneric from '../../../../static/img/logo/logo-compact-nobg-generic.svg'
import styles from './Logo.module.css';

export type LogoPropsType = {
    variant?: 'compact' | 'compact-square' | 'expanded';
    hideBackground?: boolean
}

export const Expanded: FC = () => <ExpandedGeneric style={styles} />
export const ExpandedNoBG: FC = () =>  <ExpandedNoBGGeneric style={styles} />
export const Compact: FC = () => <CompactGeneric style={styles} />
export const CompactSquare: FC = () => <CompactSquareGeneric style={styles} />
export const CompactNoBG: FC = () => <CompactNoBGGeneric style={styles} />

export default ({
    variant = 'expanded',
    hideBackground = false
}) => {
    switch(variant) {
        case 'expanded':
            return hideBackground ? <ExpandedNoBG /> : <Expanded />;
        case 'compact':
            return hideBackground ? <CompactNoBG /> : <Compact />
        case 'compact-square':
            return hideBackground ? <CompactNoBG /> : <CompactSquare />
    }

}