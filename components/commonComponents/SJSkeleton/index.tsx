import { twMerge } from 'tailwind-merge';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	animate?: boolean;
}

/**
 *
 * Skeleton utility class, can be used to replace a loading element.
 * You can add classnames to shape it.
 * The N.B. the css class "animate-skeleton" is available if you need more control.
 * @returns
 */
const SJSkeleton: React.FC<SkeletonProps> = ({
	className,
	children,
	animate = true,
}) => {
	return (
		<div
			className={twMerge(
				'w-[100%] h-[100%]',
				animate ? 'animate-skeleton' : 'no-animate-skeleton',
				className
			)}
		>
			{children}
		</div>
	);
};
export default SJSkeleton;

interface TextSkeletonProps extends SkeletonProps {
	nbOfLines?: number;
	itemClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}
export const SJTextSkeleton: React.FC<TextSkeletonProps> = ({
	className,
	itemClassName,
	animate = true,
	nbOfLines = 3,
}) => {
	const lines: JSX.Element[] = [];
	{
		for (let i = 0; i < nbOfLines; i++) {
			lines.push(
				<SJSkeleton
					key={i}
					className={twMerge('w-[100%] h-[1rem] mb-[0.5rem]', itemClassName)}
					animate={animate}
				/>
			);
		}
	}
	return (
		<div
			className={twMerge('w-[100%] h-auto [&>*:last-child]:w-[65%]', className)}
		>
			{lines}
		</div>
	);
};
