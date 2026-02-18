import { cn } from "../utils";

type FooterProps = {
	className?: string;
};

export function Footer({ className }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={cn("border-border bg-background border-t", className)}>
			<div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4 sm:px-6">
				<p className="text-foreground/50 text-sm">&copy; {currentYear} StarterKit. All rights reserved.</p>
			</div>
		</footer>
	);
}
