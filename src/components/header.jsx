import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header(){


    return(
        <header className="w-full h-full gap-3 flex flex-row flex-col items-center justify-center fondo-cont-100 rounded-lg">
            
            <div className="md:p-0 p-5">
             <img className="md:w-32 w-24 rounded-full" src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
             </div>
             <div className="flex gap-12 md:gap-5">
               <div className="relative bottom-7 hover:bg-zinc-600 p-1 rounded-full">
                <a href="https://github.com/SantiFrau" target='_blank' rel="noreferrer">
                  <img className="bg-zinc-600 w-8 rounded-full" src="/Portafolios/public/icons/github.png" alt="icono de github" />
                </a>
               </div>

               <div className="flex items-center justify-center relative hover:bg-zinc-600 p-1 rounded-full">
                <a href="https://github.com/SantiFrau" target='_blank' rel="noreferrer">
                  <div className="w-8 rounded-full flex items-center justify-center">
                  <LinkedInIcon style={{color:"#0077B5" , fontSize:30}}></LinkedInIcon>
                  </div>
                </a>
               </div>

                <div className="relative bottom-7 hover:bg-zinc-600 p-1 rounded-full">
                  <a href="https://www.instagram.com/santi_frau_/" target='_blank' rel="noreferrer"> 
                   <img className='w-8 rounded-full' src="/Portafolios/public/icons/ig.png" alt="icono de instagram" />
                  
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