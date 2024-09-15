import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../../../../components/brand/Logo/Logo';

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '500px',
}

const paneStyle: React.CSSProperties = {
    width: '250px',
    height: '200px',
    padding: '2em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
}

const contraLightStyle: React.CSSProperties = {
    background: '#1f1f1f',
    color: '#ffffff',
}

const contraDarkStyle: React.CSSProperties = {
    background: '#ffffff',
    color: '#1f1f1f',
}

const wrapperStyle: React.CSSProperties = {
    margin: 'auto',
}

const render = (args: {variant?: string, hideBackground?: boolean}) => (
    <>
        <div style={containerStyle}>
            <div style={{...contraLightStyle, ...paneStyle}} data-theme="light">
                <h3>Light theme</h3>
                <div style={wrapperStyle}>
                    <Logo {...args}/>
                </div>
            </div>
            <div style={{...contraDarkStyle, ...paneStyle}} data-theme="dark">
                <h3>Dark theme</h3>
                <div style={wrapperStyle} >
                    <Logo {...args}/>
                </div>
            </div>
        </div>
    </>
);

const meta: Meta<typeof Logo> = {
    title: 'Brand/Logo',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        hideBackground: {
            control: 'boolean',
            description: 'Should the backing rectangle be hidden or shown?',
        },
        variant: {
            control: 'select',
            description: 'Which variant of the logo should be used (default "expanded")?',
            options: logoVariants
        }
    },
    component: Logo,
    render
} 
export default meta;

type Story = StoryObj<typeof Logo>

export const Default: Story = {
    name: 'Default (expanded) format',
    args: {}
};

export const NoBG: Story = {
    name: 'Default (expanded) format, no Background',
    args: {
        hideBackground: true
    }
}

export const Compact: Story = {
    name: 'Compact Format',
    args: {
        variant: 'compact',
    }
}

export const CompactNoBG: Story = {
    name: 'Compact format, no Background',
    args: {
        variant: 'compact',
        hideBackground: true
    }
}

export const CompactSquare: Story = {
    name: 'Compact-Square Format',
    args: {
        variant: 'compact-square',
    }
}

export const CompactSquareNoBG: Story = {
    name: 'Compact-Square Format: No Background',
    args: {
        variant: 'compact-square',
        hideBackground: true
    }
}