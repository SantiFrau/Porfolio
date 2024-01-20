import { useState } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";

export default function ProyectosId() {
  const { id } = useParams();
  const [src, setSrc] = useState(1);

  const handleClick = () => {
    setSrc((prevSrc) => (prevSrc === 2 ? 1 : 2));
  };

  return (
    <section className={` w-full h95 flex flex-col fondo-cont items-center justify-center gap-3 rounded-lg`}>
      <div className={`w-4/5 p-5 ${proyectos[id].color2} rounded-lg flex flex-col gap-3`}>
        <div className="flex justify-center w-full  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img onClick={handleClick} className=" rounded-lg w-96" src={`/Portafolios/public/media/${id}/${src}.png`} alt="" />
        </div>

        <div className={`flex flex-col gap-3 justify-start ${"text-zinc-400"}`}>
          <h3 className=" text-lg font-bold text-white">{proyectos[id].name}</h3>
          <p className="font-mono">{proyectos[id].descripcion}</p>
          <ul className="font-mono">
            {proyectos[id].link.map((d, i) => (
              <li className="" key={i}>
                <a className="hover:underline" href={d} target="_blank" rel="noreferrer">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}