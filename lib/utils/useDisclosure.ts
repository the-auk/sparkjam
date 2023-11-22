const { useCallback, useState } = require('react');

function useDisclosure(isOpenDefault = false) {
	const [isOpen, setIsOpen] = useState(isOpenDefault);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	return { isOpen, open, close, toggle };
}

export default useDisclosure;
