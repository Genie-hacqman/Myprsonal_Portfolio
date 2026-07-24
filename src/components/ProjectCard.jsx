import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// ProjectCard renders a flip-style preview for each portfolio item.
const ProjectCard = ({ project }) => {
  return (
    <div className="w-135] perspective-[1000px]">
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-105"
      >
        {/* Front side shows a compact overview of the project. */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#1b233d] p-1.25 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-37.5 overflow-hidden rounded-[15px] bg-[linear-gradient(45deg,#049fbb_0%,#50f6ff_100%)]">
            <div className="absolute left-0 top-0 h-7.5 w-32.5 rounded-br-[10px] bg-[#1b233d] skew-x-40 shadow-[-10px_-10px_0_0_#1b233d]" />
            <div className="absolute left-0 top-7.5] h-3.75 w-3.75 rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
            <div className="absolute top-0 left-0 flex h-7.5 w-full items-center justify-between px-3.75">
              <div className="flex h-full items-center justify-center rounded-full bg-white/20 px-3 text-sm font-semibold text-white backdrop-blur-sm">
                {project.category}
              </div>
              <div className="flex h-full items-center gap-1.5">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex h-full items-center justify-center rounded-full bg-white/80 p-2 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiGithub />
                </a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex h-full items-center justify-center rounded-full bg-white/80 p-2 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute inset-x-0 bottom-0 h-21.25 w-full object-cover opacity-90" />
          </div>

          <div className="mt-3.75 rounded-[15px] bg-[#142039] p-[10px_5px_15px] text-center">
            <span className="block text-[20px] font-extrabold uppercase tracking-[2px] text-white">{project.title}</span>
            <p className="mt-3 text-[15px] leading-6 text-[#aadef3b8]">{project.description}</p>

            <div className="mt-5 flex flex-col gap-3 text-[11px] leading-6 text-[#aadef3b8]">
              <div className="rounded-[10px] px-2 py-1">
                <span className="block text-[14px] font-semibold text-white">Stack</span>
                <span className="block">{project.techStack.join(', ')}</span>
              </div>
              <div className="rounded-[10px] border-t border-white/10 px-2 py-1">
                <span className="block text-[14px] font-semibold text-white">Category</span>
                <span className="block">{project.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back side reveals the full project details and links. */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#10172a] p-1.25 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full rounded-[15px] border border-white/10 bg-[#131b2f] p-5 text-white">
            <span className="block text-[20px] font-bold uppercase tracking-[1px] text-cyan-300">{project.title}</span>
            <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 space-y-4 text-base text-slate-300">
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[12px] uppercase tracking-[0.2em] text-cyan-300">Tech Stack</span>
                <span className="block mt-2 text-base">{project.techStack.join(' • ')}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[14px] uppercase tracking-[0.2em] text-cyan-300">Links</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
