import { NavLink, Route, Routes} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/header";
import Proyectos from "./components/proyectos";
import ProyectosId from "./components/proyectosId";
import "./index.css"; // Importa el archivo de estilos CSS
import { useLocation } from "react-router-dom";
function App() {
    //usar location es dinamico no como el objeto history.path
    //cada vez que cambia location se hace la transision
    const location  = useLocation()
  return (

    
  
      <div className="w-full h-screen flex fondo">
        <Header />

        <nav className="fondo-cont-100 w-1/6 flex flex-col items-center justify-center m-4 rounded-lg">
          <ul className="w-full flex flex-col text-zinc-400">
            <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "isActive" : undefined}>
              <li className="text-center py-3">Sobre mi</li>
            </NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "isActive" : undefined}>
              <li className="text-center py-3">Proyectos</li>
            </NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "isActive" : undefined}>
              <li className="text-center py-3">Contacto</li>
            </NavLink>
          </ul>
        </nav>
         
         <div className="w-6/12 h95">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={400}>
            <Routes>
              <Route  path="/sobre-mi" element={<div>Sobre mi</div>} />
              <Route  path="/proyectos" element={<Proyectos />} />
              <Route  path="/proyectos/:id" element={<ProyectosId />} />
              <Route  path="/contacto" element={<div>Contacto</div>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
  
  );
}

export default App;