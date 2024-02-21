import { useState , useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import {stack} from "../data/stack.js"
export default function ProyectosId() {
  const { id } = useParams();
  const [src, setSrc] = useState(1);
  const [imagen,setImagen] = useState(false)


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
    //si creamos un componente react se vuelve a cargar las clases y la animacion se resetea y se ejecuta
    //cada vez que cambia la src si estuviera dentro del componente prinsipal no lo hace solo cambia la src
    return(
     <div onClick={()=>{setImagen(true)}} className={`w-full ${imagen ? "hidden" : undefined}  flex justify-center items-center hover:scale-125  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform p-3`}>
          <img className={` animation-1 rounded-lg w-72`} src={`/Portafolios/public/media/${id}/${src}.webp`} alt="" />
        </div>
    )
  }

  const Image2 =()=>{
    
    return(
     <div className={`flex justify-center w-2/3 items-center rounded-lg transition-transform duration-300 ease-in-out transform p-3`}>
          <img className={`w-full animation-1 rounded-lg `} src={`/Portafolios/public/media/${id}/${src}.webp`} alt="" />
        </div>
    )
  }

  return (<>
    {
      imagen ? <div onClick={()=>{setImagen(false)}} className="flex flex-col fixed justify-center items-center top-0 left-0 w-screen h-full fondo-cont">  
                   
                <Image2></Image2>
                   
               </div>


      : undefined
    }
    <section className={`w-full h95 flex flex-col fondo-cont items-center justify-center gap-3 rounded-lg`}>
      <Suspense fallback={<div>Cargando...</div>}>
      <div className={`w-4/5 p-5 h-full ${proyectos[id].color2} rounded-lg flex flex-col items-center justify-center gap-3 my-5`}>
      <Suspense fallback={<div>Cargando...</div>}>  
         <Image></Image>
         </Suspense> 

        <div className={`flex flex-col gap-3 justify-start ${"text-zinc-400"} overflow-auto`}>
          <h3 className=" text-lg font-bold text-white">{proyectos[id].name}</h3>
          <p className="font-mono">{proyectos[id].descripcion}</p>
           
           <div className="flex flex-row gap-3 flex-wrap ">
             {
               proyectos[id].stack.map((tec,id)=>{
                  return(
                    <div key={id+200} className={`flex flex-row gap-1 ${stack[tec].color} bg-opacity-40 rounded-lg p-2`}>
                       <p className="text-sm text-zinc-300">{stack[tec].name}</p> 
                       <img className="w-5" src={`/Portafolios/public/icons/${stack[tec].img}`} alt="" />              
                    </div>
                  )
               })
             }
           </div>

          <ul className="font-mono flex flex-row justify-between py-5">
            {proyectos[id].link.map((d, i) => (
              <li className="text-warp" key={i}>
                <a className="hover:underline hover:text-white hover:border-white border border-black rounded-xl px-5 p-3 " href={d.link} target="_blank" rel="noreferrer">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Suspense>
    </section>
  </>);
}