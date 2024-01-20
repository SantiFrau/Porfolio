export default function Contacto (){

    
    const ContactButton = () => {
        const email = "santiagofrau3@gmail.com";
        
      
        const mailtoLink = `mailto:${email}`;
        const ig = "https://www.instagram.com/santi_frau_/"
                //mailto:santiagofrau3@gmail.com?subject=Hola&body=mensaje


        return (<>
           <div className="flex-wrap w-full px-12 flex flex-row justify-start gap-5 items-end">
            <p>
             <p className="font-bold text-lg ">Instagram :</p>
              <a href={ig}>{ig}</a>
             </p>
             
           </div>
        <div className="flex-wrap w-full px-12 flex flex-row justify-between gap-5 items-end">
           <p><p className="font-bold text-lg">Email :</p> santiagofrau3@gmail.com</p>
           <a className="bg-black p-3 rounded-full hover:text-zinc-500 hover:bg-zinc-800" href={mailtoLink} target="_blank" rel="noopener noreferrer">
            Contactar por gmail
           </a>
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