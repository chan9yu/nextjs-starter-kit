"use client";

import { useState } from "react";

import { Button, Dialog } from "@/shared/ui";

export function DialogShowcase() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outline" onClick={handleOpen}>
				Dialog 열기
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<Dialog.Header>
					<Dialog.Title>Dialog 제목</Dialog.Title>
					<Dialog.Description>
						네이티브 &lt;dialog&gt; 기반 모달입니다. ESC 키 또는 배경 클릭으로 닫을 수 있습니다.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Button variant="outline" onClick={handleClose}>
						취소
					</Button>
					<Button onClick={handleClose}>확인</Button>
				</Dialog.Footer>
			</Dialog>
		</>
	);
}
