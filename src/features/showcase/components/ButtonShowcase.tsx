import { Button } from "../../../shared/ui";
import { ShowcaseSection } from "./ShowcaseSection";

export function ButtonShowcase() {
	return (
		<ShowcaseSection title="Button">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="destructive">Destructive</Button>
			<Button loading>Loading</Button>
		</ShowcaseSection>
	);
}
