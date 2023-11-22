import { useState } from 'react';

/**
 * handles setting a ui state to "on" for a short period of time
 * @param t the duration (ms) during which the state is true
 * @returns {isTempState, startTempState, setIsTempStateTrue, setIsTempStateFalse}
 * isTempState: the state that is true for a short period of time
 * startTempState: sets the state to true for a short period of time
 * setIsTempStateTrue: sets the state to true, can be used for fine control
 * setIsTempStateFalse: sets the state to false, can be used for fine control
 *
 * Suggested to rename these in context
 *
 * usage
 * ```typescript
 * Show a message when a save is successful
 * const { justSaved, handleJustSaved } = useTemporaryState(2000);
 *
 * return <div>{justSaved && <p>saved!</p>}</div>
 * ```
 */
const useTemporaryState = (
	t: number
): {
	isTemporaryState: boolean;
	startTemporaryState: () => void;
	setIsTemporaryStateTrue: (t?: number) => void;
	setIsTemporaryStateFalse: (t?: number) => void;
} => {
	const [isTemporaryState, setTemporaryState] = useState<boolean>(false);

	const startTemporaryState = () => {
		setTemporaryState(true);
		setTimeout(() => setTemporaryState(false), t);
	};
	const setIsTemporaryStateTrue = (t: number = 0) =>
		setTimeout(() => setTemporaryState(true), t);

	const setIsTemporaryStateFalse = (t: number = 0) =>
		setTimeout(() => setTemporaryState(false), t);

	return {
		isTemporaryState,
		startTemporaryState,
		setIsTemporaryStateTrue,
		setIsTemporaryStateFalse,
	};
};

export default useTemporaryState;
