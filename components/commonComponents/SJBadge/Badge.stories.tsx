import type { Meta, StoryObj } from '@storybook/react';

import { default as SJBadge } from '.';
import { SJBadgeColorScheme, SJBadgeSize, SJBadgeVariant } from './classes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'SJBadge/SJBadge',
	component: SJBadge,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		children: 'ux design',
		colorScheme: SJBadgeColorScheme.BLUE,
		size: SJBadgeSize.BASE,
		variant: SJBadgeVariant.SOLID,
	},
};

export const Outline: Story = {
	args: {
		children: 'ux design',
		colorScheme: SJBadgeColorScheme.BLUE,
		size: SJBadgeSize.BASE,
		variant: SJBadgeVariant.OUTLINE,
	},
};
