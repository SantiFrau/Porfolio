export default function Contacto (){

    
    const ContactButton = () => {
        const email = "tucorreo@gmail.com";
        const subject = encodeURIComponent("Asunto del correo");
        const body = encodeURIComponent("Contenido del correo");
      
        const mailtoLink = `http://mailto:${email}?subject=${subject}&body=${body}`;
       //http://mailto:santiagofrau3@gmail.com?subject=a&body=a
        return (
          <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
            <button>Contactar por Gmail</button>
          </a>
        );
      };
      


    return (
        <section className="w-full h95 flex flex-col items-center justify-center fondo-cont gap-3 rounded-lg">

          < h3 className="text-white font-bold text-2xl">Contacto</h3>
           
           <ContactButton></ContactButton>
        </section>
        
    )
}