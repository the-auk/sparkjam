import type { Meta, StoryObj } from '@storybook/react';

import { SJButtonSize, SJButtonColorScheme } from '../helpers';
import SJButton from '.';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Buttons/Button',
	component: SJButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		children: 'Click me',
		colorScheme: SJButtonColorScheme.BLACK,
		size: SJButtonSize.BASE,
	},
};

export const WithIcon: Story = {
	args: {
		children: 'Click me',
		colorScheme: SJButtonColorScheme.BLACK,
		size: SJButtonSize.BASE,
		iconRight: BsArrowUpRightSquareFill,
	},
};
