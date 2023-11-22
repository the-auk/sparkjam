import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import {
	SJBadgeColorScheme,
	SJBadgeSize,
	SJBadgeVariant,
	sjBadgeButtonCommonClasses,
	sjBadgeButtonSizeClasses,
	sjBadgeColorClasses,
	sjBadgeCommonClasses,
	sjBadgeSizeClasses,
	sjBadgeTextClasses,
} from './classes';

export interface SJBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * This is a react-icon component. You can use any stateless function returning and image or svg. An helper class is provided to help you with box-sizing cutom icons.
	 * in this particular case the icon will be inside of a button and clickable provided an onClick function.
	 */
	iconRight?: ComponentType<IconBaseProps>;
	onClick?(): void;
	size?: SJBadgeSize;
	variant?: SJBadgeVariant;
	colorScheme?: SJBadgeColorScheme;
	/**
	 * className to add to the container
	 */
	containerClassName?: string;
}

const SJBadge: React.FC<SJBadgeProps> = ({
	iconRight: IconRight,
	onClick,
	size = SJBadgeSize.BASE,
	variant = SJBadgeVariant.SOLID,
	colorScheme = SJBadgeColorScheme.BLUE,
	containerClassName: containerClasseNameFromProps,
	children,
	...rest
}) => {
	const containerClasses = twMerge(
		sjBadgeCommonClasses,
		sjBadgeSizeClasses[size],
		sjBadgeTextClasses[size],
		sjBadgeColorClasses[variant][colorScheme],
		containerClasseNameFromProps
	);

	const buttonClasses = twMerge(
		sjBadgeButtonCommonClasses,
		sjBadgeButtonSizeClasses[size]
	);

	return (
		<div className={containerClasses} onClick={onClick} {...rest}>
			<span>{children}</span>

			{IconRight && (
				<button>
					<IconRight className={buttonClasses} />
				</button>
			)}
		</div>
	);
};

export default SJBadge;
