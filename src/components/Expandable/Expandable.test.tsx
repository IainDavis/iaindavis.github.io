import React from 'react';

import { render, screen } from '@testing-library/react';
import Expandable from '.';

test('renders the component', () => {
    render(<Expandable />);
    expect(screen.getByText('show more...')).toBeInTheDocument();
});