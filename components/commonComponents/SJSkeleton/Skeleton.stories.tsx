import type { Meta, StoryObj } from '@storybook/react';

import { SJTextSkeleton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Skeleton/TextSkeleton',
	component: SJTextSkeleton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJTextSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	decorators: [(Story) => <div className="w-[500px] h-auto">{<Story />}</div>],

	args: {
		nbOfLines: 4,
	},
};
