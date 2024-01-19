import {stack} from "../data/stack.js"
import { useEffect } from "react"


function ColoredText() {
    useEffect(() => {
      const paragraph = document.getElementById("coloredParagraph");
      if (paragraph) {
        const words = paragraph.innerText.split(" ");
        const coloredWords = words.map((word) => {
          const randomColorClass = getRandomColorClass();
          return `<span class="${randomColorClass}">${word}</span>`;
        });
        paragraph.innerHTML = coloredWords.join(" ");
      }
    }, []);
  
    const getRandomColorClass = () => {
      // Array de clases de colores de Tailwind (ajústalo según tus configuraciones)
      const colorClasses = ["text-violeta-op-200", "text-azul-op-200", "text-gris-op-200", "text-verde-op-200","text-naranja-op-200","text-rojo-op-200"];
      const randomIndex = Math.floor(Math.random() * colorClasses.length);
      return colorClasses[randomIndex];
    };
  
    return (
      <p id="coloredParagraph" className="font-mono p-3 mx-5">
        ¡Hola! Soy Santiago Frau, un apasionado desarrollador web frontend con base en Argentina.
        Obtuve experiencia en diversos proyectos personales. Mi fascinación por la tecnología me
        impulsa a mantenerme constantemente actualizado con las últimas tendencias y herramientas en
        el mundo del desarrollo web.
        Considero que cada proyecto es una oportunidad para explorar nuevas tecnologías y técnicas,
        llevando mis habilidades al siguiente y comprometido con la excelencia y la mejora constante.
      </p>
    );
  }
  





export default function About () {
    return (
        <section className="w-full h95 flex flex-col items-center justify-center fondo-cont gap-3 rounded-lg">
          
         <h3 className="font-bold text-2xl w-full text-start px-5 py-2">Sobre mi</h3>
         <ColoredText></ColoredText>
         
         <h5 className="font-bold text-xl w-full text-start px-5 py-2">Stack de tecnologias</h5>
         <div className="flex flex-row gap-3 items-end justify-center p-3 flex-wrap">
          {
            stack.map((d,i)=>{
                let gap
                if(d.img == "tailwind"){
                      gap = "gap-4"
                } else{
                     gap = "gap-2"
                }
                return(
            
                    <div className={`flex flex-col items-center justify-center ${gap} `} key={i}>
                        <img className="w-10" src={`/public/icons/${d.img}.png`} alt={`icon ${d.name}`}></img>
                        <p>{d.name}</p>
                    </div>
                )
            })
          }
         </div>
        

        </section>
    )
}