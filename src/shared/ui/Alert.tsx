import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/shared/utils";

const alertVariants = cva(
	"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive: "border-destructive/50 text-destructive [&>svg]:text-destructive"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);

type AlertProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>;

function AlertRoot({ className, variant, children, ...rest }: AlertProps) {
	return (
		<div role="alert" className={cn(alertVariants({ variant }), className)} {...rest}>
			{children}
		</div>
	);
}

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement>;

function AlertTitle({ className, ...rest }: AlertTitleProps) {
	return <h5 className={cn("mb-1 leading-none font-medium tracking-tight", className)} {...rest} />;
}

type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

function AlertDescription({ className, ...rest }: AlertDescriptionProps) {
	return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...rest} />;
}

export const Alert = Object.assign(AlertRoot, {
	Title: AlertTitle,
	Description: AlertDescription
});
