import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/shared/utils";

type CardProps = PropsWithChildren<{ className?: string }>;

type CardSectionProps = PropsWithChildren<{ className?: string }>;

function CardRoot({ className, children }: CardProps) {
	return (
		<div className={cn("border-border bg-card text-card-foreground rounded-xl border", className)}>{children}</div>
	);
}

function CardHeader({ className, children }: CardSectionProps) {
	return <div className={cn("flex flex-col gap-1.5 p-6", className)}>{children}</div>;
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

function CardTitle({ className, ...rest }: CardTitleProps) {
	return <h3 className={cn("leading-none font-semibold tracking-tight", className)} {...rest} />;
}

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

function CardDescription({ className, ...rest }: CardDescriptionProps) {
	return <p className={cn("text-muted-foreground text-sm", className)} {...rest} />;
}

function CardContent({ className, children }: CardSectionProps) {
	return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

function CardFooter({ className, children }: CardSectionProps) {
	return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
}

export const Card = Object.assign(CardRoot, {
	Header: CardHeader,
	Title: CardTitle,
	Description: CardDescription,
	Content: CardContent,
	Footer: CardFooter
});
