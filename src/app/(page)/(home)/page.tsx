import { Benefios } from "@/components/beneficios/beneficios";
import { Medalhas } from "@/components/cardMedalhas/medalhas";
import { Contato } from "@/components/contatos/contatos";

import { Header } from "@/components/header/header";

import { Sobre } from "@/components/sobre/sobre";

export default function Home() {
	return (
		<div className="space-y-10 flex flex-col items-center">
			<Header />
			<div id="sobre">
				<Sobre />
			</div>
			<div id="beneficios">
				<Benefios />
			</div>
			<div id="medalhas">
				<Medalhas />
			</div>
			<div id="contato" className="w-full">
				<Contato />
			</div>
		</div>
	);
}
