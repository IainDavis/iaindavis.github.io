import React, { FC, PropsWithChildren } from 'react'

const DEFAULT_WIDTH = '35%';

const rightFloatStyle: React.CSSProperties = {
    float: 'right',
    padding: '1em 0 0 3em',
}

type RightFloatedPropsType = PropsWithChildren<{
    width?: string;
}>

const RightFloated: FC<RightFloatedPropsType> = ({width = DEFAULT_WIDTH, children}) => (
    <div style={{
        ...rightFloatStyle,
        width
    }}>{children}</div>
)

export default RightFloated;