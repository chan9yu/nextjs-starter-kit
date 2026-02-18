import type { PropsWithChildren } from "react";

import { Card } from "../../../shared/ui";

type ShowcaseSectionProps = PropsWithChildren<{ title: string }>;

export function ShowcaseSection({ title, children }: ShowcaseSectionProps) {
	return (
		<Card>
			<Card.Header>
				<Card.Title>{title}</Card.Title>
			</Card.Header>
			<Card.Content className="flex flex-wrap items-center gap-3">{children}</Card.Content>
		</Card>
	);
}
