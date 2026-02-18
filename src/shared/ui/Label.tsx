import type { LabelHTMLAttributes } from "react";

import { cn } from "../utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...rest }: LabelProps) {
	return (
		<label
			className={cn(
				"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className
			)}
			{...rest}
		/>
	);
}
