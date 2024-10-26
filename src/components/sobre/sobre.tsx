"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Sobre() {
	const variant01 = (delay = 0) => ({
		hidden: { x: "-100vw", opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 30,
				delay: delay,
				duration: 0.5,
			},
		},
	});
	const variant02 = (delay = 0) => ({
		hidden: { x: "200vw", opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 30,
				delay: delay,
				duration: 0.5,
			},
		},
	});

	return (
		<section className=" md:flex md:justify-center w-full h-auto mt-5 gap-4 p-4 bg-slate-800 rounded-lg">
			<Image
				src="/ongjiujitus.jpg"
				alt="foto"
				className="w-[440px] h-[340px]  rounded-lg rounded-tr-[100px] rounded-bl-[100px] "
				width={795}
				height={540}
				quality={100}
			/>

			<div className="w-full h-auto  md:flex md:flex-col ">
				<h1 className="text-3xl font-semibold mb-4 w-full text-center mt-5">
					Jiu-Jitsu para todos
				</h1>

				<p className="text-1xl mb-6 text-slate-500">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Necessitatibus totam nihil vel eligendi culpa deleniti odio veritatis
					molestiae nam, sit natus dolor placeat suscipit deserunt incidunt
					dicta vitae, non beatae!
				</p>
				<div>
					<button
						type="button"
						className="p-1 text-sm w-[90px] h-[25px] rounded-full bg-sky-300 hover:bg-sky-600 hover:text-sky-100 flex justify-center items-center text-zinc-900 font-semibold"
					>
						Leia Mais...
					</button>
				</div>
			</div>
		</section>
	);
}
