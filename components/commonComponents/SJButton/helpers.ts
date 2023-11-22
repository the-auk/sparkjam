export enum SJButtonColorScheme {
	BLACK = 'black',
	BLACK_SAND = 'blackSand',
	NEUTRAL = 'neutral',
	GREEN = 'green',
	WHITE_GREEN = 'whiteGreen',
	BLUE = 'blue',
	WHITE_BLUE = 'whiteBlue',
	WHITE_RED = 'whiteRed',
	RED = 'red',
	DISCOURAGED = 'discouraged',
}
export enum SJButtonVariant {
	SOLID = 'solid',
	OUTLINE = 'outline',
}

export enum SJButtonSize {
	XS = 'xs',
	SM = 'sm',
	BASE = 'base',
	LG = 'lg',
	XL = 'xl',
	'2XL' = '2xl',
}

export enum SJButtonState {
	NORMAL = 'normal',
	HOVER = 'hover',
	FOCUS = 'focus',
	DISABLED = 'disabled',
}

export const COLOR_SCHEMES_CONFIGS: {
	[key in SJButtonColorScheme]: {
		[key in SJButtonState]: { bg: string; text: string };
	};
} = {
	black: {
		normal: {
			bg: 'black',
			text: 'neutral-50',
		},
		hover: {
			bg: 'neutral-800',
			text: 'neutral-50',
		},
		focus: {
			bg: 'neutral-700',
			text: 'neutral-50',
		},
		disabled: {
			bg: 'neutral-400',
			text: 'neutral-200',
		},
	},
	blackSand: {
		normal: {
			bg: 'black',
			text: 'sand-200',
		},
		hover: {
			bg: 'neutral-800',
			text: 'sand-200',
		},
		focus: {
			bg: 'neutral-700',
			text: 'sand-100',
		},
		disabled: {
			bg: 'neutral-400',
			text: 'sand-200',
		},
	},
	neutral: {
		normal: {
			bg: 'neutral-100',
			text: 'neutral-500',
		},
		hover: {
			bg: 'neutral-50',
			text: 'neutral-600',
		},
		focus: {
			bg: 'neutral-200',
			text: 'neutral-600',
		},
		disabled: {
			bg: 'neutral-200',
			text: 'neutral-400',
		},
	},
	blue: {
		normal: {
			bg: 'blue-400',
			text: 'blue-50',
		},
		hover: {
			bg: 'blue-300',
			text: 'blue-50',
		},
		focus: {
			bg: 'blue-500',
			text: 'blue-100',
		},
		disabled: {
			bg: 'blue-400',
			text: 'blue-200',
		},
	},
	whiteBlue: {
		normal: {
			bg: 'blue-100',
			text: 'blue-500',
		},
		hover: {
			bg: 'blue-100',
			text: 'blue-500',
		},
		focus: {
			bg: 'blue-200',
			text: 'blue-600',
		},
		disabled: {
			bg: 'neutral-300',
			text: 'neutral-500',
		},
	},
	red: {
		normal: {
			bg: 'red-600',
			text: 'red-50',
		},
		hover: {
			bg: 'red-500',
			text: 'red-50',
		},
		focus: {
			bg: 'red-700',
			text: 'red-100',
		},
		disabled: {
			bg: 'neutral-500',
			text: 'neutral-300',
		},
	},
	whiteRed: {
		normal: {
			bg: 'red-50',
			text: 'red-600',
		},
		hover: {
			bg: 'red-100',
			text: 'red-600',
		},
		focus: {
			bg: 'red-200',
			text: 'red-700',
		},
		disabled: {
			bg: 'neutral-300',
			text: 'neutral-500',
		},
	},
	green: {
		normal: {
			bg: 'green-600',
			text: 'green-50',
		},
		hover: {
			bg: 'green-500',
			text: 'green-50',
		},
		focus: {
			bg: 'green-700',
			text: 'green-100',
		},
		disabled: {
			bg: 'neutral-400',
			text: 'neutral-200',
		},
	},
	whiteGreen: {
		normal: {
			bg: 'green-50',
			text: 'green-600',
		},
		hover: {
			bg: 'green-100',
			text: 'green-600',
		},
		focus: {
			bg: 'green-200',
			text: 'green-700',
		},
		disabled: {
			bg: 'neutral-300',
			text: 'neutral-500',
		},
	},
	discouraged: {
		normal: {
			bg: 'neutral-500',
			text: 'neutral-300',
		},
		hover: {
			bg: 'neutral-600',
			text: 'neutral-200',
		},
		focus: {
			bg: 'neutral-700',
			text: 'neutral-50',
		},
		disabled: {
			bg: 'neutral-400',
			text: 'neutral-200',
		},
	},
};

