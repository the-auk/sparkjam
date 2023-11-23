"use client";
import { BsDoorOpenFill } from "react-icons/bs";
import SJAvatar from "@/components/commonComponents/SJAvatar";
import SJButton from "@/components/commonComponents/SJButton/SJButton";
import { SJButtonColorScheme } from "@/components/commonComponents/SJButton/helpers";
import { MockUser } from "../mockData";

export interface BanUserCardProps {
	user: MockUser;
	onRemoveTeamMember: (userName: string) => void;
}

const BanUserCard: React.FC<BanUserCardProps> = ({
	user,
	onRemoveTeamMember,
}) => {
	return (
		<div className="w-[100%] bg-white rounded-full flex justify-between items-center gap-8 p-2 pr-3">
			<div className="flex gap-2 items-center justify-between">
				<SJAvatar src={user.image} />
				<div className="text-lg font-medium text-neutral-700 h-[100%]">
					{user.name}
				</div>
			</div>

			<SJButton
				iconRight={BsDoorOpenFill}
				colorScheme={SJButtonColorScheme.RED}
				onClick={() => onRemoveTeamMember(user.name)}
			>
				Fire
			</SJButton>
		</div>
	);
};

export default BanUserCard;
