import type { ElementType } from "react";

interface ConteiudoProps {
	icon: ElementType;
}

export function BeneficioICon({ icon: Icon }: ConteiudoProps) {
	return <Icon className=" text-sky-400 mt-2" size={52} />;
}
