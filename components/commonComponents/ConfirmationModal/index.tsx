import { BsDoorOpenFill } from "react-icons/bs";
import SJButton from "@/components/commonComponents/SJButton/SJButton";
import { SJButtonColorScheme } from "@/components/commonComponents/SJButton/helpers";

export interface ConfirmationData{
	confirmationText:string,
	confirmButtonText:string
}

export interface ConfirmationModalProps {
	user: string;
	confirmationData: ConfirmationData;
	onConfirm: (userName: string) => void;
	cancelModal: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	user,
	confirmationData,
	onConfirm,
	cancelModal
}) => {
	
	return (
			<div style={{width: '500px'}} className="animate-slide-down flex flex-col gap-y-5 fixed top-10 p-6 rounded-lg bg-white shadow-md">
				{confirmationData.confirmationText}
				<div className="flex justify-between">
					<SJButton
						colorScheme={SJButtonColorScheme.DISCOURAGED}
						onClick={() => cancelModal()}
					>
						Cancel
					</SJButton>
					<SJButton
						iconRight={BsDoorOpenFill}
						colorScheme={SJButtonColorScheme.RED}
						onClick={() => onConfirm(user)}
					>
						{confirmationData.confirmButtonText}
					</SJButton>
				</div>
			</div>
	)
};

export default ConfirmationModal;

