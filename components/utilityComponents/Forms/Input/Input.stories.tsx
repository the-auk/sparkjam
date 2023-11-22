import type { Meta, StoryObj } from '@storybook/react';

import { BsEnvelopeFill } from 'react-icons/bs';
import { MdAssuredWorkload } from 'react-icons/md';
import SJInput from '.';
import { SJInputSize } from './classes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Input/Input',
	component: SJInput,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof SJInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],

	args: {
		label: 'label',
		placeholder: 'Placeholder',
		inputSize: SJInputSize.BASE,
	},
};

export const Email: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],

	args: {
		type: 'email',
		label: 'e-mail',
		placeholder: 'you@youremail.com',
		inputSize: SJInputSize.BASE,
		iconLeft: BsEnvelopeFill,
		invalidityMessage: 'It seems like this is not a valid email address',
	},
};

export const Disabled: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],

	args: {
		label: 'label',
		value: 'Hello disabled',
		inputSize: SJInputSize.BASE,
		disabled: true,
	},
};

export const Invalid: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],
	args: {
		label: 'label',
		value: 'invalidEmailAddress.com',
		inputSize: SJInputSize.BASE,
		type: 'email',
	},
};

export const InvalidWithIcon: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],

	args: {
		label: 'label',
		iconLeft: BsEnvelopeFill,
		value: 'invalidEmailAddress',
		invalidityMessage: 'This is not an email address',
		inputSize: SJInputSize.BASE,
		type: 'email',
	},
};

export const WithIcon: Story = {
	decorators: [(Input) => <div className="w-[500px] h-auto">{<Input />}</div>],

	args: {
		label: 'label',
		iconLeft: MdAssuredWorkload,
		value: 'Some sort of input',
		inputSize: SJInputSize.BASE,
	},
};
