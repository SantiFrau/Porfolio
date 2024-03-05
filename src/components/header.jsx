import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ig = "https://www.instagram.com/santi.prog/"

export default function Header(){


    return(
        <header className="w-full h-full gap-3 flex flex-row flex-col items-center justify-center fondo-cont-100 rounded-lg">
            
            <div className="md:p-0 p-5">
             <img style={{aspectRatio:1/1}} className="md:w-32 w-24 object-cover rounded-full" src="public/media/perfil.webp" alt="" />
             </div>
             <div className="flex gap-12 md:gap-5">
               <div className="relative bottom-7 hover:bg-zinc-600 p-1 rounded-full">
                <a href="https://github.com/SantiFrau" target='_blank' rel="noreferrer">
                  <img className="bg-zinc-600 w-8 rounded-full" src="/Portafolios/public/icons/github.webp" alt="icono de github" />
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
                   <img className='w-8 rounded-full' src="/Portafolios/public/icons/ig.webp" alt="icono de instagram" />
                  
                  </a>
              </div>
             </div>

             <h1 className="text-white font-bold text-4xl p-3">
                Santiago Frau
             </h1>
            
             <h2 className="text-zinc-300 p-3">
               Desarrollador web Frontend
             </h2>
        </header>

    )
}