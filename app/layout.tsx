import LocalFont from "next/font/local";
import "./globals.css";

const vremenaFont = LocalFont({
	src: [
		{
			path: "../public/fonts/VremenaGroteskBook.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/VremenaGroteskMedium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/VremenaGroteskBold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/VremenaGroteskBoldItalic.otf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--vremena-font",
});

export const metadata = {
	title: "Spark Jam",
	description: "Organize contributors",
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" className={`${vremenaFont.variable}`}>
			<body>
				<main style={{ zIndex: 0 }}>{children}</main>
			</body>
		</html>
	);
}
