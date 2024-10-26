interface ConteiudoProps {
	titulo: string;
}

export function BeneficioTitle({ titulo }: ConteiudoProps) {
	return <h1 className="font-semibold text-2xl ">{titulo} </h1>;
}
