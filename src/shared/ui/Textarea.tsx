import type { Ref, TextareaHTMLAttributes } from "react";

import { cn } from "../utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	ref?: Ref<HTMLTextAreaElement>;
};

export function Textarea({ ref, className, ...rest }: TextareaProps) {
	return (
		<textarea
			ref={ref}
			className={cn(
				"border-input bg-background flex min-h-20 w-full resize-none rounded-lg border px-3 py-2 text-sm",
				"placeholder:text-muted-foreground",
				"focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
				"disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...rest}
		/>
	);
}
