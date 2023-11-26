"use client";
import { NextPage } from "next";
import { MOCK_OPEN_AI_TEAM, MockUser } from "@/app/manage-team/mockData";
import BanUserCard from "@/app/manage-team/BanUserCard";
import { useState } from "react";
import ConfirmationModal, { ConfirmationData } from "../../components/commonComponents/ConfirmationModal";

const ManageTeamPage: NextPage = () => {
	const [team, setTeam] = useState<MockUser[]>(MOCK_OPEN_AI_TEAM);
	const [currentTarget, setCurrentTarget] = useState<string>('');
	const [confirmationData, setConfirmationData] = useState<ConfirmationData>();

	const activateRemoveModal = (user:string, confirmationText:string, confirmButtonText:string) => {
		setCurrentTarget(user);
		setConfirmationData({'confirmationText':confirmationText, 'confirmButtonText':confirmButtonText});
	}

	const deactivateRemoveModal = () => {
		setCurrentTarget('');
		setConfirmationData(undefined);
	}

	const handleRemoveTeamMember = (userName: string) => {
		setTeam(team.filter((user) => user.name !== userName));
		deactivateRemoveModal();
	};

	return (
		<div className="h-[100dvh] w-[100vw] flex-center bg-neutral-200">
			<div className=" flex-center w-[400px] gap-8">
				{(currentTarget!='' && confirmationData!=undefined)
				&& <ConfirmationModal confirmationData={confirmationData} user={currentTarget} onConfirm={handleRemoveTeamMember} cancelModal={deactivateRemoveModal} />}
				<h1 className="text-4xl w-[100%]">Manage Open A.I.</h1>
				<div className="flex flex-col w-[100%] items-stretch gap-4">
					{team.map((user) => (
						<BanUserCard
							key={user.image}
							user={user}
							onRemoveTeamMember={activateRemoveModal}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ManageTeamPage;
