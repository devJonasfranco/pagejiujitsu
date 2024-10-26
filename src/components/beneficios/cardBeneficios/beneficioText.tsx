interface ConteiudoProps {
	texto: string;
}

export function BeneficioTexto({ texto }: ConteiudoProps) {
	return <p className="text-xl text-slate-500 mt-2">{texto}</p>;
}
