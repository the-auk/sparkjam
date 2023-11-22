import { BsXCircleFill } from 'react-icons/bs';
import SJBadge, { SJBadgeProps } from '.';

export type ClosableSJBadgeProps = Omit<
	SJBadgeProps,
	'iconRight' | 'onClick'
> & { onClose: SJBadgeProps['onClick'] };

const ClosableSJBadge: React.FC<ClosableSJBadgeProps> = ({
	onClose,
	...rest
}) => {
	return (
		<SJBadge {...rest} onClick={onClose} iconRight={BsXCircleFill}></SJBadge>
	);
};

export default ClosableSJBadge;
