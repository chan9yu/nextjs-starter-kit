"use client";

import { X } from "lucide-react";
import type { PropsWithChildren } from "react";
import { createContext, use, useId, useState } from "react";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/shared/utils";
import { Button } from "./Button";

type SheetContextValue = {
	titleId: string;
};

const SheetContext = createContext<SheetContextValue | null>(null);

type SheetSide = "left" | "right";

type SheetProps = PropsWithChildren<{
	open: boolean;
	onClose: () => void;
	side?: SheetSide;
	className?: string;
}>;

const SIDE_STYLES: Record<SheetSide, { panel: string; enter: string; exit: string }> = {
	left: {
		panel: "inset-y-0 left-0 border-r",
		enter: "animate-[slide-in-from-left_300ms_ease-out]",
		exit: "animate-[slide-out-to-left_200ms_ease-in]"
	},
	right: {
		panel: "inset-y-0 right-0 border-l",
		enter: "animate-[slide-in-from-right_300ms_ease-out]",
		exit: "animate-[slide-out-to-right_200ms_ease-in]"
	}
};

function SheetRoot({ open, onClose, side = "left", className, children }: SheetProps) {
	const [visible, setVisible] = useState(false);
	const titleId = useId();

	if (open && !visible) {
		setVisible(true);
	}

	const handleAnimationEnd = () => {
		if (!open) setVisible(false);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (open && e.key === "Escape") onClose();
	};

	useEventListener("keydown", handleKeyDown);

	if (!visible) return null;

	const sideStyle = SIDE_STYLES[side];

	return (
		<SheetContext value={{ titleId }}>
			<div className="fixed inset-0 z-50">
				<div
					className={cn(
						"absolute inset-0 bg-black/80",
						open ? "animate-[fade-in_200ms_ease-out]" : "animate-[fade-out_200ms_ease-in]"
					)}
					onClick={onClose}
					onAnimationEnd={!open ? handleAnimationEnd : undefined}
					aria-hidden="true"
				/>
				<div
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId}
					className={cn(
						"border-border bg-background fixed z-50 flex h-full w-3/4 flex-col gap-4 p-6 shadow-lg sm:max-w-sm",
						sideStyle.panel,
						open ? sideStyle.enter : sideStyle.exit,
						className
					)}
				>
					<Button
						variant="ghost"
						size="icon"
						onClick={onClose}
						className="absolute top-4 right-4 h-7 w-7 opacity-70 hover:opacity-100"
						aria-label="닫기"
					>
						<X size={16} aria-hidden="true" />
					</Button>
					{children}
				</div>
			</div>
		</SheetContext>
	);
}

type SheetSectionProps = PropsWithChildren<{ className?: string }>;

function SheetHeader({ className, children }: SheetSectionProps) {
	return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}

function SheetTitle({ className, children }: SheetSectionProps) {
	const { titleId } = use(SheetContext)!;
	return (
		<h2 id={titleId} className={cn("text-foreground text-lg font-semibold", className)}>
			{children}
		</h2>
	);
}

export const Sheet = Object.assign(SheetRoot, {
	Header: SheetHeader,
	Title: SheetTitle
});
