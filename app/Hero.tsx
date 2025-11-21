"use client";
import Image from "next/image"
import miFoto from "./assets/myphoto.png"
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A192F] flex items-center justify-center px-6 md:px-16">
      
      <div className="absolute inset-0 bg-black/20 z-0"></div>

     
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl w-full">
        

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          
          
          <TypeAnimation
            sequence={[
              "Hola, soy Alan",
              2000,
              "Desarrollador Full Stack", 
              2000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#64FFDA] leading-tight" // Agregado 'leading-tight' para buena tipografía
          />
          
          <p className="text-xl sm:text-2xl md:text-3xl text-[#CCD6F6] font-light max-w-lg mt-2">
            Transforma tus ideas en productos funcionales y escalables.
          </p>

          <div className="space-x-4 mt-4"> 
            
            <a 
              href="https://drive.google.com/uc?export=download&id=1L6BwzbjlbuoYxZwPylpgYEFTprgUpcrH"
              download  
            >
               <button className="px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-full shadow-md hover:bg-[#5EEAD4] hover:shadow-[0_0_15px_#64FFDA] transition-all duration-300"
>
            Descargar CV
          </button>
            </a>

           <a 
              href="https://drive.google.com/file/d/1L6BwzbjlbuoYxZwPylpgYEFTprgUpcrH/view?usp=drivesdk"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 border-2 border-[#00B8D9] text-[#00B8D9] font-semibold rounded-full transition-all duration-300 hover:bg-[#00B8D9] hover:text-white">
            Ver mi CV Online
          </button>
            </a>
          </div>
        </div>

  
       <div className="relative w-44 h-36 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/40 bg-gradient-to-tr from-[#112240] to-[#0A192F]">

  <Image
    src={miFoto}
    alt="Foto de Alan Andrada"
    className="w-full h-full object-cover"
    priority 
  />
</div>

      </div>
    </section>
  )
}