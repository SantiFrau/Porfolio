import { NavLink, Route, Routes} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/header";
import Proyectos from "./components/proyectos";
import ProyectosId from "./components/proyectosId";
import "./index.css"; // Importa el archivo de estilos CSS
import { useLocation } from "react-router-dom";
import About from "./components/about";
import Contacto from "./components/contacto";

function App() {
    //usar location es dinamico no como el objeto history.path
    //cada vez que cambia location se hace la transision
    const location  = useLocation()
    
    
  return (

    
  
    <div className={`w-full p-3 min-h-screen max-h-full lg:h-screen flex flex-col lg:flex-row fondo gap-5 items-center justify-center`}>
        <div className="lg:w-3/12 h95 w-full">
        <Header />
        </div>

        <nav className="fondo-cont-100 w-full lg:w-1/6 h95 flex flex-col items-center justify-center rounded-lg">
          <ul className="w-full flex flex-row justify-around	 md:flex-col text-zinc-400">
            <NavLink to="/Portafolio/sobre-mi" className={({ isActive }) => isActive ? "isActive rounded-lg" : undefined}>
              <li className="text-center px-5 lg:px-0 py-3">Sobre mi</li>
            </NavLink>
            <NavLink to="/Portafolio/proyectos" className={({ isActive }) => isActive ? "isActive rounded-lg" : undefined}>
              <li className="text-center px-5 lg:px-0 py-3">Proyectos</li>
            </NavLink>
            <NavLink to="/Portafolio/contacto" className={({ isActive }) => isActive ? "isActive rounded-lg" : undefined}>
              <li className="text-center px-5 lg:px-0 py-3">Contacto</li>
            </NavLink>
          </ul>
        </nav>
         
         <div className="lg:w-6/12 h95 w-full">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={300} mountOnEnter unmountOnExit >
            <Routes>
              <Route  path="/Portafolio/sobre-mi" element={<About></About>} />
              <Route  path="/Portafolio/proyectos" element={<Proyectos />} />
              <Route  path="/Portafolio/proyectos/:id" element={<ProyectosId />} />
              <Route  path="/Portafolio/contacto" element={<Contacto></Contacto>} />
            
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
  
  );
}

export default App;