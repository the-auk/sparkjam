import Link from "next/link";

export default async function Home() {
	return (
		<div className="w-full h-auto flex flex-col">
			<Link href="manage-team" className="underline text-blue-600">
				Manage team
			</Link>
		</div>
	);
}
