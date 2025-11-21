"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const icons = [
  { id: "html", icon: "logos:html-5", name: "HTML5" },
  { id: "css", icon: "logos:css-3", name: "CSS3" },
  { id: "react", icon: "logos:react", name: "React" },
  { id: "node", icon: "logos:nodejs", name: "Node.js" },
  { id: "mysql", icon: "logos:mysql", name: "MySQL" },
  { id: "tailwind", icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
  { id: "vite", icon: "logos:vitejs", name: "Vite" },
  { id: "js", icon: "logos:javascript", name: "JavaScript" },
  { id: "git", icon: "logos:git", name: "Git" },
  { id: "github", icon: "simple-icons:github", name: "GitHub" },
  { id: "typescript", icon: "logos:typescript-icon", name: "TypeScript" },
  { id: "nextjs", icon: "logos:nextjs-icon", name: "Next.js" },
];

export default function Stack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-24 bg-[#0A192F]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#64FFDA] mb-12">
          Mi Stack de Tecnologías
        </h2>
   <p className="text-lg text-center text-[#CCD6F6]/90 max-w-3xl mx-auto mb-16 leading-relaxed">
  Estas son las herramientas y tecnologías que utilizo a diario para construir 
  aplicaciones Full Stack con un enfoque en la experiencia del usuario, 
  el rendimiento y la integración fluida de soluciones modernas.
</p>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {icons.map(({ id, icon, name }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-[#172A45]/80 backdrop-blur-md p-6 rounded-2xl shadow-md 
                         flex flex-col items-center justify-center hover:shadow-[0_0_15px_#00B8D9]
                         border border-transparent hover:border-[#00B8D9] 
                         transition-all duration-300"
            >
              <Icon icon={icon} className="h-12 w-12 mb-2" />
              <p className="text-sm font-semibold text-[#CCD6F6]">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
