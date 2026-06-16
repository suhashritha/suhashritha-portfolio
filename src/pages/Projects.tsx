import { motion } from "motion/react";
import { ExternalLink, Github, Layers, CheckCircle2 } from "lucide-react";

const classicEase = [0.16, 1, 0.3, 1];

export default function Projects() {
  const allProjects = [
    {
      title: "AI-Based Exam Paper Evaluator",
      summary: "An intelligent AI-powered platform designed to automate exam paper evaluation. The system enables teachers to upload answer sheets, evaluate responses based on key concepts, generate marks automatically, and manage student performance efficiently. Students can access their results, SGPA, and CGPA through a dedicated dashboard.",
      highlights: [
        "AI-Based Answer Evaluation",
        "Teacher & Student Dashboard",
        "Automatic Marks Generation", 
        "SGPA & CGPA Calculator",
        "Answer Sheet Upload System",
        "Performance Analytics"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "AI/ML", "Supabase"],
      image: "https://files.catbox.moe/zty846.webp",
      liveUrl: "https://academic-paper-evaluator.lovable.app",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Predicting Health Conditions",
      summary: "Empirical diagnostic predictive analytics utilizing patient databases.",
      highlights: ["Health Data Analysis", "Disease Prediction", "Early Detection Support"],
      techStack: ["Python", "Exploratory Data Analysis"],
      image: "https://files.catbox.moe/nnczqx.jpg",
      liveUrl: "https://health-insight-navigator-app.lovable.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Vasuki Vivah",
      summary: "Premium e-commerce platform curating exclusive bridal lehengas and wedding jewelry.",
      highlights: ["Bridal Lehengas", "Jewelry Search", "Customer Portal"],
      techStack: ["React", "E-Commerce"],
      image: "https://files.catbox.moe/2kmrzv.png",
      liveUrl: "https://vasuki-vivah.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Deha Store",
      summary: "Curated lifestyle boutique spanning quality jewelry, tech accessories, and cases.",
      highlights: ["Jewelry Catalog", "Phone Accessories", "General Merchandise"],
      techStack: ["E-Commerce", "Web Development"],
      image: "https://files.catbox.moe/dqkr47.png",
      liveUrl: "https://deha-store.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "StudySyncPro",
      summary: "Dynamic digital workspace enabling student collaboration and collective learning loops.",
      highlights: ["Collaborative Learning", "Resource Syncing", "Group Learn Modules"],
      techStack: ["Tailwind CSS", "React", "Collaboration Tools"],
      image: "https://files.catbox.moe/4qego5.png",
      liveUrl: "https://studysyncpro.vercel.app/",
      githubUrl: "",
      featured: false,
    }
  ];

  const featuredProject = allProjects.find(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);

  const handleCardClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
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
      >
        {/* Featured Project Showcase */}
        {featuredProject && (
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: classicEase } }
            }}
            className="mb-12"
          >
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Featured Innovation</h2>
            
            {/* Glassmorphic Project Card with Glow on Hover */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => handleCardClick(featuredProject.liveUrl)}
              className="group relative cursor-pointer bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Ambient Glow Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                {/* Banner Image wrapper */}
                <div className="md:col-span-5 relative h-48 md:h-full min-h-[220px] bg-zinc-850/20 rounded-xl overflow-hidden border border-zinc-800/80">
                  <div className="absolute inset-0 bg-zinc-950/25 group-hover:bg-transparent transition-all duration-300 z-10" />
                  <motion.img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-104 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-[#ffffff] border border-zinc-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-20 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Highlight
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl font-bold font-sans text-white group-hover:text-white transition-colors">
                        {featuredProject.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {featuredProject.summary}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {featuredProject.highlights.map((highlight, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-2 text-zinc-400 text-xs"
                        >
                          <CheckCircle2 size={12} className="text-white shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] bg-zinc-900 border border-zinc-805 text-zinc-400 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {featuredProject.githubUrl && (
                        <motion.button
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(featuredProject.githubUrl);
                          }}
                          className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
                        >
                          <Github size={12} />
                          GitHub
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(featuredProject.liveUrl);
                        }}
                        className="flex items-center gap-2 bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-zinc-101 transition-colors cursor-pointer shadow-lg"
                      >
                        Live Demo
                        <ExternalLink size={12} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Regular Projects Catalog */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
        >
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Projects Portfolio</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.98, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: classicEase } }
                }}
                whileHover={{ 
                  y: -5, 
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  backgroundColor: "rgba(255, 255, 255, 0.01)"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group bg-zinc-900/20 border border-zinc-800 p-5 rounded-2xl flex flex-col transition-all duration-300 shadow-lg relative cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.003] to-transparent pointer-events-none rounded-2xl" />
                
                <div className="relative w-full h-36 bg-zinc-855/35 rounded-lg mb-4 overflow-hidden border border-zinc-800/60">
                  <div className="absolute inset-0 bg-zinc-950/25 group-hover:bg-transparent transition-all duration-300 z-10" />
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700"
                  />
                </div>
                
                <h4 className="text-white text-sm font-bold mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                  {project.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-zinc-800/40 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    {project.techStack?.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-1.5 py-0.5 rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(project.githubUrl);
                        }}
                        className="px-2.5 py-1 bg-zinc-900 border border-zinc-805 text-zinc-400 text-[10px] font-bold rounded-full hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Github size={10} />
                      </motion.button>
                    )}
                    {project.liveUrl && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(project.liveUrl);
                        }}
                        className="px-3 py-1 bg-white text-black text-[10px] font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
                      >
                        VIEW CASE
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
