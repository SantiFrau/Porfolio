
import { useState } from "react";

export default function Contacto (){

    
    const ContactButton = () => {
        const email = "santiagofrau3@gmail.com";
        const [subject,setSubject] = useState("")
        const [msj,setMsj] = useState("")
      
        const mailtoLink = `mailto:${email}?subject=Mensaje de ${subject}&body=${msj}`;

        const ig = "https://www.instagram.com/santi_frau_/"
        
        
      

        return (<>
         <form action="#" className="flex flex-col items-center justify-center gap-3">
          <input type="email" id="email" value={subject} 
          placeholder="Email"
           onChange={(e)=>{setSubject(e.target.value)}}
           className="fondo-cont-100 rounded-xl w-full p-3" /> 
         
          <textarea name=""  cols={30} rows={8}
          style={{resize:"none"}}
          value={msj}
          onChange={(e)=>{setMsj(e.target.value)}}
          placeholder="Mensaje"
          className="fondo-cont-100 rounded-xl w-full p-3"
          ></textarea>
         </form>
         <div className="w-full flex justify-center items-center">

           <a className="bg-black p-3 rounded-full hover:text-zinc-500 hover:bg-zinc-800" href={mailtoLink} target="_blank" rel="noopener noreferrer">
              Contactar por gmail
            </a>
            </div>

           <div className="md:flex-nowrap flex-wrap w-full px-12 flex flex-row justify-between gap-2 items-end">
           <p><p className="font-bold text-lg">Email :</p> santiagofrau3@gmail.com</p>
    
              <a className="font-bold text-lg hover:text-zinc-600" href="#">Instagram</a>
             
           </div>

        
          
           </>
        );
      };
      


    return (
        <section className="py-10 w-full h95 flex flex-col items-center justify-center fondo-cont gap-3 rounded-lg">

          < h3 className="text-white font-bold text-2xl">Contacto</h3>
           
           <ContactButton></ContactButton>
        </section>
        
    )
}