"use client";
import { Handshake } from "@phosphor-icons/react";
import { Beneficios } from "./cardBeneficios";

// import {
// 	ArrowPathIcon,
// 	ChatBubbleOvalLeftIcon,
// 	FaceSmileIcon,
// 	HandThumbUpIcon,
// } from "@heroicons/react/24/outline";

export function Benefios() {
	return (
		<div className="flex flex-col gap-6 w-full h-auto ">
			<div className="flex flex-col items-center gap-8">
				<h1 className="text-3xl font-semibold mb-4 w-full text-center">
					Benefícios da iniciativa
				</h1>
				<p className="text-1xl mb-6 text-slate-500">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, qui
					cumque eum porro rem culpa reprehenderit illum ab voluptatem vitae
					deserunt ipsa alias quod ex possimus doloribus commodi fugiat nisi!
				</p>
			</div>
			<div className="grid grid-cols-1 mx-auto space-y-6 md:flex md:w-full  md:gap-6 md:justify-center md:items-end">
				<Beneficios.Root>
					<Beneficios.icon icon={Handshake} />
					<Beneficios.title titulo="Alto Confiança" />
					<Beneficios.texto texto="O aluno adquire confinça em suas capacidades" />
				</Beneficios.Root>
				<Beneficios.Root>
					<Beneficios.icon icon={Handshake} />
					<Beneficios.title titulo="Alto Confiança" />
					<Beneficios.texto texto="O aluno adquire confinça em suas capacidades" />
				</Beneficios.Root>
				<Beneficios.Root>
					<Beneficios.icon icon={Handshake} />
					<Beneficios.title titulo="Alto Confiança" />
					<Beneficios.texto texto="O aluno adquire confinça em suas capacidades" />
				</Beneficios.Root>
			</div>
		</div>
	);
}
