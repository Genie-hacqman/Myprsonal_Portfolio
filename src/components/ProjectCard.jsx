import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const preferredTechOrder = [
    'React',
    'React.js',
    'TypeScript',
    'JavaScript',
    'Tailwind',
    'Tailwind CSS',
    'Vite',
    'shadcn-ui',
    'OpenWeatherMap API',
    'python',
    'pyinstaller',
    'json',
  ];

  const orderedTechStack = [...project.techStack].sort((a, b) => {
    const getIndex = (tech) => {
      const normalized = tech.toLowerCase();
      const matchedIndex = preferredTechOrder.findIndex(
        (item) => item.toLowerCase() === normalized
      );
      return matchedIndex === -1 ? preferredTechOrder.length : matchedIndex;
    };

    const indexA = getIndex(a);
    const indexB = getIndex(b);
    if (indexA !== indexB) return indexA - indexB;
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  });

  const toggleCard = () => setIsFlipped((prev) => !prev);

  return (
    <div className="min-h-88 w-full overflow-hidden perspective-[1000px] sm:min-h-96 md:min-h-100">
      <motion.div
        whileHover={{ y: -6, boxShadow: '0px 22px 45px rgba(0,0,0,0.18)' }}
        whileTap={{ scale: 0.98 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{ transformStyle: 'preserve-3d', touchAction: 'manipulation' }}
        className="relative h-full cursor-pointer group"
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
          className="absolute inset-0 flex flex-col overflow-hidden rounded-[20px] bg-[#1b233d] p-1 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-32 overflow-hidden rounded-[15px] bg-[linear-gradient(45deg,#049fbb_0%,#50f6ff_100%)] sm:h-36">
            <div className="absolute left-0 top-0 h-7.5 w-32.5 rounded-br-[10px] bg-[#1b233d] skew-x-40 shadow-[-10px_-10px_0_0_#1b233d]" />
            <div className="absolute left-0 top-7.5 h-3.75 w-3.75 rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
            <div className="absolute top-0 left-0 z-20 flex h-7.5 w-full items-center justify-between px-3">
              <div className="z-10 flex h-full items-center justify-center rounded-full border border-cyan-300/40 bg-[#07111f]/95 px-2.5 py-1 text-xs font-black tracking-[0.2em] text-[#f8fbff] shadow-[0_0_18px_rgba(0,0,0,0.35)] backdrop-blur-md">
                {project.category}
              </div>
              <div className="flex h-full items-center gap-1.5">
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-1.5 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiGithub />
                </a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-full items-center justify-center rounded-full bg-white/80 p-1.5 text-[#1b233d] transition hover:text-white hover:bg-white">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute inset-x-0 bottom-0 h-23 w-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105" />
          </div>

          <div className="mt-3 flex-1 rounded-[15px] bg-[#142039] p-4 text-center">
            <span className="block text-base font-extrabold uppercase tracking-[1px] text-white sm:text-lg">{project.title}</span>
            <p
              className="mt-2.5 text-sm leading-6 text-slate-100"
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '3rem' }}
            >
              {project.description}
            </p>

            <div className="mt-4 flex flex-col gap-3 text-xs leading-6 text-slate-200 sm:text-[0.85rem]">
              <div className="rounded-[10px] bg-white/8 px-2 py-1.5">
                <span className="block text-[13px] font-semibold text-white">Stack</span>
                <div className="mt-1 flex flex-wrap justify-center gap-1">
                  {orderedTechStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/70 px-2 py-1 text-[10px] font-medium text-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[10px] border border-cyan-400/20 bg-[#0f172a]/95 px-2 py-1.5 shadow-[0_0_16px_rgba(0,0,0,0.25)]">
                <span className="block text-[13px] font-semibold text-cyan-200">Category</span>
                <span className="mt-1 block font-semibold text-[#f8fbff]">{project.category}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#10172a] p-1 shadow-[0_7px_20px_rgba(100,100,111,0.2)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full rounded-[15px] border border-white/10 bg-[#131b2f] p-4 text-white">
            <span className="block text-base font-bold uppercase tracking-[1px] text-cyan-300 sm:text-[1.05rem]">{project.title}</span>
            <p
              className="mt-3 text-sm leading-6 text-slate-100"
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '3.2rem' }}
            >
              {project.description}
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-100">
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-2.5">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-cyan-200">Tech Stack</span>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {orderedTechStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/70 px-2 py-1 text-sm font-medium text-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-2.5">
                <span className="block text-[13px] uppercase tracking-[0.2em] text-cyan-200">Links</span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2.5 py-1.5 text-sm font-semibold text-white transition hover:bg-cyan-500">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2.5 py-1.5 text-sm font-semibold text-white transition hover:bg-cyan-500">
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
