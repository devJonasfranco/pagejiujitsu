import Image from "next/image";
import { motion } from "framer-motion";

interface CartProps {
	tempo: number;
	aluno: string;
	ouro?: number;
	prata?: number;
	bronze?: number;
	src: string;
}

export function Card({
	tempo,
	aluno,
	ouro = 0,
	prata = 0,
	bronze = 0,
	src,
}: CartProps) {
	const variant01 = (delay = tempo) => ({
		hidden: { x: "-100vw", opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 30,
				delay: delay,
				duration: 3,
			},
		},
	});

	return (
		<motion.div
			className=" p-2 w-[380px] h-[500px] bg-slate-800  text-zinc-200 rounded-lg"
			variants={variant01()}
			initial="hidden" // initial --> sua posição inicial é
			animate="visible" // animate --> vc vai para posição
		>
			<Image
				src={src}
				width={380}
				height={250}
				className="h-64 object-cover rounded-lg"
				alt=""
			/>
			<div className="p-2">
				<div className="flex justify-between mt-3">
					<span className="text-lg font-semibold">Aluno</span>
					<span className="text-lg font-semibold">{aluno}</span>
				</div>
				<hr className="mt-2 mb-2" />
				<div className="flex justify-between text-lg">
					<span className="text-slate-400 mt-2S">Ouro</span>
					<span className="text-yellow-400 mt-2S">{ouro}</span>
				</div>
				<div className="flex justify-between text-lg">
					<span className="text-slate-400 mt-2S">Prata</span>
					<span className="text-yellow-400 mt-2S">{prata}</span>
				</div>
				<div className="flex justify-between text-lg">
					<span className="text-slate-400 mt-2S">Bronze</span>
					<span className="text-yellow-400 mt-2S">{bronze}</span>
				</div>
			</div>
		</motion.div>
	);
}
