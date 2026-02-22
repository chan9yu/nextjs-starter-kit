"use client";

import { toast } from "sonner";

import { Button } from "@/shared/ui";

export function ToastShowcase() {
	const handleDefault = () => {
		toast("기본 알림", { description: "알림 메시지가 표시됩니다." });
	};

	const handleSuccess = () => {
		toast.success("성공!", { description: "작업이 완료되었습니다." });
	};

	const handleError = () => {
		toast.error("오류 발생", { description: "다시 시도해주세요." });
	};

	return (
		<>
			<Button variant="outline" onClick={handleDefault}>
				기본 Toast
			</Button>
			<Button variant="outline" onClick={handleSuccess}>
				성공 Toast
			</Button>
			<Button variant="outline" onClick={handleError}>
				에러 Toast
			</Button>
		</>
	);
}
