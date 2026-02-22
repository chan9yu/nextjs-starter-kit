import type { ReactNode } from "react";

import { Card } from "@/shared/ui";

type FeatureCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<Card className="hover:bg-muted transition-colors">
			<Card.Header>
				<div className="bg-foreground/5 text-foreground mb-1 flex h-10 w-10 items-center justify-center rounded-lg">
					{icon}
				</div>
				<Card.Title>{title}</Card.Title>
			</Card.Header>
			<Card.Content>
				<p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
			</Card.Content>
		</Card>
	);
}
