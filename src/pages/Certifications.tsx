import { motion } from "motion/react";

const classicEase = [0.16, 1, 0.3, 1];

export default function Certifications() {
  const certs = [
    { title: "Generative AI", issuer: "Coursera" },
    { title: "DBMS", issuer: "NPTEL" },
    { title: "AI Ready", issuer: "Accenture" },
    { title: "AI Fundamentals", issuer: "Accenture" },
    { title: "Exploratory Data Analysis – Level 2", issuer: "Skill Badge" },
    { title: "Acquiring Data – Level 1", issuer: "Skill Badge" },
    { title: "Infosys Springboard Program", issuer: "Infosys" },
    { title: "Power BI Workshop", issuer: "Bootcamp" },
    { title: "AI Ideathon Certification", issuer: "Hackathon" },
  ];

  return (
    <div className="max-w-4xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: classicEase,
              staggerChildren: 0.05,
            }
          }
        }}
        className="p-6 md:p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-xl relative overflow-hidden"
      >
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent pointer-events-none" />

        <motion.h3 
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: classicEase } }
          }}
          className="text-xs font-bold text-white uppercase tracking-widest mb-8"
        >
          Certifications Matrix
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 10 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.6, 
                    ease: classicEase 
                  } 
                }
              }}
              whileHover={{ 
                y: -4, 
                borderColor: "rgba(255, 255, 255, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.02)"
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-xl flex flex-col justify-between cursor-default group h-28 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.003] to-transparent pointer-events-none rounded-xl" />
              
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 mb-2" 
                layoutId={`bullet-${index}`}
              />
              
              <div>
                <h4 className="font-bold text-white/90 group-hover:text-white text-sm mb-1 leading-tight transition-colors">
                  {cert.title}
                </h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-semibold">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