export const buttonSizeClasses: { [key in SJButtonSize]: string } = {
	xs: 'text-xs px-1.5 h-6 gap-1.5',
	sm: 'text-sm px-3 h-8 gap-2',
	base: 'text-base px-6 h-10 gap-2',
	lg: 'text-lg px-6 h-12 gap-2',
	xl: 'text-xl px-8 h-14 gap-3',
	'2xl': 'text-3xl px-10 h-20 gap-4',
};

/**
 * Classes for an icon within a button
 * useful for buttons using custom icons that are box-sized and not font-sized
 */
export const iconInButtonSizeClasses: { [key in SJButtonSize]: string } = {
	xs: 'h-3 w-3 ',
	sm: 'h-3.5 w-3.5 ',
	base: 'h-4 w-4 ',
	lg: 'h-4 w-4 ',
	xl: 'h-5 w-5 ',
	'2xl': 'h-8 w-8 ',
};

/** Classes for the button containing only the icon */
export const iconButtonSizeClasses: { [key in SJButtonSize]: string } = {
	xs: 'h-6 w-6 text-lg',
	sm: 'h-8 w-8 text-xl',
	base: 'h-10 w-10 text-2xl',
	lg: 'h-12 w-12 text-3xl',
	xl: 'h-14 w-14 text-3xl',
	'2xl': 'h-16 w-16 text-4xl',
};

/**
 * Hello there
 *
 * I prepared a lot of js function to generate color classes on the fly
 * Turns out that's not possible with tailwindcss
 * The functions are there if you want to use them to generate static classes in the future when colors change
 */

const genSolidColorSchemeClasses = (colorScheme: SJButtonColorScheme) => {
	let c = COLOR_SCHEMES_CONFIGS[colorScheme];
	return `bg-${c.normal.bg} text-${c.normal.text} hover:bg-${c.hover.bg} hover:text-${c.hover.text} focus:bg-${c.focus.bg} focus:text-${c.focus.text} disabled:bg-${c.disabled.bg} disabled:text-${c.disabled.text}`;
};

const genOutlineColorSchemeClasses = (colorScheme: SJButtonColorScheme) => {
	let c = COLOR_SCHEMES_CONFIGS[colorScheme];
	return `border border-${c.normal.bg} text-${c.normal.bg} hover:border-${c.hover.bg} hover:text-${c.hover.bg} focus:border-${c.focus.bg} focus:text-${c.focus.bg} disabled:border-${c.disabled.bg} disabled:text-${c.disabled.bg}`;
};

// Log this object to get the static classes in the console, copy the object and paste in place of the static obj below
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorSchemeClassesByVariantAndScheme: {
	[key in SJButtonVariant]: { [key in SJButtonColorScheme]: string };
} = {
	[SJButtonVariant.SOLID]: {
		...(Object.values(SJButtonColorScheme).reduce(
			(acc, curr) => ({
				...acc,
				[curr]: genSolidColorSchemeClasses(curr as SJButtonColorScheme),
			}),
			{}
		) as { [key in SJButtonColorScheme]: string }),
	},
	[SJButtonVariant.OUTLINE]: {
		...(Object.values(SJButtonColorScheme).reduce(
			(acc, curr) => ({
				...acc,
				[curr]: genOutlineColorSchemeClasses(curr as SJButtonColorScheme),
			}),
			{}
		) as { [key in SJButtonColorScheme]: string }),
	},
};

