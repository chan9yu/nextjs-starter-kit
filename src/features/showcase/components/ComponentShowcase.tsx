import { Card, Separator } from "@/shared/ui";
import { BadgeShowcase } from "./BadgeShowcase";
import { ButtonShowcase } from "./ButtonShowcase";
import { DialogShowcase } from "./DialogShowcase";
import { FormShowcase } from "./FormShowcase";
import { ToastShowcase } from "./ToastShowcase";

export function ComponentShowcase() {
	return (
		<div className="grid gap-6">
			<ButtonShowcase />
			<BadgeShowcase />
			<FormShowcase />

			<Card>
				<Card.Header>
					<Card.Title>인터랙션</Card.Title>
					<Card.Description>Dialog, Toast 컴포넌트</Card.Description>
				</Card.Header>
				<Card.Content>
					<div className="flex flex-wrap gap-3">
						<DialogShowcase />
						<Separator orientation="vertical" className="mx-1 h-9" />
						<ToastShowcase />
					</div>
				</Card.Content>
			</Card>
		</div>
	);
}
