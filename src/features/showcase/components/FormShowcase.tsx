import { Card, Input, Label, Textarea } from "../../../shared/ui";

export function FormShowcase() {
	return (
		<Card>
			<Card.Header>
				<Card.Title>폼 요소</Card.Title>
				<Card.Description>Input, Label, Textarea 컴포넌트</Card.Description>
			</Card.Header>
			<Card.Content>
				<div className="grid max-w-sm gap-4">
					<div className="grid gap-2">
						<Label htmlFor="showcase-email">이메일</Label>
						<Input id="showcase-email" type="email" placeholder="name@example.com" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="showcase-message">메시지</Label>
						<Textarea id="showcase-message" placeholder="내용을 입력하세요..." />
					</div>
				</div>
			</Card.Content>
		</Card>
	);
}
