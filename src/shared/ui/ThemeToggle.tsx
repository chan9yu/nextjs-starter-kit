"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/shared/hooks";
import type { Theme } from "@/shared/hooks/useTheme";
import { cn } from "@/shared/utils";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton";

const THEME_CYCLE: Theme[] = ["light", "dark", "system"];

const THEME_ICON = {
	light: Sun,
	dark: Moon,
	system: Monitor
} as const;

const THEME_LABEL = {
	light: "라이트 모드",
	dark: "다크 모드",
	system: "시스템 설정"
} as const;

type ThemeToggleProps = {
	className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { theme, setTheme, mounted } = useTheme();

	const handleToggle = () => {
		const currentIndex = THEME_CYCLE.indexOf(theme);
		const nextIndex = (currentIndex + 1) % THEME_CYCLE.length;
		const nextTheme = THEME_CYCLE[nextIndex]!;
		setTheme(nextTheme);
	};

	if (!mounted) {
		return <Skeleton className={cn("h-10 w-10 rounded-lg", className)} />;
	}

	const Icon = THEME_ICON[theme];
	const label = THEME_LABEL[theme];

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleToggle}
			className={cn("text-foreground/60 hover:text-foreground", className)}
			aria-label={`현재: ${label}. 클릭하여 테마 변경`}
		>
			<Icon size={18} aria-hidden="true" />
		</Button>
	);
}
