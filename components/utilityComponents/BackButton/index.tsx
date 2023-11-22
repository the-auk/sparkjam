'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { twMerge } from 'tailwind-merge';
import SJIconButton, {
	SJIconButtonProps,
} from '../../commonComponents/SJButton/SJIconButton';
import { SJButtonColorScheme } from '../../commonComponents/SJButton/helpers';

export type IconSJButtonPropsWithOptionalIcon = Omit<SJIconButtonProps, 'icon'>;

interface BackButtonProps extends IconSJButtonPropsWithOptionalIcon {
	containerClasses?: string;
	icon?: SJIconButtonProps['icon'];
	/**
	 *  By default back button uses native browser back, but you can send the user somewhere else.
	 */
	specificPath?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
	containerClasses: containerClassesFromProps,
	specificPath,
	...rest
}) => {
	const router = useRouter();
	const containerClasses = twMerge(
		'w-full h-16 flex justify-start items-center',
		containerClassesFromProps
	);

	const [isGoingBack, setIsGoingBack] = useState(false);

	const handleClick = useCallback(() => {
		setIsGoingBack(true);
		specificPath ? router.push(specificPath) : router.back();
	}, [router, specificPath]);

	return (
		<div className={containerClasses}>
			<SJIconButton
				icon={ImArrowLeft2}
				colorScheme={SJButtonColorScheme.NEUTRAL}
				onClick={handleClick}
				isLoading={isGoingBack}
				{...rest}
			/>
		</div>
	);
};

export default BackButton;
