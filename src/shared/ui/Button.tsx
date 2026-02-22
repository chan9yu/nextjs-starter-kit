import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/shared/utils";

const buttonVariants = cva(
	"inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground hover:bg-primary/90",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
				ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
			},
			size: {
				sm: "h-8 px-3 text-sm",
				md: "h-10 px-4 text-sm",
				lg: "h-12 px-6 text-base",
				icon: "h-10 w-10"
			}
		},
		defaultVariants: {
			variant: "primary",
			size: "md"
		}
	}
);

type ButtonOwnProps = {
	loading?: boolean;
} & VariantProps<typeof buttonVariants>;

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps & {
	as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | "as">;

export function Button<T extends ElementType = "button">({
	as,
	variant,
	size,
	loading = false,
	className,
	children,
	...rest
}: ButtonProps<T>) {
	const Component = as ?? "button";

	const buttonProps =
		Component === "button"
			? { type: "button" as const, disabled: loading || Boolean((rest as Record<string, unknown>).disabled) }
			: {};

	return (
		<Component
			className={cn(buttonVariants({ variant, size }), loading && "cursor-wait", className)}
			aria-busy={loading || undefined}
			{...(rest as Record<string, unknown>)}
			{...buttonProps}
		>
			{loading ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : null}
			{children}
		</Component>
	);
}
