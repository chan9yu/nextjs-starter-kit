import "@/shared/styles/globals.css";

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import { Footer, Header } from "@/shared/layouts";
import { Toaster } from "@/shared/ui";

const pretendard = localFont({
	src: "../shared/fonts/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "swap",
	weight: "100 900"
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Next.js Starter Kit",
	description: "Next.js 16 + TypeScript + TailwindCSS v4 스타터킷"
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={`${pretendard.variable} ${geistMono.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<div className="flex min-h-dvh flex-col">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
