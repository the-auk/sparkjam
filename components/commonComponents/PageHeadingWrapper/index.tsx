import { twMerge } from 'tailwind-merge';

const PageHeadingWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className: classNameFromProps,
	...rest
}) => {
	const classes = twMerge(
		'flex w-[100%] py-8 md:pt-12 md:pb-8',
		classNameFromProps
	);
	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
};

export default PageHeadingWrapper;
