'use client';
import { BsPlusCircleFill, BsSearch } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import SJBadge from '../../../commonComponents/SJBadge';
import SJInput, { SJInputProps } from '../Input';
import { SJBadgeColorScheme } from '../../../commonComponents/SJBadge/classes';

/**
 * Extends SJInputProps with search results
 * The ...rest props are passed to the SJInput Component
 */
export interface SJSearchInputProps<T extends { id: string }>
	extends SJInputProps {
	/**
	 * Results must contain an id attribute
	 */
	searchResults: T[];
	/**
	 * Which attr of the T result to display in the results
	 * ! The value of the attribute must be a string or number
	 */
	resultDisplayAttrName: keyof T;
	onSelectResult(result: T): void;
	/**
	 * Classes to apply to the container of the input and the results
	 */
	containerClasses?: string;
	/**
	 * Classes to apply to the container of the list of results
	 */
	resultsContainerClasses?: string;
	/**
	 * Classes to apply to each result item
	 */
	resultItemStyle?: string;
}

const SJSearchInput = <T extends { id: string }>({
	searchResults: searchResults,
	onSelectResult,
	resultDisplayAttrName,
	containerClasses: containerClassesFromProps,
	resultsContainerClasses: resultsContainerClassesFromProps,
	resultItemStyle,
	iconLeft = BsSearch,
	...rest
}: SJSearchInputProps<T>) => {
	const containerClasses = twMerge('width-[100%]', containerClassesFromProps);
	const resultsContainerClasses = twMerge(
		'mt-2 width-[100%] flex flex-row flex-wrap gap-2',
		resultsContainerClassesFromProps
	);
	return (
		<div className={containerClasses}>
			<SJInput iconLeft={iconLeft} placeholder="Themes" {...rest} />

			<ul className={resultsContainerClasses}>
				{searchResults.map((result) => (
					<SJBadge
						key={result.id}
						onClick={() => onSelectResult(result)}
						iconRight={BsPlusCircleFill}
						containerClassName={resultItemStyle}
						colorScheme={SJBadgeColorScheme.BLUE}
					>
						{result[resultDisplayAttrName] as string}
					</SJBadge>
				))}
			</ul>
		</div>
	);
};

export default SJSearchInput;
