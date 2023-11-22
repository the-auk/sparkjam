import { HTMLAttributes } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import {
	SJButtonColorScheme,
	staticButtonColorClasses,
} from '../SJButton/helpers';
import SJSkeleton from '../SJSkeleton';
import changeImageSizeOnGoogleUrl, { avatarSizeClasses } from './helpers';

export enum SJAvatarSize {
	XS = 'xs',
	SM = 'sm',
	BASE = 'base',
	LG = 'lg',
	XL = 'xl',
}

export type SJAvatarProps = {
	src?: string | undefined | null;
	onClick?(): void;
	size?: SJAvatarSize;
	className?: HTMLAttributes<HTMLButtonElement>['className'];
	isLoading?: boolean;
	/**
	 * button colorScheme, only valid for solid variant, only valid when there is no img
	 */
	colorScheme?: SJButtonColorScheme;
	disableOnClickWhenNoImage?: boolean;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>;

const SJAvatar: React.FC<SJAvatarProps> = ({
	className: classNameFromProps,
	size = SJAvatarSize.BASE,
	isLoading,
	onClick,
	colorScheme = SJButtonColorScheme.NEUTRAL,
	disableOnClickWhenNoImage = false,
	src,
	...rest
}) => {
	const baseClasses =
		'overflow-hidden flex flex-col justify-center items-center';
	const classes = twMerge(
		staticButtonColorClasses['solid'][colorScheme],
		baseClasses,
		avatarSizeClasses[size],
		classNameFromProps
	);

	if (isLoading) {
		return (
			<div className={classes} onClick={onClick} {...rest}>
				<SJSkeleton />
			</div>
		);
	}

	if (!src) {
		return (
			<div
				className={classes}
				onClick={disableOnClickWhenNoImage ? undefined : onClick}
				{...rest}
			>
				<BsPersonFill className="w-[60%] h-[60%]" />
			</div>
		);
	}

	return (
		<div className={classes} onClick={onClick} {...rest}>
			<img
				src={changeImageSizeOnGoogleUrl({ src, newSize: 256 }) || undefined}
				alt="user's avatar"
				referrerPolicy="no-referrer"
				className="w-[100%] h-[100%] object-center object-cover"
			/>
		</div>
	);
};

export default SJAvatar;
