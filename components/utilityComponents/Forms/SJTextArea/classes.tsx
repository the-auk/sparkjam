/*
Be mindful of the overlaps between conditional icon classes and the rest
There is no conflict as of now but this setup is prone to overlaps
*/

import { SJInputSize } from '../Input/classes';

export const labelSizeClasses: Record<SJInputSize, string> = {
	xs: 'text-xs ',
	sm: 'text-xs ',
	base: 'text-sm ',
};

export const inputContainerBaseClasses: string =
	'w-[100%] flex flex-col relative font-sans';

export const withIconInputSizeClasses: Record<SJInputSize, string> = {
	xs: 'pl-6',
	sm: 'pl-8',
	base: 'pl-10',
};

export const withoutIconInputSizeClasses: Record<SJInputSize, string> = {
	xs: 'pl-2',
	sm: 'pl-2',
	base: 'pl-2.5',
};

export const iconContainerCommonClasses: string =
	'absolute pointer-events-none flex flex-col justify-center items-center';

export const iconContainerConditionalClasses: Record<SJInputSize, string> = {
	xs: 'left-2 h-6',
	sm: 'left-2.5 h-8',
	base: 'left-3.5 h-10',
};

export const iconInvalidColorClasses: string =
	'peer-[.peer-sj]:peer-invalid:text-red-900';

export const inputCommonClasses: string =
	'peer peer-sj block border flex flex-row items-center justify-start w-[100%] h-auto font-sans font-normal border-neutral-300 focus:outline-none';

export const textAreaConditionalSizeClasses: Record<SJInputSize, string> = {
	xs: 'rounded-[2px] pr-2 py-2.5',
	sm: 'rounded-[4px] pr-2 py-2.5',
	base: 'rounded-[4px] pr-2.5 py-2.5',
};

export const conditionalTextSizeClasses: Record<SJInputSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
};

export const invalidityMessageBaseClasses: string =
	'text-red-500 hidden peer-[.peer-sj]:peer-[&:not(:placeholder-shown):invalid]:block';

export const invalidityMessageSizeClasses: Record<SJInputSize, string> = {
	xs: 'text-xs font-normal pt-1',
	sm: 'text-xs font-normal pt-1',
	base: 'text-sm font-normal pt-2',
};

export const loadingSpinnerClasses: string =
	'animate-spin animate-duration-[600ms]';
