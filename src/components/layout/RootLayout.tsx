import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, User, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

// Main profile photo URL used for the navigation brand
const sidebarPhotoUrl = "https://files.catbox.moe/xq6g1f.jpeg";

const navItems = [
  { path: "/", label: "Overview" },
  { path: "/about", label: "Profile" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/certifications", label: "Certifications" },
  { path: "/leadership", label: "Leadership" },
  { path: "/contact", label: "Contact" },
];

export function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans flex flex-col select-none relative">
      {/* Top Header Navigation (Unified for Desktop & Mobile) */}
      <header className="sticky top-0 w-full z-50 h-20 border-b border-zinc-900/80 bg-[#050505]/80 backdrop-blur-md flex items-center justify-between px-6 md:px-12">
        {/* Brand/Identity Area */}
        <NavLink to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white overflow-hidden transition-all group-hover:border-zinc-500 shrink-0">
            {sidebarPhotoUrl ? (
              <img src={sidebarPhotoUrl} alt="SM" className="w-full h-full object-cover" />
            ) : (
              <User size={16} className="text-zinc-650" />
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-semibold text-sm leading-tight tracking-tight group-hover:text-zinc-200 transition-colors">
              Suhashritha Mallapureddy
            </h1>
          </div>
        </NavLink>

        {/* Desktop Horizontal Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-zinc-950/40 p-1 rounded-full border border-zinc-900/40 relative">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4.5 py-2.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest relative transition-colors duration-300"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-0 bg-zinc-800/80 border border-zinc-700/50 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={cn(
                  "relative z-10 transition-colors duration-350",
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                )}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right Side Social Integration & Status */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Glowing Internship Badge */}
          <div className="flex items-center space-x-2 bg-zinc-950/60 px-3.5 py-1.5 rounded-full border border-zinc-900 text-[10px] text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse"></span>
            <span>Seeking Internships</span>
          </div>

          <div className="w-px h-6 bg-zinc-900"></div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://github.com/suhashritha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-950/45 hover:bg-zinc-900 border border-zinc-900 rounded-full text-zinc-500 hover:text-white transition-all flex items-center justify-center"
              title="GitHub Profile"
            >
              <Github size={14} />
            </a>
            <a 
              href="https://www.linkedin.com/in/suhashritha-mallapureddy-291aa72b7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-950/45 hover:bg-zinc-900 border border-zinc-900 rounded-full text-zinc-500 hover:text-white transition-all flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#050505]/98 backdrop-blur-xl px-6 py-8 flex flex-col justify-between"
          >
            <div className="space-y-1.5 overflow-y-auto">
              <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest pl-3 mb-4">Navigations</p>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all",
                      isActive 
                        ? "bg-zinc-900 text-white border border-zinc-800" 
                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30"
                    )
                  }
                >
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="border-t border-zinc-900 pt-6 space-y-4">
              <div className="flex items-center justify-between px-3">
                <span className="text-xs text-zinc-500">Status</span>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse"></span>
                  <span className="text-xs text-zinc-300">Seeking Internships</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a 
                  href="https://github.com/suhashritha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/suhashritha-mallapureddy-291aa72b7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Pane */}
      <main className="flex-1 w-full overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full px-6 py-10 md:px-12 md:py-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
