import { motion } from "motion/react";

const classicEase = [0.16, 1, 0.3, 1];

const educationData = [
  {
    degree: "B.Tech CSE",
    institution: "Vignan's Institute of Engineering for Women, JNTU-GV",
    year: "2023 — 2027",
    score: "CGPA: 81% Equivalent",
    active: true
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2021 — 2023",
    score: "86.1%",
    active: false
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya Techno School",
    year: "2021",
    score: "100%",
    active: false
  }
];

export default function Education() {
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
              staggerChildren: 0.15,
            }
          }
        }}
        className="p-6 md:p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-xl relative overflow-hidden"
      >
        {/* Decorative backdrop mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent pointer-events-none" />

        <motion.h3 
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: classicEase } }
          }}
          className="text-xs font-bold text-white uppercase tracking-widest mb-8"
        >
          Education Timeline
        </motion.h3>
        
        <div className="space-y-8 relative border-l border-zinc-800/80 ml-2 pl-8 md:pl-10 pb-4">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  transition: { 
                    duration: 0.7, 
                    ease: classicEase 
                  } 
                }
              }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative group cursor-default"
            >
              {/* Highlight connector ring */}
              <motion.div 
                className={`absolute -left-[39px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  item.active 
                    ? 'bg-white border-2 border-[#050505] shadow-[0_0_8px_rgba(255,255,255,0.6)]' 
                    : 'bg-zinc-800 group-hover:bg-zinc-500'
                }`}
                whileHover={{ scale: 1.25 }}
              />

              <p className="text-xs text-zinc-500 font-mono mb-1.5 tracking-wider font-semibold uppercase group-hover:text-zinc-400 transition-colors">
                {item.year}
              </p>
              
              <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors flex items-center gap-2">
                {item.degree}
                {item.active && (
                  <span className="text-[10px] uppercase font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-normal mb-0.5">
                    Current
                  </span>
                )}
              </h4>
              
              <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {item.institution}
              </p>
              
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-mono">
                {item.score}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
