import { motion } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Classic transition curve (Apple / Linear-like power cubic easeout)
const classicEase = [0.16, 1, 0.3, 1];

export default function Home() {
  // Replace this URL with your actual profile photo URL
  const profilePhotoUrl = "https://files.catbox.moe/xq6g1f.jpeg";

  return (
    <div className="min-h-[70vh] flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-20">
      {/* Content Side with unified sequence */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            }
          }
        }}
        className="flex-1 w-full"
      >
        <motion.span 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: classicEase } }
          }}
          className="text-zinc-500 uppercase tracking-widest hidden md:block mb-4 text-xs font-bold font-sans"
        >
          Welcome
        </motion.span>

        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: classicEase } }
          }}
          className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-6 leading-tight text-white"
        >
          Hi, I'm Suhashritha
        </motion.h1>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: classicEase } }
          }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mb-12"
        >
          3rd Year B.Tech Student 
        </motion.p>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: classicEase } }
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-zinc-100 text-black rounded-full text-xs font-bold transition-all uppercase tracking-wider w-full sm:w-auto shadow-lg hover:shadow-white/10"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-zinc-950 border border-zinc-850 hover:bg-zinc-900 text-white rounded-full text-xs font-bold transition-all uppercase tracking-wider w-full sm:w-auto shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Interactive Frame for Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -6, 0] // Gentle periodic breathing/float animation
        }}
        transition={{ 
          opacity: { duration: 0.8, ease: classicEase, delay: 0.25 },
          scale: { duration: 0.8, ease: classicEase, delay: 0.25 },
          y: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }
        }}
        className="w-48 h-48 md:w-80 md:h-80 shrink-0 relative group"
      >
        <motion.div 
          whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
          style={{ perspective: 1000 }}
          className="w-full h-full rounded-full md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/50 flex flex-col items-center justify-center relative z-10 transition-all duration-500 shadow-2xl group-hover:border-zinc-700/80 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {profilePhotoUrl ? (
            <motion.img 
              src={profilePhotoUrl} 
              alt="Suhashritha Mallapureddy" 
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: classicEase }}
            />
          ) : (
            <>
              <ImageIcon size={48} className="text-zinc-700 mb-4 hidden md:block" />
              <p className="text-xs text-zinc-500 font-mono text-center px-6">
                Replace <code className="text-indigo-400">profilePhotoUrl</code> in Home.tsx with your photo
              </p>
            </>
          )}
        </motion.div>
        
        {/* Decorative backdrop aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full md:rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700 -z-10 mt-6" />
      </motion.div>
    </div>
  );
}
