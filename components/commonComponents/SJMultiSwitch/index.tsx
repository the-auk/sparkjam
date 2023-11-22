'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SJMultiSwitchOption {
	label: string;
	onClick(label?: string): void;
}

export interface SJMultiSwitchProps {
	options: SJMultiSwitchOption[];
	containerClasses?: HTMLDivElement['className'];
}

const SJMultiSwitch: React.FC<SJMultiSwitchProps> = ({
	options,
	containerClasses: containerClassesFromProps,
}) => {
	const [activeOptionLabel, setactiveOptionLabel] = useState(options[0].label);
	const containerClasses = twMerge(
		'flex rounded-full bg-neutral-300 p-2 font-sans text-sm h-10 w-fit',
		containerClassesFromProps
	);

	const handleSwitch = (option: SJMultiSwitchOption) => {
		setactiveOptionLabel(option.label);
		option.onClick(option.label);
	};

	return (
		<ul className={containerClasses}>
			{options.map((option: SJMultiSwitchOption, i) =>
				option.label === activeOptionLabel ? (
					<ActiveMultiSwitchOption
						key={i}
						label={option.label}
						onClick={() => handleSwitch(option)}
					/>
				) : (
					<InactiveMultiSwitchOption
						key={i}
						label={option.label}
						onClick={() => handleSwitch(option)}
					/>
				)
			)}
		</ul>
	);
};

const commonSwitchOptionClasses = 'flex-center no-wrap py-1 px-2 rounded-full';
const ActiveMultiSwitchOption: React.FC<SJMultiSwitchOption> = ({
	label,
	onClick,
}) => {
	const classes = twMerge(commonSwitchOptionClasses, 'bg-neutral-50 h-auto');
	return (
		<li className={classes} onClick={() => onClick()}>
			{label}
		</li>
	);
};

const InactiveMultiSwitchOption: React.FC<SJMultiSwitchOption> = ({
	label,
	onClick,
}) => {
	const classes = twMerge(commonSwitchOptionClasses, 'cursor-pointer');
	return (
		<li className={classes} onClick={() => onClick()}>
			{label}
		</li>
	);
};

export default SJMultiSwitch;
