import type { Meta, StoryObj } from '@storybook/react';

import { SJBadgeColorScheme, SJBadgeSize } from './classes';
import ClosableSJBadge from './ClosableSJBadge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'SJBadge/ClosableSJBadge',
	component: ClosableSJBadge,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof ClosableSJBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		children: 'ux design',
		colorScheme: SJBadgeColorScheme.BLUE,
		size: SJBadgeSize.BASE,
		onClose: () => alert('close'),
	},
};
