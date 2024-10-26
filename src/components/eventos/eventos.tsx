import Image from "next/image";

export function Eventos() {
	return (
		<div className="flex flex-col gap-10">
			<div className=" flex justify-center">
				<h1 className="text-3xl font-semibold mt-4">Eventos</h1>
			</div>
			<div className="flex gap-4">
				<Image
					src="/ongjiujitus.jpg"
					alt=""
					width={795}
					height={540}
					className=" w-[640px] h-[440px]  rounded-lg rounded-tr-[100px] rounded-bl-[100px]"
				/>
				<div className="w-[600px] h-[540px]  flex flex-col justify-center p-10 gap-6">
					<h1 className="text-2xl font-semibold mt-4">Graduação</h1>
					<p className="text-2xl mb-6 text-slate-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						totam delectus ex eum mollitia, velit fuga, ratione eveniet nisi
						tempora ipsum. Rerum voluptates quaerat quo odio velit tempora,
						delectus eum!
					</p>
				</div>
			</div>
		</div>
	);
}
