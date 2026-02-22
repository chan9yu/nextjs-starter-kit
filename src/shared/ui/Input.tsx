import type { InputHTMLAttributes, Ref } from "react";

import { cn } from "@/shared/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	ref?: Ref<HTMLInputElement>;
};

export function Input({ ref, className, type = "text", ...rest }: InputProps) {
	return (
		<input
			ref={ref}
			type={type}
			className={cn(
				"border-input bg-background flex h-10 w-full rounded-lg border px-3 py-2 text-sm",
				"placeholder:text-muted-foreground",
				"focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
				"disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...rest}
		/>
	);
}
