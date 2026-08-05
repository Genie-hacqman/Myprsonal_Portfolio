import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const HomeProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => setIsFlipped((prev) => !prev);

  return (
    <div className="mx-auto h-full w-[90%] max-w-[90%] perspective-[1000px]">
      <motion.div
        whileHover={{ rotateY: 180 }}
        whileTap={{ scale: 0.98 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{ transformStyle: 'preserve-3d', touchAction: 'manipulation' }}
        className="relative h-full min-h-[17rem] cursor-pointer sm:min-h-[18.5rem] lg:min-h-[18rem]"
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
        <div
          className="absolute inset-0 flex flex-col overflow-visible rounded-[18px] bg-[#1b233d] p-[0.55rem] shadow-[0_6px_18px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-24 overflow-hidden rounded-[14px] bg-[linear-gradient(45deg,#049fbb_0%,#50f6ff_100%)]">
            <div className="absolute left-0 top-0 h-6.5 w-28 rounded-br-lg bg-[#1b233d] skew-x-40 shadow-[-8px_-8px_0_0_#1b233d]" />
            <div className="absolute left-0 top-6.5 h-[0.8rem] w-[0.8rem] rounded-tl-[14px] shadow-[-5px_-5px_0_2px_#1b233d]" />
            <div className="absolute top-0 left-0 z-20 flex h-6.5 w-full items-center justify-between px-2.5">
              <div className="z-10 flex h-full items-center justify-center rounded-full border border-cyan-300/40 bg-[#07111f]/95 px-2 py-1 text-[10px] font-black tracking-[0.2em] text-[#f8fbff] shadow-[0_0_14px_rgba(0,0,0,0.35)] backdrop-blur-md">
                {project.category}
              </div>
              <div className="flex h-full items-center gap-1.5">
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-1 text-[#1b233d] transition hover:bg-white hover:text-white">
                  <FiGithub />
                </a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-1 text-[#1b233d] transition hover:bg-white hover:text-white">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute inset-x-0 bottom-0 h-12 w-full object-cover opacity-90" />
          </div>

          <div className="mt-2 flex-1 rounded-[13px] bg-[#142039] p-[6px_7px_9px] text-center">
            <span className="block text-[13px] font-extrabold uppercase tracking-[1.3px] text-white">{project.title}</span>
            <p
              className="mt-1 text-[11px] leading-5 text-slate-100"
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5rem' }}
            >
              {project.description}
            </p>

            <div className="mt-2 flex flex-col gap-1.5 text-[9px] leading-5 text-slate-200">
              <div className="rounded-lg bg-white/8 px-1.5 py-1.5">
                <span className="block text-[11px] font-semibold text-white">Stack</span>
                <span className="block">{project.techStack.join(', ')}</span>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-[#0f172a]/95 px-1.5 py-1.5 shadow-[0_0_12px_rgba(0,0,0,0.25)]">
                <span className="block text-[11px] font-semibold text-cyan-200">Category</span>
                <span className="mt-1 block font-semibold text-[#f8fbff]">{project.category}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-visible rounded-[18px] bg-[#10172a] p-[0.55rem] shadow-[0_6px_18px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full rounded-[13px] border border-white/10 bg-[#131b2f] p-3 text-white">
            <span className="block text-[13px] font-bold uppercase tracking-[1px] text-cyan-300">{project.title}</span>
            <p
              className="mt-2 text-xs leading-5 text-slate-100"
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5rem' }}
            >
              {project.description}
            </p>
            <div className="mt-2.5 space-y-1.5 text-sm text-slate-100">
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-1.5">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-cyan-200">Tech Stack</span>
                <span className="mt-1 block text-xs">{project.techStack.join(' • ')}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-1.5">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-cyan-200">Links</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2 py-1.5 text-[10px] font-semibold text-white transition hover:bg-cyan-500">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2 py-1.5 text-[10px] font-semibold text-white transition hover:bg-cyan-500">
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

export default HomeProjectCard;
