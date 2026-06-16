import { motion } from "motion/react";

const classicEase = [0.16, 1, 0.3, 1];

export default function Leadership() {
  const achievements = [
    {
      title: "Vice President — CSE Allied Branches",
      organization: "Academic Student Council",
      summary: "Led academic and co-curricular activities, coordinating student initiatives and working closely with faculty. Elected among 6 strong candidates."
    },
    {
      title: "Growth Officer — Coding Ninjas",
      organization: "Coding Ninjas Campus Chapter",
      summary: "Selected among top 20 students. Led growth campaigns on campus and organized awareness programs to foster professional coding culture."
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
              staggerChildren: 0.15,
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
          Leadership & Initiatives
        </motion.h3>
        
        <div className="space-y-6">
          {achievements.map((item, index) => (
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
              whileHover={{ 
                x: 4, 
                borderColor: "rgba(255, 255, 255, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.01)" 
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-xl cursor-default group"
            >
              <div className="flex gap-2.5 items-center mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                <h4 className="text-base font-bold text-white group-hover:text-white transition-colors leading-tight">
                  {item.title}
                </h4>
              </div>
              
              {item.organization && (
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3.5 ml-4 font-semibold font-mono">
                  {item.organization}
                </p>
              )}
              
              <p className="text-sm text-zinc-400 ml-4 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
