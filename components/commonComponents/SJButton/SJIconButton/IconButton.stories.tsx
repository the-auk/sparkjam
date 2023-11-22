import type { Meta, StoryObj } from '@storybook/react';

import { SJButtonSize, SJButtonColorScheme } from '../helpers';
import SJIconButton from '.';
import { MdBatteryAlert } from 'react-icons/md';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Buttons/IconButton',
	component: SJIconButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		colorScheme: SJButtonColorScheme.BLACK,
		size: SJButtonSize.BASE,
		icon: MdBatteryAlert,
	},
};
