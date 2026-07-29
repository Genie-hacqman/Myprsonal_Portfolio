import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => setIsFlipped((prev) => !prev);

  return (
    <div className="h-full w-full perspective-[1000px]">
      <motion.div
        whileHover={{ rotateY: 180 }}
        whileTap={{ scale: 0.98 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{ transformStyle: 'preserve-3d', touchAction: 'manipulation' }}
        className="relative h-full min-h-112 cursor-pointer sm:min-h-120"
        onTap={toggleCard}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleCard();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Toggle details for ${project.title}`}
      >
        {}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#1b233d] p-1.25 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-37.5 overflow-hidden rounded-[15px] bg-[linear-gradient(45deg,#049fbb_0%,#50f6ff_100%)]">
            <div className="absolute left-0 top-0 h-7.5 w-32.5 rounded-br-[10px] bg-[#1b233d] skew-x-40 shadow-[-10px_-10px_0_0_#1b233d]" />
            <div className="absolute left-0 top-7.5] h-3.75 w-3.75 rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
            <div className="absolute top-0 left-0 z-20 flex h-7.5 w-full items-center justify-between px-3.75">
              <div className="z-10 flex h-full items-center justify-center rounded-full border border-cyan-300/40 bg-[#07111f]/95 px-3 py-1 text-sm font-black tracking-[0.2em] text-[#f8fbff] shadow-[0_0_18px_rgba(0,0,0,0.35)] backdrop-blur-md">
                {project.category}
              </div>
              <div className="flex h-full items-center gap-1.5">
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-2 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiGithub />
                </a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-2 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute inset-x-0 bottom-0 h-21.25 w-full object-cover opacity-90" />
          </div>

          <div className="mt-3.75 rounded-[15px] bg-[#142039] p-[10px_5px_15px] text-center">
            <span className="block text-[20px] font-extrabold uppercase tracking-[2px] text-white">{project.title}</span>
            <p className="mt-3 text-[15px] leading-6 text-slate-100">{project.description}</p>

            <div className="mt-5 flex flex-col gap-3 text-[11px] leading-6 text-slate-200">
              <div className="rounded-[10px] bg-white/8 px-2 py-2">
                <span className="block text-[14px] font-semibold text-white">Stack</span>
                <span className="block">{project.techStack.join(', ')}</span>
              </div>
              <div className="rounded-[10px] border border-cyan-400/20 bg-[#0f172a]/95 px-2 py-2 shadow-[0_0_16px_rgba(0,0,0,0.25)]">
                <span className="block text-[14px] font-semibold text-cyan-200">Category</span>
                <span className="mt-1 block font-semibold text-[#f8fbff]">{project.category}</span>
              </div>
            </div>
          </div>
        </div>

        {}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#10172a] p-1.25 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full rounded-[15px] border border-white/10 bg-[#131b2f] p-5 text-white">
            <span className="block text-[20px] font-bold uppercase tracking-[1px] text-cyan-300">{project.title}</span>
            <p className="mt-4 text-base leading-7 text-slate-100">{project.description}</p>
            <div className="mt-6 space-y-4 text-base text-slate-100">
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-3">
                <span className="block text-[12px] uppercase tracking-[0.2em] text-cyan-200">Tech Stack</span>
                <span className="mt-2 block text-base">{project.techStack.join(' • ')}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-3">
                <span className="block text-[14px] uppercase tracking-[0.2em] text-cyan-200">Links</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
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
