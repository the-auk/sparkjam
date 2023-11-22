'use client';
import { ComponentType, HTMLAttributes, useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import SJButtonSpinner from '../SJButtonSpinner';
import {
	SJButtonSize,
	SJButtonVariant,
	SJButtonColorScheme,
	buttonSizeClasses,
	staticButtonColorClasses,
} from '../helpers';

export interface SJButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: SJButtonSize;
	variant?: SJButtonVariant;
	/**
	 * Color Schemes designed by our designer.
	 */
	colorScheme?: SJButtonColorScheme;
	/**
	 * This is a react-icon component. You can use any stateless function returning and image or svg. An helper class is provided to help you with box-sizing cutom icons.
	 */
	iconLeft?: ComponentType<IconBaseProps> | null;
	/**
	 * This is a react-icon component. You can use any stateless function returning and image or svg. An helper class is provided to help you with box-sizing cutom icons.
	 */
	iconRight?: ComponentType<IconBaseProps> | null;
	className?: HTMLAttributes<HTMLButtonElement>['className'];
	isLoading?: boolean;
	disabled?: boolean;
}

export type ButtonState = 'normal' | 'hover' | 'focus' | 'disabled';

const SJButton: React.FC<SJButtonProps> = ({
	children,
	className: classNameFromProps,
	isLoading,
	disabled,
	iconLeft: IconLeft,
	iconRight: IconRight,
	variant = SJButtonVariant.SOLID,
	colorScheme = SJButtonColorScheme.BLACK,
	size = SJButtonSize.BASE,
	...rest
}) => {
	const sharedButtonClasses =
		'cursor-pointer disabled:cursor-not-allowed rounded-full font-sans font-bold flex justify-center items-center text-left transition-all whitespace-nowrap';
	const buttonClasses = useMemo(() => {
		return twMerge(
			sharedButtonClasses,
			buttonSizeClasses[size],
			staticButtonColorClasses[variant][colorScheme],
			classNameFromProps
		);
	}, [size, variant, colorScheme, classNameFromProps]);

	return (
		<button className={buttonClasses} disabled={disabled} {...rest}>
			{IconLeft && !isLoading && <IconLeft />}
			{children}
			{IconRight && !isLoading && <IconRight />}
			{isLoading && <SJButtonSpinner />}
		</button>
	);
};

export default SJButton;
