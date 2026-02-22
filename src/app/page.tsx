import { Code, Moon, Palette, Rocket, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

import { FeatureCard } from "@/features/home";
import { Container } from "@/shared/layouts";
import { Badge, Button, Skeleton } from "@/shared/ui";

const ComponentShowcase = dynamic(() => import("@/features/showcase").then((m) => ({ default: m.ComponentShowcase })), {
	loading: () => <Skeleton className="h-96 w-full" />
});

const FEATURES: ComponentProps<typeof FeatureCard>[] = [
	{
		icon: <Zap size={20} />,
		title: "Next.js 16",
		description: "App Router, Server Components, 그리고 React 19의 최신 기능을 활용합니다."
	},
	{
		icon: <Palette size={20} />,
		title: "TailwindCSS v4",
		description: "CSS-first 설정과 @theme 디렉티브로 디자인 토큰을 관리합니다."
	},
	{
		icon: <Moon size={20} />,
		title: "다크 모드",
		description: "시스템 설정 감지, 수동 토글, FOUC 방지가 내장된 다크모드를 지원합니다."
	},
	{
		icon: <Code size={20} />,
		title: "TypeScript Strict",
		description: "엄격한 타입 검사로 안전하고 견고한 코드를 작성합니다."
	},
	{
		icon: <Rocket size={20} />,
		title: "개발 도구",
		description: "ESLint, Prettier, Lefthook으로 코드 품질을 자동으로 관리합니다."
	}
];

export default function HomePage() {
	return (
		<Container>
			<section className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
				<Badge variant="secondary">v0.1.0</Badge>
				<h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">Next.js Starter Kit</h1>
				<p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
					빠르게 웹 개발을 시작하세요. Next.js 16, TypeScript, TailwindCSS v4가 최적의 설정으로 준비되어 있습니다.
				</p>
				<div className="flex gap-4">
					<Button size="lg">시작하기</Button>
					<Button
						as="a"
						href="https://github.com/chan9yu/nextjs-starter-kit"
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						size="lg"
					>
						GitHub
					</Button>
				</div>
			</section>

			<section className="pb-16">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{FEATURES.map((feature) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</section>

			<section className="pb-24">
				<h2 className="text-foreground mb-8 text-2xl font-bold tracking-tight">컴포넌트 쇼케이스</h2>
				<ComponentShowcase />
			</section>
		</Container>
	);
}
