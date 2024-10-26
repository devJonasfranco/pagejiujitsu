import type { ReactNode } from "react";

export function BeneficioRoot({ children }: { children: ReactNode }) {
	return (
		<div className="w-[244px] h-[216px] bg-slate-800 rounded-lg flex flex-col  items-center text-center gap-2 p-3">
			{children}
		</div>
	);
}
