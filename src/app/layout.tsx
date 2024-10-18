import type { Metadata } from "next";
import "../styles/globals.css";
import TopBar from "@/components/TopBar/TopBar";

export const metadata: Metadata = {
	title: "Accessory Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa">
			<body className="font-iranYekanMedium">
				<TopBar />
				{children}
			</body>
		</html>
	);
}
