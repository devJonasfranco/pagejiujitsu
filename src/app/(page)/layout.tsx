import type { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid min-h-screen w-full max-w-screen-lg mx-auto p-4">
			{children}
		</div>
	);
}
