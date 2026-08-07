import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import HomeProjectCard from './HomeProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {}

        <SectionTitle eyebrow="Projects" title="Selected work" description="A mix of polished product experiences and experimental interfaces created with modern frontend tools." />

        {}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HomeProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
