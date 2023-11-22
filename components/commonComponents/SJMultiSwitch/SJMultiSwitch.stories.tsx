import type { Meta, StoryObj } from '@storybook/react';
import SJMultiSwitch from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'MultiSwitch/MultiSwitch',
	component: SJMultiSwitch,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJMultiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		options: [
			{
				label: 'option1',
				onClick: () => {
					//eslint-disable-next-line no-console
					console.log('clicked option1');
				},
			},
			{
				label: 'option2',
				onClick: () => {
					//eslint-disable-next-line no-console
					console.log('clicked option2');
				},
			},
			{
				label: 'option3',
				onClick: () => {
					//eslint-disable-next-line no-console
					console.log('clicked option3');
				},
			},
		],
	},
};
