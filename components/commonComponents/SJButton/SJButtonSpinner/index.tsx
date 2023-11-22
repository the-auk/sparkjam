import React from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { twMerge } from 'tailwind-merge';
import styles from './buttonSpinner.module.css';

interface ButtonSpinnerProps extends React.HTMLAttributes<HTMLOrSVGElement> {}
const SJButtonSpinner: React.FC<ButtonSpinnerProps> = ({ className }) => {
	return <ImSpinner3 className={twMerge(styles.spinnerAnimation, className)} />;
};

export default SJButtonSpinner;
