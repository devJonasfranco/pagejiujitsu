"use client";

import MedalhasCard from "./containerCard";

export function Medalhas() {
	return (
		<div className="max-w-96 md:max-w-full md:h-auto md:flex md:flex-col md:justify-center md:items-center md:p-4 bg-slate-800 rounded-lg">
			<div>
				<h1 className="text-3xl font-semibold mb-4 w-full text-center">
					Medalhistas
				</h1>
				<p className="text-1xl mb-6 text-slate-500 text-center p-4">
					Alunos que participaram em campionatos nos ultimos meses.
				</p>
			</div>
			<div className="w-full h-auto overflow-hidden">
				<MedalhasCard />
			</div>
		</div>
	);
}
