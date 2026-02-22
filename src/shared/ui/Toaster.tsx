"use client";

import { Toaster as SonnerToaster } from "sonner";

import { useTheme } from "@/shared/hooks";

export function Toaster() {
	const { resolvedTheme } = useTheme();

	return (
		<SonnerToaster
			theme={resolvedTheme}
			richColors
			position="bottom-right"
			toastOptions={{
				classNames: {
					toast: "border-border bg-background text-foreground",
					description: "text-muted-foreground"
				}
			}}
		/>
	);
}
