"use client";
import { useRef, useState } from "react";
import { Card } from "./card";

export default function MedalhasCard() {
	// Referência para o contêiner de scroll
	// const scrollRef = useRef(null);
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (scrollRef.current) {
			// Verifica se o scrollRef.current não é nulo
			setIsDragging(true);
			setStartX(e.pageX - scrollRef.current.offsetLeft);
			setScrollLeft(scrollRef.current.scrollLeft);
		}
	};

	const handleMouseLeaveOrUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !scrollRef.current) return; // Verifica se o scrollRef.current não é nulo
		e.preventDefault();
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Multiplica o movimento do mouse para aumentar a sensibilidade
		scrollRef.current.scrollLeft = scrollLeft - walk;
	};
	return (
		<div className="flex justify-center mt-10">
			{/* Adicionando eventos de mouse ao contêiner */}
			<div
				ref={scrollRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeaveOrUp}
				onMouseUp={handleMouseLeaveOrUp}
				onMouseMove={handleMouseMove}
				className="min-h-[590px] w-full max-w-screen-lg overflow-x-auto overflow-y-hidden scroll-container "
			>
				<div className="flex gap-4 min-w-max">
					<Card tempo={0} aluno="jonas" ouro={2} src="/aluno02.jpg" />
					<Card
						tempo={0.2}
						src="/aluno03.jpg"
						aluno="Jose"
						ouro={1}
						prata={2}
					/>
					<Card
						tempo={0.3}
						src="/aluno01.jpg"
						aluno="Maria"
						ouro={1}
						prata={2}
						bronze={4}
					/>
					<Card
						tempo={0.4}
						src="/aluno04.jpg"
						aluno="Fernando"
						ouro={5}
						prata={2}
						bronze={4}
					/>
					<Card
						tempo={0.5}
						src="/aluno05.jpg"
						aluno="Ricardo"
						ouro={5}
						prata={2}
						bronze={4}
					/>

					<Card
						tempo={0.5}
						src="/aluno05.jpg"
						aluno="Ricardo"
						ouro={5}
						prata={2}
						bronze={4}
					/>

					<Card
						tempo={0.5}
						src="/aluno05.jpg"
						aluno="Ricardo"
						ouro={5}
						prata={2}
						bronze={4}
					/>
				</div>
			</div>
		</div>
	);
}
