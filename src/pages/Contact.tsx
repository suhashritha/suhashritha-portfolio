import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const classicEase = [0.16, 1, 0.3, 1];

export default function Contact() {
  const contactInfo = [
    { label: "Email", value: "suhashritha@gmail.com", href: "mailto:suhashritha@gmail.com", icon: <Mail size={14}/> },
    { label: "Phone", value: "+91 7569752696", href: "tel:+917569752696", icon: <Phone size={14}/> },
    { label: "Location", value: "Visakhapatnam, AP", href: "#", icon: <MapPin size={14}/> },
    { label: "LinkedIn", value: "Suhashritha Mallapureddy", href: "https://www.linkedin.com/in/suhashritha-mallapureddy-291aa72b7", icon: <Linkedin size={14}/> },
    { label: "GitHub", value: "suhashritha", href: "https://github.com/suhashritha", icon: <Github size={14}/> },
  ];

  return (
    <div className="max-w-xl">
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
              staggerChildren: 0.08,
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
          className="text-xs font-bold text-white uppercase tracking-widest mb-6"
        >
          Contact Direct
        </motion.h3>
        
        <div className="space-y-1">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    ease: classicEase 
                  } 
                }
              }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <a
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex justify-between items-center py-3 border-b border-zinc-800/50 hover:bg-zinc-900/40 px-3 -mx-2 rounded-lg transition-all duration-300 group"
              >
                <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-widest flex items-center gap-2">
                  <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{info.icon}</span>
                  {info.label}
                </span>
                <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                  {info.value}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
