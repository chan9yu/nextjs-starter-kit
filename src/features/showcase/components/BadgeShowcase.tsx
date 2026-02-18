import { Badge } from "../../../shared/ui";
import { ShowcaseSection } from "./ShowcaseSection";

export function BadgeShowcase() {
	return (
		<ShowcaseSection title="Badge">
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</ShowcaseSection>
	);
}
