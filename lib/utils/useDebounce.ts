'use client';
import { useEffect, useState } from 'react';
/**
 * copied from https://usehooks.com/usedebounce
 * @param value Value of type T or undefined
 * @param delay
 * @returns
 */
export function useDebounce<T>(value: T, delay: number = 500) {
	const [debouncedValue, setDebouncedValue] = useState<T | undefined>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
