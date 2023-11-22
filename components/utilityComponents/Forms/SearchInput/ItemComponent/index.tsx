import { twMerge } from 'tailwind-merge';

export interface ItemComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	displayText: string;
	containerClasses?: string;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
	displayText,
	containerClasses: containerClassesFromProps,
}) => {
	const containerClasses = twMerge(
		'ml-8 pl-2 pr-4 py-2 border-b border-neutral-200 text-neutral-600 cursor-pointer hover:bg-neutral-100',
		containerClassesFromProps
	);
	return <li className={containerClasses}>{displayText}</li>;
};

export default ItemComponent;
