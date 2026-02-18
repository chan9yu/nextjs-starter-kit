"use client";

import type { PropsWithChildren, RefObject } from "react";
import { createContext, use, useRef } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { cn } from "../utils";

// DropdownMenu 래퍼 ref를 공유하여 useOnClickOutside가 트리거 영역까지 포함하도록 함
type DropdownMenuContextValue = {
	wrapperRef: RefObject<HTMLDivElement | null>;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

type DropdownMenuProps = PropsWithChildren<{ className?: string }>;

function DropdownMenuRoot({ className, children }: DropdownMenuProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);

	return (
		<DropdownMenuContext value={{ wrapperRef }}>
			<div ref={wrapperRef} className={cn("relative inline-block", className)}>
				{children}
			</div>
		</DropdownMenuContext>
	);
}

type DropdownMenuTriggerProps = PropsWithChildren<{
	className?: string;
	onClick: () => void;
	open?: boolean;
}>;

function DropdownMenuTrigger({ className, onClick, open, children }: DropdownMenuTriggerProps) {
	return (
		<button type="button" onClick={onClick} className={className} aria-haspopup="menu" aria-expanded={open}>
			{children}
		</button>
	);
}

type DropdownMenuContentProps = PropsWithChildren<{
	open: boolean;
	onClose: () => void;
	align?: "start" | "end";
	className?: string;
}>;

function DropdownMenuContent({ open, onClose, align = "end", className, children }: DropdownMenuContentProps) {
	const { wrapperRef } = use(DropdownMenuContext)!;

	// 래퍼 외부 클릭 시 닫기 (트리거 클릭은 래퍼 내부이므로 무시됨)
	// React 19의 RefObject<T | null>과 usehooks-ts의 RefObject<T> 타입 차이를 해소
	useOnClickOutside(wrapperRef as RefObject<HTMLDivElement>, onClose);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (open && e.key === "Escape") onClose();
	};

	useEventListener("keydown", handleKeyDown);

	if (!open) return null;

	return (
		<div
			role="menu"
			className={cn(
				"border-border bg-popover text-popover-foreground absolute top-full z-50 mt-1 min-w-32 overflow-hidden rounded-lg border p-1 shadow-md",
				"animate-[zoom-in_150ms_ease-out]",
				align === "end" ? "right-0" : "left-0",
				className
			)}
		>
			{children}
		</div>
	);
}

type DropdownMenuItemProps = PropsWithChildren<{
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}>;

function DropdownMenuItem({ className, onClick, disabled, children }: DropdownMenuItemProps) {
	const handleClick = () => {
		if (!disabled) onClick?.();
	};

	return (
		<button
			type="button"
			role="menuitem"
			disabled={disabled}
			onClick={handleClick}
			className={cn(
				"flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors outline-none select-none",
				"hover:bg-accent hover:text-accent-foreground",
				"disabled:pointer-events-none disabled:opacity-50",
				className
			)}
		>
			{children}
		</button>
	);
}

type DropdownMenuSeparatorProps = {
	className?: string;
};

function DropdownMenuSeparator({ className }: DropdownMenuSeparatorProps) {
	return <div role="separator" className={cn("bg-border -mx-1 my-1 h-px", className)} />;
}

type DropdownMenuLabelProps = PropsWithChildren<{
	className?: string;
}>;

function DropdownMenuLabel({ className, children }: DropdownMenuLabelProps) {
	return <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>{children}</div>;
}

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
	Item: DropdownMenuItem,
	Label: DropdownMenuLabel,
	Separator: DropdownMenuSeparator
});
