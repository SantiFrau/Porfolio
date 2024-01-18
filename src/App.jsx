import { NavLink, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Proyectos from "./components/proyectos"
import ProyectosId from "./components/proyectosId"


function App() {

  return (
    
   <div className="w-full h-screen flex fondo">
   <Header />
   
   
   <nav className="fondo-cont-100 w-1/6 flex flex-col items-center justify-center m-4 rounded-lg">
     <ul className="w-full flex flex-col text-zinc-400">
       <NavLink to="/sobre-mi" className={({isActive}) => isActive ? "isActive" : undefined }>
         <li className="text-center py-3">Sobre mi</li>
       </NavLink>
       <NavLink to="/proyectos" className={({isActive}) => isActive ? "isActive" : undefined }>
         <li className="text-center py-3">Proyectos</li>
       </NavLink>
       <NavLink to="/contacto" className={({isActive}) => isActive ? "isActive" : undefined }>
         <li className="text-center py-3">Contacto</li>
       </NavLink>
     </ul>
   </nav>
 




   <Routes>
     <Route path="/sobre-mi" />
     <Route path="/proyectos" element={<Proyectos></Proyectos>} />
     <Route path="/proyectos/:id" element={<ProyectosId></ProyectosId>} />
     <Route path="/contacto" />
   </Routes>
 </div>

  
  )
  
}

export default App
