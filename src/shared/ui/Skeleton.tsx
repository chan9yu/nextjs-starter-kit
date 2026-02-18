import type { HTMLAttributes } from "react";

import { cn } from "../utils";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...rest }: SkeletonProps) {
	return <div className={cn("bg-muted animate-pulse rounded-lg", className)} {...rest} />;
}
