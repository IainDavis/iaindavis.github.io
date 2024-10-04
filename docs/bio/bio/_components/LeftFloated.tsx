import React, { FC, PropsWithChildren } from 'react'

const DEFAULT_WIDTH = '35%';

const leftFloatStyle: React.CSSProperties = {
    float: 'left',
    padding: '0.5em 3em 0 0',
}

type LeftFloatedPropsType = PropsWithChildren<{
    width?: string;
}>

const LeftFloated: FC<LeftFloatedPropsType> = ({width = DEFAULT_WIDTH, children}) => (
    <div style={{
        ...leftFloatStyle,
        width
    }}>{children}</div>
)

export default LeftFloated;