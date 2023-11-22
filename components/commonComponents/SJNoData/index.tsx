import { twMerge } from 'tailwind-merge';

interface NoDataProps extends React.HTMLAttributes<HTMLDivElement> {
	message?: string;
}
/**
 * Message styling for a query that yield no result
 * @param message a custom message to display
 * If children are provided, children will be displayed, If not the message or default message will be displayed
 */
const SJNoData: React.FC<NoDataProps> = ({
	message = 'No result',
	className,
	children,
}) => {
	const classes = twMerge(
		'w-[100%] font-sans text-neutral-500  py-2 text-center text-md',
		className
	);
	return <div className={classes}>{children ? children : message}</div>;
};

export default SJNoData;
