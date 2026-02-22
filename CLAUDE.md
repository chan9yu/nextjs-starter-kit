# Next.js Starter Kit

## 기술 스택

- Next.js 16 (App Router) + React 19 + TypeScript 5.9 (strict)
- Tailwind CSS 4 + class-variance-authority
- pnpm 10, Node.js 22+

## 주요 명령어

- `pnpm dev` — 개발 서버 (port 3100)
- `pnpm build` — 프로덕션 빌드
- `pnpm lint` / `pnpm lint:fix` — ESLint
- `pnpm format` / `pnpm format:check` — Prettier
- `pnpm type:check` — TypeScript 타입 검사

## 프로젝트 구조

```
src/
├── app/              # 라우팅만 담당 (thin layer)
├── features/         # 기능별 모듈 ([feature]/components|types|services)
└── shared/
    ├── fonts/        # 폰트 파일
    ├── styles/       # 전역 CSS (globals, tokens, base, animations)
    ├── layouts/      # 앱 쉘 (Header, Footer, Container, ThemeProvider)
    ├── ui/           # 재사용 UI (Button, Dialog, Card 등)
    ├── hooks/
    └── utils/
```

## 컴포넌트 규칙

- Props는 반드시 별도 type으로 선언 (인라인 타입 금지: `({ className }: { className?: string })` ❌)
- 파일당 하나의 컴포넌트만 export (Props 미노출, `ComponentProps<typeof C>` 사용)
- 배럴 파일(index.ts)은 컴포넌트만 re-export (타입 re-export 금지, 도메인 타입은 예외)
- 복합 컴포넌트: `Object.assign` 패턴 (Card, Dialog, Sheet, DropdownMenu, Alert)
- 복합 컴포넌트 서브 함수/타입에 부모 prefix 필수: `CardHeader`, `DialogTitle`, `DropdownMenuTriggerProps` 등
- `"use client"`: hooks/browser API/이벤트 핸들러 직접 사용 시에만
- 무거운 클라이언트 컴포넌트는 `next/dynamic`으로 지연 로딩

## CSS/스타일

- 전역 CSS: `src/shared/styles/` (globals → tokens, base, animations import)
- 폰트: `src/shared/fonts/`, `next/font/local`로 로드
- Tailwind 기본 클래스가 있으면 임의값 금지: `min-w-[8rem]` ❌ → `min-w-32` ✅

## 테마

- 클래스 기반 다크모드 (.dark), ThemeScript로 FOUC 방지
- `theme-transitioning` 클래스로 전환 시 transition
- `useSyncExternalStore`로 localStorage/matchMedia 관리
