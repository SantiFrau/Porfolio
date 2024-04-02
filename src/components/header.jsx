import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ig = "https://www.instagram.com/santi.prog/"
import { useEffect ,useRef } from 'react';

export default function Header(){
   
  const animationRef = useRef(null);

  useEffect(() => {
    // Función para ejecutar la animación
    const runAnimation = () => {
      if (animationRef.current) {
        animationRef.current.classList.remove('text'); // Reiniciar la animación
        void animationRef.current.offsetWidth; // Reiniciar la animación
        animationRef.current.classList.add('text'); // Agregar la clase para iniciar la animación
      }
      setTimeout(runAnimation, 7000); // Volver a ejecutar la animación después de 5 segundos
    };

    // Iniciar la primera animación al montar el componente
    runAnimation();

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(runAnimation);
  }, []);

    return(
        <header className="w-full h-full gap-3 flex flex-row flex-col items-center justify-center fondo-cont-100 rounded-lg">
            
            <div className="md:p-0 p-5">
             <img style={{aspectRatio:1/1}} className="md:w-32 w-24 object-cover rounded-full" src="/Portafolio/public/media/perfil.webp" alt="" />
             </div>
             <div className="flex gap-12 md:gap-5">
               <div className="relative bottom-7 hover:bg-zinc-600 p-1 rounded-full">
                <a href="https://github.com/SantiFrau" target='_blank' rel="noreferrer">
                  <img className="bg-zinc-600 w-8 rounded-full" src="/Portafolio/public/icons/github.webp" alt="icono de github" />
                </a>
               </div>

               <div className="flex items-center justify-center relative hover:bg-zinc-600 p-1 rounded-full">
                <a href="https://www.linkedin.com/in/santiago-frau/" target='_blank' rel="noreferrer">
                  <div className="w-8 rounded-full flex items-center justify-center">
                  <LinkedInIcon style={{color:"#0077B5" , fontSize:30}}></LinkedInIcon>
                  </div>
                </a>
               </div>

                <div className="relative bottom-7 hover:bg-zinc-600 p-1 rounded-full">
                  <a href={ig} target='_blank' rel="noreferrer"> 
                   <img className='w-8 rounded-full' src="/Portafolio/public/icons/ig.webp" alt="icono de instagram" />
                  
                  </a>
              </div>
             </div>
             <div className='text-container'>
             <h1 ref={animationRef} className="text-white font-bold text-4xl p-3 text ">
                Santiago Frau
             </h1>
             </div>
            
             <h2 className="text-amber-400 shadow-y p-3">
               Desarrollador web Frontend
             </h2>
        </header>

    )
}