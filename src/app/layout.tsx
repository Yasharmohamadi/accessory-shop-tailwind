import type { Metadata } from "next";
import "../styles/globals.css";
import TopBar from "@/components/TopBar/TopBar";
import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
	title: "Accessory Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl">
			<body className="font-iranYekanMedium text-txtclr">
				<TopBar />
				<NavBar />
				{children}
			</body>
		</html>
	);
}
