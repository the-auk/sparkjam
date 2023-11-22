'use client';
import { useState } from 'react';

export interface OnboardingScreenMinimumProps {
	next(): void;
	prev?: () => void;
}

export type OnboardingScreenProps<T> = OnboardingScreenMinimumProps & T;

export interface OnboardingSequenceProps {
	screens: React.ComponentType<OnboardingScreenProps<any>>[];
	onComplete?: () => any;
}

const OnboardingSequence: React.FC<OnboardingSequenceProps> = ({
	screens,
	onComplete,
}) => {
	const [currentScreen, setCurrentScreen] = useState<number>(0);

	const handleNext = () => {
		if (currentScreen < screens.length - 1) {
			setCurrentScreen(currentScreen + 1);
		} else {
			onComplete && onComplete();
		}
	};

	const handlePrev = () => {
		if (currentScreen > 0) {
			setCurrentScreen(currentScreen - 1);
		}
	};

	const Component = screens[currentScreen];

	return <Component next={handleNext} prev={handlePrev} />;
};

export default OnboardingSequence;
