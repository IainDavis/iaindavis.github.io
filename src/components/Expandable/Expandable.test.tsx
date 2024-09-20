import React from 'react';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Expandable.stories';

import Expandable from './Expandable';

const { Default } = composeStories(stories);

test('renders the component', () => {
    render(<Expandable />);
    expect(screen.getByText('show more...')).toBeInTheDocument();
});

test('renders the Default story correctly', () => {
    render(
        <Default />
    );
    expect(screen.getByText('show more...')).toBeInTheDocument();
})