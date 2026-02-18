"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function useTheme() {
	const { theme, setTheme: setNextTheme, resolvedTheme } = useNextTheme();
	const mounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

	const setTheme = (newTheme: Theme) => {
		const root = document.documentElement;

		const handleTransitionEnd = () => {
			root.classList.remove("theme-transitioning");
		};

		root.classList.add("theme-transitioning");
		setNextTheme(newTheme);
		root.addEventListener("transitionend", handleTransitionEnd, { once: true });
	};

	return {
		theme: (theme ?? "system") as Theme,
		resolvedTheme: (resolvedTheme ?? "light") as ResolvedTheme,
		setTheme,
		mounted
	};
}
