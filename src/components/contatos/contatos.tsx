"use client";
import {
	InstagramLogo,
	TwitterLogo,
	WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export function Contato() {
	return (
		<div className="bg-slate-800 min-h-64 grid md:flex md:justify-between p-4 rounded-lg">
			<div className="flex flex-col md:w-2/3 justify-around">
				<div>
					<span className=" text-sm  md:text-1xl text-slate-400 flex justify-start  items-cente gap-4">
						<p>Desing:</p>
						projessorjiujitsu@gmail.com
					</span>
					<span className="  text-sm  md:text-1xl text-slate-400 flex justify-start  items-cente gap-4">
						<p>Dev:</p>
						https://www.linkedin.com/in/dev-jonasfranco/
					</span>
				</div>
				<span className="text-1xl text-slate-400 flex justify-start  items-cente mt-7">
					© Copyright 2024. Todos os direitos reservados.
				</span>
			</div>
			<div className="flex flex-col justify-start  md:w-1/3">
				<div className="text-center text-1xl text-slate-400 w-full">
					<h1 className="text-sm w-full">Contato da organização</h1>
				</div>
				<Link href="" className="flex gap-5 justify-start">
					<div className="w-9 h-9 rounded-full bg-slate-700 flex justify-center items-center">
						<WhatsappLogo size={24} className="text-blue-500" />
					</div>
					<span className="text-1xl mb-6 text-slate-400 h-full flex justify-center  items-center">
						(64) 98123-9843
					</span>
				</Link>
				<Link href="" className="flex gap-5 justify-start">
					<div className="w-9 h-9 rounded-full bg-slate-700 flex justify-center items-center">
						<TwitterLogo size={24} className="text-blue-500" />
					</div>
					<span className="text-1xl mb-6 text-slate-400 h-full flex justify-center  items-cente">
						TWITER@ASDF
					</span>
				</Link>
				<Link href="" className="flex gap-5 justify-start">
					<div className="w-9 h-9 rounded-full bg-slate-700 flex justify-center items-center">
						<InstagramLogo size={24} className="text-blue-500" />
					</div>
					<span className="text-1xl mb-6 text-slate-400 h-full flex justify-center  items-cente">
						INSTAGRANS
					</span>
				</Link>
			</div>
		</div>
	);
}
