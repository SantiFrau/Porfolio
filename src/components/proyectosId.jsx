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
    <section className={`w-6/12 flex flex-col fondo-cont items-center justify-center gap-3 p-3 m-4 rounded-lg`}>
      <div className={`p-5 ${proyectos[id].color} rounded-lg flex flex-col gap-3 items-center justify-center`}>
        <div className="w-96 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img onClick={handleClick} className="w-full" src={`/public/media/${id}/${src}.png`} alt="" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">{proyectos[id].name}</h3>
          <p className="text-zinc-300">{proyectos[id].descripcion}</p>
          <ul>
            {proyectos[id].link.map((d, i) => (
              <li key={i}>
                <a className="" href={d} target="_blank" rel="noreferrer">
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