export default function Header(){


    return(
        <header className="w-3/12 gap-7 flex flex-col items-center justify-center fondo-cont-200 p-3 m-4 rounded-lg">
            
             <img className="w-32 rounded-full" src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
             <h1 className="text-white font-bold text-4xl">
                Santiago Frau
             </h1>
            
             <h2 className="text-zinc-300">
               Desarrollador web Frontend
             </h2>
        </header>

    )
}