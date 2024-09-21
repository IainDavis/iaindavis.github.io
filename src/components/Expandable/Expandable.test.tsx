import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Expandable.stories';

import Expandable from './Expandable';

const {
    Default: DefaultStory,
    PreExpanded: PreExpandedStory,
    CustomExpandCollapsePrompt: CustomExpandCollapsePromptStory,
    Nested: NestedStory
} = composeStories(stories);

describe ('Expandable Component', () => {
    describe('Basic tests', () => {
        
        // Test default collapsed state and expanded on click
        it('should render collapsed by default and expand when clicked', () => {
            render(<Expandable startExpanded={false} expandPrompt="Expand" />);
            expect(screen.getByText('Expand')).toBeInTheDocument();
            fireEvent.click(screen.getByText('Expand'));
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        // Test the component renders expanded when startExpanded is true
        it('should render expanded by default if startExpanded is true', () => {
            render(<Expandable startExpanded={true} collapsePrompt="Collapse" />);
            expect(screen.getByText('Collapse')).toBeInTheDocument();
        });

        // Test collapsing after being expanded
        it('should collapse when clicked after being expanded', () => {
            render(<Expandable startExpanded={true} collapsePrompt="Collapse" />);
            fireEvent.click(screen.getByText('Collapse'));
            expect(screen.getByText('show more...')).toBeInTheDocument();
        });

        // Handle missing or empty props gracefully
        it('should handle empty prompts gracefully', () => {
            render(<Expandable startExpanded={false} expandPrompt="" collapsePrompt="" />);
            fireEvent.click(screen.getByText('show more...'));
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        it('should handle null prompts gracefully', () => {
            render(<Expandable startExpanded={false} expandPrompt={null} collapsePrompt={null} />);
            fireEvent.click(screen.getByText('show more...'));
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        it('should handle undefined prompts gracefully', () => {
            render(<Expandable startExpanded={false} />);
            fireEvent.click(screen.getByText('show more...'));
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        // Test large content performance
        it('should perform well with large content when expanding/collapsing', () => {
            const largeContent = Array(1000).fill('Content').join(' ');
            render(<Expandable>{largeContent}</Expandable>);
            fireEvent.click(screen.getByText('show more...'));
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        // Check dynamic state changes (props change during lifecycle)
        it('should update when startExpanded prop is changed dynamically', () => {
            const { rerender } = render(<Expandable startExpanded={false} />);
            expect(screen.queryByText('show less')).toBeNull();

            rerender(<Expandable startExpanded={true} />);
            expect(screen.getByText('show less')).toBeInTheDocument();
        });

        // Visual regression - check for UI changes in different states
        it('should maintain visual consistency between expanded and collapsed states', () => {
            const { asFragment, rerender } = render(<Expandable startExpanded={false} />);
            expect(asFragment()).toMatchSnapshot();

            rerender(<Expandable startExpanded={true} />);
            expect(asFragment()).toMatchSnapshot();
        });

        // Check responsiveness/media queries behavior
        it('should respond correctly to different screen sizes', () => {
            global.innerWidth = 500;
            render(<Expandable />);
            expect(screen.getByText('show more...')).toBeInTheDocument();

            global.innerWidth = 1024;
            fireEvent.resize(window);
            expect(screen.getByText('show more...')).toBeInTheDocument();
        });
    });

    describe('Expandable Component - Storybook Stories', () => {
        
        // Test for the "PreExpanded" story
        it('should render the "PreExpanded" story correctly', () => {
            render(<PreExpandedStory />);
            const content = screen.getByText(/exercitation ullamco laboris/i); // Replace with actual content from your story
            expect(content).toBeVisible();  // Content should be visible since it's pre-expanded
        });

        // Test for the "CustomExpandCollapsePrompt" story
        it('should render custom expand and collapse prompts in the "CustomExpandCollapsePrompt" story', () => {
            render(<CustomExpandCollapsePromptStory />);
            const expandButton = screen.getByText(/click for more details/i); // Custom expand prompt
            expect(expandButton).toBeInTheDocument();

            const content = screen.getByText(/exercitation ullamco laboris/i); // Replace with actual content from your story
            expect(content).not.toBeVisible();
            
            fireEvent.click(expandButton);  // Expand the content
            expect(content).toBeVisible();
            
            const collapseButton = screen.getByText(/hide details/i);  // Custom collapse prompt
            expect(collapseButton).toBeInTheDocument();
        });

        // Test for the "Default" story
        it('should render the "Default" story collapsed by default', () => {
            render(<DefaultStory />);
            const content = screen.queryByText(/exercitation ullamco laboris/i);  // Replace with actual content from your story
            expect(content).not.toBeVisible(); 
        });

        // Test for expanding the "Default" story
        it('should expand the "Default" story content when clicked', () => {
            render(<DefaultStory />);
            const expandButton = screen.getByText(/show more/i);  // Replace with the actual prompt from your story
            const content = screen.getByText(/exercitation ullamco laboris/i);  // Replace with actual content from your story

            expect(content).not.toBeVisible(); 
            fireEvent.click(expandButton);
            expect(content).toBeVisible(); 
        });
    });

    describe('Accessibility Tests', () => {
    const expandPrompt = 'Show more';
    const collapsePrompt = 'Show less';

    const renderWithContent = ({ startExpanded } = { startExpanded: false }) => render(
        <Expandable expandPrompt={expandPrompt} collapsePrompt={collapsePrompt} startExpanded={startExpanded}>
            <p>Expandable content</p>
        </Expandable>
    )

    it('should render with initial collapsed state', () => {
        renderWithContent({ startExpanded: false })
        screen.debug();

        const button = screen.getByRole('button', { name: expandPrompt });
        const expandableSection = screen.getByTestId("expandable-section");

        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(expandableSection).toHaveAttribute('hidden');
    });

    it('should expand and focus on content when clicked', () => {
        renderWithContent();

        const button = screen.getByRole('button', { name: expandPrompt });
        const expandableSection = screen.getByTestId("expandable-section");

        fireEvent.click(button);

        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(expandableSection).not.toHaveAttribute('hidden');
        expect(expandableSection).toHaveFocus();
    });

    it('should collapse and move focus back to the button', () => {
        renderWithContent({ startExpanded: true});

        const button = screen.getByRole('button', { name: collapsePrompt });
        const expandableSection = screen.getByTestId("expandable-section");

        fireEvent.click(button);

        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(expandableSection).toHaveAttribute('hidden');
        expect(button).toHaveFocus();
    });

    it('should start expanded if startExpanded is true', () => {
        renderWithContent({ startExpanded: true })

        const button = screen.getByRole('button', { name: collapsePrompt });
        const expandableSection = screen.getByTestId("expandable-section");

        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(expandableSection).not.toHaveAttribute('hidden');
    });
    });

})




        