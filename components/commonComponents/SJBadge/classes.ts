export enum SJBadgeSize {
	SM = 'sm',
	BASE = 'base',
	LG = 'lg',
}

export enum SJBadgeColorScheme {
	BLUE = 'blue',
	GREEN = 'green',
	NEUTRAL = 'neutral',
}

export enum SJBadgeVariant {
	SOLID = 'solid',
	OUTLINE = 'outline',
}

export const sjBadgeCommonClasses: string =
	'font-sans uppercase width-fit-content flex flex-row justify-center items-center height-auto rounded-full break-all';

export const sjBadgeSizeClasses: { [key in SJBadgeSize]: string } = {
	sm: 'h-5 px-2 py-1 gap-1.5',
	base: 'h-6 px-2 py-1 gap-2',
	lg: 'h-8 px-3 py-1 gap-2',
};

export const sjBadgeTextClasses: { [key in SJBadgeSize]: string } = {
	sm: 'text-xs ',
	base: 'text-sm ',
	lg: 'text-base ',
};

export const sjBadgeColorClasses: {
	[key in SJBadgeVariant]: { [key in SJBadgeColorScheme]: string };
} = {
	solid: {
		blue: 'bg-blue-500 text-blue-50',
		green: 'bg-green-600 text-green-50',
		neutral: 'bg-neutral-100 text-neutral-800',
	},
	outline: {
		blue: 'border border-blue-500 border text-blue-500',
		green: 'border border-green-600 border text-green-600',
		neutral: 'border border-neutral-100 text-neutral-800',
	},
};

export const sjBadgeButtonCommonClasses: string = '';

export const sjBadgeButtonSizeClasses: { [key in SJBadgeSize]: string } = {
	sm: 'h-3.5 w-3.5',
	base: 'h-4 w-4',
	lg: 'h-5 w-5',
};
