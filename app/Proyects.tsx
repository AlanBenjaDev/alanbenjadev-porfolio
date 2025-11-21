"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const imagenes = [
  "/projects/principal.jpeg",
  "/projects/productos.jpeg",
  "/projects/productosDetail.jpeg",
  "/projects/carrito.jpeg",
  "/projects/carrito2.jpeg",
];
export default function Projects() {  const projects = [
 {
 title: "Ecommerce Full Stack",
 description:
 "Ecommerce completo con autenticación,tokens JWT, carrito peristente, base de datos MySQL, pasarela de pago en Mercado Pago",
 

 images: imagenes,
tech: ["Node.js", "Express", "MySQL", "Next.js", "TailwindCSS"],
 demo: "https://ecommerce-node-next.vercel.app/",
 code: "https://github.com/AlanBenjaDev/ecommerce-node-next",
  },
  ];

  return (
  <section className="py-32 bg-[#0A192F]" id="projects">
 <motion.h2
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
 className="text-4xl md:text-5xl font-bold text-center text-[#64FFDA] mb-16"
 >
  Proyectos Destacados
  </motion.h2>

 <div className="max-w-6xl mx-auto px-4">
 <p className="text-lg text-center text-[#CCD6F6]/90 max-w-3xl mx-auto mb-16 leading-relaxed">
 Todos estos proyectos estan alojados con servicios gratuitos como Render,Railway y Vercel.Por esta razón, es posible que la primera carga demore entre 5 y 45 segundos mientras el servidor inicia.
 Una vez iniciado, el proyecto funciona normalmente.
 </p>

 <div className="grid gap-16">
 {projects.map((project, index) => (
 <motion.div
  key={index}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}
  className="bg-[#112240] rounded-3xl p-6 md:p-10 shadow-xl border border-[#64FFDA]/10 hover:border-[#64FFDA]/30 transition-all duration-300"
 >
             
<Swiper
  
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={5}
  slidesPerView={2}
  

  className="rounded-2xl shadow-lg mb-12 w-full"
>
    {project.images.map((img, i) => (
        <SwiperSlide key={i}>
          
            <div className="rounded-xl overflow-hidden  h-[720px] w-[930px]">
                <img
  src={img}
  alt={project.title}

  className="w-full h-full "
/>
            </div>
        </SwiperSlide>
    ))}
</Swiper>

            
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#64FFDA]">
                  {project.title}
                </h3>

                <p className="text-[#CCD6F6]/90 text-lg max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1 rounded-full bg-[#64FFDA]/10 text-[#64FFDA] text-sm font-semibold border border-[#64FFDA]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-full hover:bg-[#5ee6c8] transition-all duration-300 shadow-lg"
                  >
                    Ver Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    className="px-6 py-3 border-2 border-[#64FFDA] text-[#64FFDA] font-semibold rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}