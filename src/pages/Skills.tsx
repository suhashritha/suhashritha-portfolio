import { motion } from "motion/react";

const classicEase = [0.16, 1, 0.3, 1];

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: "C, Python, Java, SQL",
    },
    {
      title: "Analytics",
      skills: "Power BI, EDA, Data Visualization",
    },
    {
      title: "Tools & Technologies",
      skills: "MS Office Suite, Jupyter, Git & GitHub",
    },
    {
      title: "Soft Skills",
      skills: "Leadership, Problem Solving, Communication, Adaptability, Teamwork",
    }
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
              staggerChildren: 0.1,
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
          Skills Matrix
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 10 },
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
                borderColor: "rgba(255, 255, 255, 0.18)", 
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.7)" 
              }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="p-5 bg-zinc-900/40 border border-zinc-900 rounded-xl cursor-default transition-colors relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.005] to-transparent pointer-events-none rounded-xl" />
              
              <p className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-widest mb-3 font-semibold font-mono">
                {category.title}
              </p>
              
              <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors leading-relaxed">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
