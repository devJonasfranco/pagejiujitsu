"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
	return (
		<header className="grid grid-cols-1 pt-2 gap-4 w-full h-auto md:flex md:justify-between  md:pt-1 md:h-[226px] ">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="flex justify-center items-center"
			>
				<Image
					src="/logo.png"
					width={448}
					height={448}
					alt="Logo"
					className=" mx-auto w-[224px] h-[224px] md:w-32 md:h-32"
					quality={100}
				/>
			</motion.div>
			<ul className="flex justify-center items-start gap-8 font-semibold text-lg md:items-center md:justify-between">
				<li>
					<Link href="#sobre" className="hover:text-zinc-400">
						Sobre
					</Link>
				</li>
				<li>
					<Link href="#beneficios" className="hover:text-zinc-400">
						Beneficios
					</Link>
				</li>
				<li>
					<Link href="#medalhas" className="hover:text-zinc-400">
						Medalhistas
					</Link>
				</li>
				<li>
					<Link href="#contato" className="hover:text-zinc-400">
						Contato
					</Link>
				</li>
			</ul>
			{/* 
			<div className="font-semibold text-lg  flex justify-end ">
				<Link
					href="#contato"
					className=" w-[141px] h-[60px] rounded-full bg-sky-400 hover:bg-sky-600 flex justify-center items-center"
				>
					{" "}
					Contato{" "}
				</Link>
			</div> */}
		</header>
	);
}
