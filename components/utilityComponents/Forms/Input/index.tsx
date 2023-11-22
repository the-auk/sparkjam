import { useDebounce } from '@/lib/utils/useDebounce';
import {
	ComponentType,
	ReactNode,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { ImSpinner3 } from 'react-icons/im';
import { twMerge } from 'tailwind-merge';
import {
	SJInputSize,
	conditionalTextSizeClasses,
	iconContainerCommonClasses,
	iconContainerConditionalClasses,
	iconInvalidColorClasses,
	inputBaseColorClasses,
	inputBlankColorClasses,
	inputCommonClasses,
	inputConditionalSizeClasses,
	inputContainerBaseClasses,
	inputDisabledColorClasses,
	inputFocusColorClasses,
	inputInvalidColorClasses,
	invalidityMessageBaseClasses,
	invalidityMessageColorClasses,
	invalidityMessageSizeClasses,
	labelBaseClasses,
	labelSizeClasses,
	loadingSpinnerClasses,
	withIconInputSizeClasses,
	withoutIconInputSizeClasses,
} from './classes';

export interface SJInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	inputSize?: SJInputSize;
	label?: string;
	/**
	 * This is a react-icon component. You can use any stateless function returning and image or svg. An helper class is provided to help you with box-sizing cutom icons.
	 */
	iconLeft?: ComponentType<IconBaseProps>;
	isLoading?: boolean;
	inputContainerClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	containerClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	iconClasses?: React.SVGAttributes<SVGElement>['className'];
	invalidityMessage?: string | null;
	invalidityMessageClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
	/**
	 * validation function on value change. If the function returns false, the input will be marked as invalid and display the invalidityMessage.
	 * Please enforce type when creating your function as it is not enforced on this module.
	 */
	validate?(value: any): boolean;
}

const DEFAULT_INVALIDITY_MESSAGE = 'Invalid input';

const SJInput = forwardRef<HTMLInputElement, SJInputProps>(
	(
		{
			inputSize = SJInputSize.BASE,
			label,
			iconLeft: IconLeft,
			isLoading,
			iconClasses: iconClassesFromProps,
			containerClasses: containerClassesFromProps,
			inputContainerClasses: inputContainerClassesFromProps,
			invalidityMessage = DEFAULT_INVALIDITY_MESSAGE,
			invalidityMessageClasses: invalidityMessageClassesFromProps,
			onChange,
			value,
			validate,
			className,
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
			inputConditionalSizeClasses[inputSize],
			conditionalTextSizeClasses[inputSize]
		);

		const colorClasses = twMerge(
			inputBaseColorClasses,
			inputBlankColorClasses,
			inputFocusColorClasses,
			inputDisabledColorClasses,
			inputInvalidColorClasses
		);

		const inputClasses = twMerge(inputSizeClasses, colorClasses, className);

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
			invalidityMessageColorClasses,
			invalidityMessageBaseClasses,
			invalidityMessageSizeClasses[inputSize],
			invalidityMessageClassesFromProps
		);

		const debouncedValue = useDebounce(value, 500);

		const [isValid, setIsValid] = useState<boolean>(false);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(e);
		};

		useEffect(() => {
			if (debouncedValue && validate) {
				if (validate(debouncedValue)) {
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
		}, [debouncedValue, validate, invalidityMessage]);

		const localRef = useRef<HTMLInputElement>(null);
		useImperativeHandle(ref, () => localRef.current!);

		return (
			<div className={containerClassesFromProps}>
				{label && <SJInputLabel inputSize={inputSize} label={label} />}
				<div className={containerClasses}>
					<input
						className={inputClasses}
						ref={localRef}
						value={value}
						onChange={handleChange}
						{...rest}
					></input>

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

SJInput.displayName = 'SJInput';
export default SJInput;

export interface SJInputLabelProps {
	label: string;
	inputSize?: SJInputSize;
}
const SJInputLabel: React.FC<SJInputLabelProps> = ({
	label,
	inputSize = SJInputSize.BASE,
}) => {
	const labelClasses = twMerge(labelBaseClasses, labelSizeClasses[inputSize]);
	return <label className={labelClasses}>{label}</label>;
};

export type SJInputErrorMessageProps = {
	children: ReactNode;
	inputSize?: SJInputSize;
};

export const SJInputErrorMessage: React.FC<SJInputErrorMessageProps> = ({
	children,
	inputSize = SJInputSize.BASE,
	...rest
}) => {
	const invalidityMessageClasses = twMerge(
		invalidityMessageColorClasses,
		invalidityMessageSizeClasses[inputSize]
	);

	return (
		<div className={invalidityMessageClasses} {...rest}>
			{children}
		</div>
	);
};

export type SJInputErrorMessageProps2 = {
	children: ReactNode;
	inputSize?: SJInputSize;
};
