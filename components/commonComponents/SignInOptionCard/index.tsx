import { PropsWithChildren } from 'react';

const SignInOptionCard: React.FC<
	PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
> = ({ children, ...rest }) => {
	return (
		<div
			className="grow w-[100%] flex flex-col items-stretch justify-start bg-neutral-50 rounded-lg p-10 gap-10 md:gap-6"
			{...rest}
		>
			{children}
		</div>
	);
};

export default SignInOptionCard;

export const SignInOptionCardHeader: React.FC<
	PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
> = ({ children, ...rest }) => {
	return (
		<div
			className="w-[100%] text-center font-medium text-neutral-700 text-lg"
			{...rest}
		>
			{children}
		</div>
	);
};
