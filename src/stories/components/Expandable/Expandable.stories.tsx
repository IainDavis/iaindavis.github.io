import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MDXProvider } from '@mdx-js/react';
import Expandable from '../../../components/Expandable';
import type { ExpandablePropsType } from '../../../components/Expandable';
import Lorem from '../../../../.storybook/assets/mdx/lorem_ipsum.mdx'

const render = (args: ExpandablePropsType) => (
  <MDXProvider>
    <Expandable {...args}>
      <Lorem/>
    </Expandable>
  </MDXProvider>
)

const meta = {
  title: 'Custom Components/Expandable',
  component: Expandable,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (src: string) => src
          .replace(/^\s*$/g, '')
          .replace(/<MDXProvider>([\s\S]*?)<\/MDXProvider>/, '$1') 
          .replace(/__WEBPACK_DEFAULT_EXPORT__/g, 'Expandable')
          .replace(/MDXContent/g, "Lorem")
          .replace(/\n(  )/g, '\n') // repair indentation where the above adjustments have damaged it
      }
    }
  },
  argTypes: {},
  args: {},
  render
} satisfies Meta<typeof Expandable>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const PreExpanded: Story = {
  args: {
    startExpanded: true
  },
};

export const CustomExpandCollapsePrompt: Story = {
  name: "Customizable Expand/Collapse Prompts",
  args: {
    expandPrompt: 'Click for more details (customized expand prompt)',
    collapsePrompt: 'Hide details (customized collapse prompt)',
  },
}

export const Nested: Story = {
  name: "Nested Expandable Sections",
  render: (args, context) => (
    <MDXProvider>
      <Expandable startExpanded>
        <Lorem/>
        <Expandable startExpanded>
          Nested expanded content
        </Expandable>
      </Expandable>
    </MDXProvider>
  )
}

