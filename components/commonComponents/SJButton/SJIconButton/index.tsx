import { ComponentType, HTMLAttributes, useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import SJButtonSpinner from '../SJButtonSpinner';
import {
	SJButtonSize,
	SJButtonVariant,
	SJButtonColorScheme,
	iconButtonSizeClasses,
	staticButtonColorClasses,
} from '../helpers';

export interface SJIconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: SJButtonSize;
	variant?: SJButtonVariant;
	/**
	 * Color Schemes designed by our designer.
	 */
	colorScheme?: SJButtonColorScheme;
	icon: ComponentType<IconBaseProps>;
	className?: HTMLAttributes<HTMLButtonElement>['className'];
	isLoading?: boolean;
	disabled?: boolean;
}

const SJIconButton: React.FC<SJIconButtonProps> = ({
	className: classNameFromProps,
	variant = SJButtonVariant.SOLID,
	colorScheme = SJButtonColorScheme.BLACK,
	size = SJButtonSize.BASE,
	isLoading,
	disabled,
	icon: Icon,
	...rest
}) => {
	const baseClasses = useMemo(() => {
		return 'rounded-full flex items-center justify-center';
	}, []);

	const buttonClasses = useMemo(() => {
		return twMerge(
			baseClasses,
			iconButtonSizeClasses[size],
			staticButtonColorClasses[variant][colorScheme],
			classNameFromProps
		);
	}, [size, variant, colorScheme, classNameFromProps, baseClasses]);

	return (
		<button className={buttonClasses} disabled={disabled} {...rest}>
			{isLoading ? <SJButtonSpinner /> : <Icon />}
		</button>
	);
};

export default SJIconButton;
