import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";

export default function ProyectosId() {
  const { id } = useParams();
  const [src, setSrc] = useState(1);

  const handleClick = () => {
    setSrc((prevSrc) => (prevSrc === 2 ? 1 : 2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSrc((prevSrc) => (prevSrc === 2 ? 1 : 2));
    }, 3000);

    return () => {
      // Limpiar el intervalo al desmontar el componente
      clearInterval(interval);
    };
  }, []);

  const Image =()=>{
    //se creamos un componente react se vuelve a cargar las clases y la nimacion se resetea y se ejecuta
    //cada vez que cambia la src si estuviera dentro del componente prinsipal no lo hace solo cambia la src
    return(
     <div className="flex justify-center w-full  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img onClick={handleClick} className="animation-1 rounded-lg w-96" src={`/Portafolios/public/media/${id}/${src}.png`} alt="" />
        </div>
    )
  }

  return (
    <section className={` w-full h95 flex flex-col fondo-cont items-center justify-center gap-3 rounded-lg`}>
      <div className={`w-4/5 p-5 ${proyectos[id].color2} rounded-lg flex flex-col gap-3 my-5`}>
         
         <Image></Image>

        <div className={`flex flex-col gap-3 justify-start ${"text-zinc-400"}`}>
          <h3 className=" text-lg font-bold text-white">{proyectos[id].name}</h3>
          <p className="font-mono">{proyectos[id].descripcion}</p>
          <ul className="font-mono flex flex-row justify-between py-5">
            {proyectos[id].link.map((d, i) => (
              <li className="text-warp" key={i}>
                <a className="hover:underline hover:text-white hover:border-white border border-black rounded-full p-3" href={d.link} target="_blank" rel="noreferrer">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}