export const staticButtonColorClasses: {
	[key in SJButtonVariant]: { [key in SJButtonColorScheme]: string };
} = {
	solid: {
		black:
			'bg-black text-neutral-50 hover:bg-neutral-800 hover:text-neutral-50 focus:bg-neutral-700 focus:text-neutral-50 disabled:bg-neutral-400 disabled:text-neutral-200',
		blackSand:
			'bg-black text-sand-200 hover:bg-neutral-800 hover:text-sand-200 focus:bg-neutral-700 focus:text-sand-100 disabled:bg-neutral-400 disabled:text-sand-200',
		neutral:
			'bg-neutral-100 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-600 focus:bg-neutral-200 focus:text-neutral-600 disabled:bg-neutral-200 disabled:text-neutral-400',
		green:
			'bg-green-600 text-green-50 hover:bg-green-500 hover:text-green-50 focus:bg-green-700 focus:text-green-100 disabled:bg-neutral-400 disabled:text-neutral-200',
		whiteGreen:
			'bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-600 focus:bg-green-200 focus:text-green-700 disabled:bg-neutral-300 disabled:text-neutral-500',
		blue: 'bg-blue-400 text-blue-50 hover:bg-blue-300 hover:text-blue-50 focus:bg-blue-500 focus:text-blue-100 disabled:bg-blue-400 disabled:text-blue-200',
		whiteBlue:
			'bg-blue-100 text-blue-500 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-200 focus:text-blue-600 disabled:bg-neutral-300 disabled:text-neutral-500',
		whiteRed:
			'bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-600 focus:bg-red-200 focus:text-red-700 disabled:bg-neutral-300 disabled:text-neutral-500',
		red: 'bg-red-600 text-red-50 hover:bg-red-500 hover:text-red-50 focus:bg-red-700 focus:text-red-100 disabled:bg-neutral-500 disabled:text-neutral-300',
		discouraged:
			'bg-neutral-500 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-200 focus:bg-neutral-700 focus:text-neutral-50 disabled:bg-neutral-400 disabled:text-neutral-200',
	},
	outline: {
		black:
			'border border-black text-black hover:border-neutral-800 hover:text-neutral-800 focus:border-neutral-700 focus:text-neutral-700 disabled:border-neutral-400 disabled:text-neutral-400',
		blackSand:
			'border border-black text-black hover:border-neutral-800 hover:text-neutral-800 focus:border-neutral-700 focus:text-neutral-700 disabled:border-neutral-400 disabled:text-neutral-400',
		neutral:
			'border border-neutral-100 text-neutral-100 hover:border-neutral-50 hover:text-neutral-50 focus:border-neutral-200 focus:text-neutral-200 disabled:border-neutral-200 disabled:text-neutral-200',
		green:
			'border border-green-600 text-green-600 hover:border-green-500 hover:text-green-500 focus:border-green-700 focus:text-green-700 disabled:border-neutral-400 disabled:text-neutral-400',
		whiteGreen:
			'border border-green-50 text-green-50 hover:border-green-100 hover:text-green-100 focus:border-green-200 focus:text-green-200 disabled:border-neutral-300 disabled:text-neutral-300',
		blue: 'border border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 focus:border-blue-500 focus:text-blue-500 disabled:border-blue-400 disabled:text-blue-400',
		whiteBlue:
			'border border-blue-100 text-blue-100 hover:border-blue-100 hover:text-blue-100 focus:border-blue-200 focus:text-blue-200 disabled:border-neutral-300 disabled:text-neutral-300',
		whiteRed:
			'border border-red-50 text-red-50 hover:border-red-100 hover:text-red-100 focus:border-red-200 focus:text-red-200 disabled:border-neutral-300 disabled:text-neutral-300',
		red: 'border border-red-600 text-red-600 hover:border-red-500 hover:text-red-500 focus:border-red-700 focus:text-red-700 disabled:border-neutral-500 disabled:text-neutral-500',
		discouraged:
			'border border-neutral-500 text-neutral-500 hover:border-neutral-600 hover:text-neutral-600 focus:border-neutral-700 focus:text-neutral-700 disabled:border-neutral-400 disabled:text-neutral-400',
	},
};

const getSolidIconColorClassByScheme = (scheme: SJButtonColorScheme) => {
	let c = COLOR_SCHEMES_CONFIGS[scheme];
	return `fill-${c.normal.text} text-${c.normal.text} hover:text-${c.hover.text} hover:fill-${c.hover.text} focus:text-${c.focus.text} focus:fill-${c.focus.text} disabled:text-${c.disabled.text} disabled:fill-${c.disabled.text} `;
};

const getOutlineIconColorClassByScheme = (scheme: SJButtonColorScheme) => {
	let c = COLOR_SCHEMES_CONFIGS[scheme];
	return `fill-${c.normal.bg} text-${c.normal.bg} hover:text-${c.hover.bg} hover:fill-${c.hover.bg} focus:text-${c.focus.bg} focus:fill-${c.focus.bg} disabled:text-${c.disabled.bg} disabled:fill-${c.disabled.bg}`;
};

// Log this object to get the static classes in the console, copy the object and paste in place of the static obj below
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iconColorClassesBySchemeAndVariant: {
	[key in SJButtonVariant]: { [key in SJButtonColorScheme]: string };
} = {
	[SJButtonVariant.SOLID]: Object.values(SJButtonColorScheme).reduce(
		(acc, curr) => ({
			...acc,
			[curr]: getSolidIconColorClassByScheme(curr as SJButtonColorScheme),
		}),
		{}
	) as { [key in SJButtonColorScheme]: string },
	[SJButtonVariant.OUTLINE]: Object.values(SJButtonColorScheme).reduce(
		(acc, curr) => ({
			...acc,
			[curr]: getOutlineIconColorClassByScheme(curr as SJButtonColorScheme),
		}),
		{}
	) as { [key in SJButtonColorScheme]: string },
};

