import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Projeto Jiu-jitsu para todos",
	description: "Projeto Jiu-jitsu para todos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className={`antialiased`}>
			<body className="bg-zinc-900 text-zinc-100">{children}</body>
		</html>
	);
}
