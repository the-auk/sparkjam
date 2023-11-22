import { useDebounce } from '@/lib/utils/useDebounce';
import React, {
	ComponentType,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { ImSpinner3 } from 'react-icons/im';
import ReactTextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize';
import { twMerge } from 'tailwind-merge';
import {
	SJInputSize,
	inputBaseColorClasses,
	inputBlankColorClasses,
	inputDisabledColorClasses,
	inputFocusColorClasses,
	inputInvalidColorClasses,
	labelBaseClasses,
} from '../Input/classes';
import {
	conditionalTextSizeClasses,
	iconContainerCommonClasses,
	iconContainerConditionalClasses,
	iconInvalidColorClasses,
	inputCommonClasses,
	inputContainerBaseClasses,
	invalidityMessageBaseClasses,
	invalidityMessageSizeClasses,
	labelSizeClasses,
	loadingSpinnerClasses,
	textAreaConditionalSizeClasses,
	withIconInputSizeClasses,
	withoutIconInputSizeClasses,
} from './classes';

export interface SJTextAreaProps extends TextareaAutosizeProps {
	inputSize?: SJInputSize;
	label?: string;
	/**
	 * This is a react-icon component. You can use any stateless function returning and image or svg. An helper class is provided to help you with box-sizing cutom icons.
	 */
	iconLeft?: ComponentType<IconBaseProps>;
	isLoading?: boolean;
	InputContainerClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	containerClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	iconClasses?: React.SVGAttributes<SVGElement>['className'];
	invalidityMessage?: string | null;
	invalidityMessageClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	/**
	 * validation function on value change. If the function returns false, the input will be marked as invalid and display the invalidityMessage.
	 */
	validate?(value: string): boolean;
}

const DEFAULT_INVALIDITY_MESSAGE = 'Invalid input';

const SJTextArea = forwardRef<HTMLTextAreaElement, SJTextAreaProps>(
	(
		{
			inputSize = SJInputSize.BASE,
			label,
			iconLeft: IconLeft,
			isLoading,
			iconClasses: iconClassesFromProps,
			containerClasses: containerClassesFromProps,
			InputContainerClasses: inputContainerClassesFromProps,
			invalidityMessage = DEFAULT_INVALIDITY_MESSAGE,
			invalidityMessageClasses: invalidityMessageClassesFromProps,
			onChange,
			value,
			validate,
			className,
			minRows = 3,
			...rest
		},
		ref
	) => {
		const containerClasses = twMerge(
			inputContainerBaseClasses,
			inputContainerClassesFromProps
		);

		const iconDependantClasses = IconLeft
			? withIconInputSizeClasses[inputSize]
			: withoutIconInputSizeClasses[inputSize];

		const inputSizeClasses = twMerge(
			iconDependantClasses,
			inputCommonClasses,
			textAreaConditionalSizeClasses[inputSize],
			conditionalTextSizeClasses[inputSize]
		);

		const colorClasses = twMerge(
			inputBaseColorClasses,
			inputBlankColorClasses,
			inputFocusColorClasses,
			inputDisabledColorClasses,
			inputInvalidColorClasses
		);

		const textAreaClasses = twMerge(inputSizeClasses, colorClasses, className);

		const iconContainerClasses = twMerge(
			iconContainerCommonClasses,
			iconContainerConditionalClasses[inputSize],
			iconInvalidColorClasses
		);

		const iconClasses = twMerge(
			conditionalTextSizeClasses[inputSize],
			iconClassesFromProps
		);

		const loadingClasses = twMerge(iconClasses, loadingSpinnerClasses);

		const invalidityMessageClasses = twMerge(
			invalidityMessageBaseClasses,
			invalidityMessageSizeClasses[inputSize],
			invalidityMessageClassesFromProps
		);

		const debouncedInput = useDebounce(value, 500);

		const [isValid, setIsValid] = useState<boolean>(false);

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			onChange && onChange(e);
		};

		useEffect(() => {
			if (debouncedInput && validate) {
				if (validate(debouncedInput as string)) {
					setIsValid(true);
					localRef.current && localRef.current?.setCustomValidity('');
				} else {
					setIsValid(false);
					localRef.current &&
						localRef.current.setCustomValidity(
							invalidityMessage || DEFAULT_INVALIDITY_MESSAGE
						);
				}
			}
		}, [debouncedInput, validate, invalidityMessage]);

		const localRef = useRef<HTMLTextAreaElement>(null);
		useImperativeHandle(ref, () => localRef.current!);

		return (
			<div className={containerClassesFromProps}>
				{label && <SJInputLabel inputSize={inputSize} label={label} />}
				<div className={containerClasses}>
					<ReactTextareaAutosize
						className={textAreaClasses}
						ref={localRef}
						value={value}
						onChange={handleChange}
						minRows={minRows}
						{...rest}
					></ReactTextareaAutosize>

					{IconLeft && !isLoading && (
						<div className={iconContainerClasses}>
							<IconLeft className={iconClasses} />
						</div>
					)}
					{isLoading && (
						<div className={iconContainerClasses}>
							<ImSpinner3 className={loadingClasses} />
						</div>
					)}
					{!isValid && (
						<div className={invalidityMessageClasses}>{invalidityMessage}</div>
					)}
				</div>
			</div>
		);
	}
);

SJTextArea.displayName = 'SJInput';
export default SJTextArea;

export interface SJTextAreaLabelProps {
	label: string;
	inputSize?: SJInputSize;
}
const SJInputLabel: React.FC<SJTextAreaLabelProps> = ({
	label,
	inputSize = SJInputSize.BASE,
}) => {
	const labelClasses = twMerge(labelBaseClasses, labelSizeClasses[inputSize]);
	return <label className={labelClasses}>{label}</label>;
};