export const staticIconColorClasses: {
	[key in SJButtonVariant]: { [key in SJButtonColorScheme]: string };
} = {
	solid: {
		black:
			'fill-neutral-50 text-neutral-50 hover:text-neutral-50 hover:fill-neutral-50 focus:text-neutral-50 focus:fill-neutral-50 disabled:text-neutral-200 disabled:fill-neutral-200 ',
		blackSand:
			'fill-sand-200 text-sand-200 hover:text-sand-200 hover:fill-sand-200 focus:text-sand-100 focus:fill-sand-100 disabled:text-sand-200 disabled:fill-sand-200 ',
		neutral:
			'fill-neutral-500 text-neutral-500 hover:text-neutral-600 hover:fill-neutral-600 focus:text-neutral-600 focus:fill-neutral-600 disabled:text-neutral-400 disabled:fill-neutral-400 ',
		green:
			'fill-green-50 text-green-50 hover:text-green-50 hover:fill-green-50 focus:text-green-100 focus:fill-green-100 disabled:text-neutral-200 disabled:fill-neutral-200 ',
		whiteGreen:
			'fill-green-600 text-green-600 hover:text-green-600 hover:fill-green-600 focus:text-green-700 focus:fill-green-700 disabled:text-neutral-500 disabled:fill-neutral-500 ',
		blue: 'fill-blue-50 text-blue-50 hover:text-blue-50 hover:fill-blue-50 focus:text-blue-100 focus:fill-blue-100 disabled:text-blue-200 disabled:fill-blue-200 ',
		whiteBlue:
			'fill-blue-500 text-blue-500 hover:text-blue-500 hover:fill-blue-500 focus:text-blue-600 focus:fill-blue-600 disabled:text-neutral-500 disabled:fill-neutral-500 ',
		whiteRed:
			'fill-red-600 text-red-600 hover:text-red-600 hover:fill-red-600 focus:text-red-700 focus:fill-red-700 disabled:text-neutral-500 disabled:fill-neutral-500 ',
		red: 'fill-red-50 text-red-50 hover:text-red-50 hover:fill-red-50 focus:text-red-100 focus:fill-red-100 disabled:text-neutral-300 disabled:fill-neutral-300 ',
		discouraged:
			'fill-neutral-300 text-neutral-300 hover:text-neutral-200 hover:fill-neutral-200 focus:text-neutral-50 focus:fill-neutral-50 disabled:text-neutral-200 disabled:fill-neutral-200 ',
	},
	outline: {
		black:
			'fill-black text-black hover:text-neutral-800 hover:fill-neutral-800 focus:text-neutral-700 focus:fill-neutral-700 disabled:text-neutral-400 disabled:fill-neutral-400',
		blackSand:
			'fill-black text-black hover:text-neutral-800 hover:fill-neutral-800 focus:text-neutral-700 focus:fill-neutral-700 disabled:text-neutral-400 disabled:fill-neutral-400',
		neutral:
			'fill-neutral-100 text-neutral-100 hover:text-neutral-50 hover:fill-neutral-50 focus:text-neutral-200 focus:fill-neutral-200 disabled:text-neutral-200 disabled:fill-neutral-200',
		green:
			'fill-green-600 text-green-600 hover:text-green-500 hover:fill-green-500 focus:text-green-700 focus:fill-green-700 disabled:text-neutral-400 disabled:fill-neutral-400',
		whiteGreen:
			'fill-green-50 text-green-50 hover:text-green-100 hover:fill-green-100 focus:text-green-200 focus:fill-green-200 disabled:text-neutral-300 disabled:fill-neutral-300',
		blue: 'fill-blue-400 text-blue-400 hover:text-blue-300 hover:fill-blue-300 focus:text-blue-500 focus:fill-blue-500 disabled:text-blue-400 disabled:fill-blue-400',
		whiteBlue:
			'fill-blue-100 text-blue-100 hover:text-blue-100 hover:fill-blue-100 focus:text-blue-200 focus:fill-blue-200 disabled:text-neutral-300 disabled:fill-neutral-300',
		whiteRed:
			'fill-red-50 text-red-50 hover:text-red-100 hover:fill-red-100 focus:text-red-200 focus:fill-red-200 disabled:text-neutral-300 disabled:fill-neutral-300',
		red: 'fill-red-600 text-red-600 hover:text-red-500 hover:fill-red-500 focus:text-red-700 focus:fill-red-700 disabled:text-neutral-500 disabled:fill-neutral-500',
		discouraged:
			'fill-neutral-500 text-neutral-500 hover:text-neutral-600 hover:fill-neutral-600 focus:text-neutral-700 focus:fill-neutral-700 disabled:text-neutral-400 disabled:fill-neutral-400',
	},
};

export default COLOR_SCHEMES_CONFIGS;
