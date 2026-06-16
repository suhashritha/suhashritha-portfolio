import { motion } from "motion/react";

const classicEase = [0.16, 1, 0.3, 1];

export default function About() {
  const highlightPills = [
    "Leadership", "Data Analytics", "BI", "Problem Solving", "AI", "Software Eng"
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
              delayChildren: 0.1 
            } 
          }
        }}
        className="p-6 md:p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-xl relative overflow-hidden"
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

        <motion.h3 
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: classicEase } }
          }}
          className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center justify-between"
        >
          Profile <span>01</span>
        </motion.h3>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: classicEase } }
          }}
          className="text-sm md:text-base leading-relaxed text-zinc-400 mb-6 max-w-2xl"
        >
          I am a <strong className="text-white font-semibold">3rd Year B.Tech Student</strong> actively exploring the intersections of <span className="text-white font-semibold">Artificial Intelligence, Data Analytics</span>, and Software Engineering. I enjoy taking raw, unstructured problems and turning them into intelligent, data-driven systems.
        </motion.p>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: classicEase } }
          }}
          className="text-sm md:text-base leading-relaxed text-zinc-400 mb-8 max-w-2xl"
        >
          Currently, I am looking for internship opportunities to gain industry experience, apply my technical skills to real-world challenges, and collaborate with forward-thinking teams.
        </motion.p>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
          }}
          className="flex gap-2 flex-wrap"
        >
          {highlightPills.map(pill => (
            <motion.span 
              key={pill} 
              variants={{
                hidden: { opacity: 0, scale: 0.93, y: 5 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: classicEase } }
              }}
              whileHover={{ y: -2, borderColor: "#ffffff", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.03)" }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="text-[10px] md:text-xs text-zinc-300 font-medium bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded uppercase tracking-wider cursor-default transition-colors"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
