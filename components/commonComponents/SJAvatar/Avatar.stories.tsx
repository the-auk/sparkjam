import type { Meta, StoryObj } from '@storybook/react';

import SJAvatar, { SJAvatarSize } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Avatar/Avatar',
	component: SJAvatar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		src: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd',
		size: SJAvatarSize.BASE,
	},
};

export const NoImg: Story = {
	args: {
		size: SJAvatarSize.BASE,
	},
};
