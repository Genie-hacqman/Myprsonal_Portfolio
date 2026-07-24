// Projects.jsx renders the projects section and handles category filtering.
import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  // Current selected project category, defaulting to showing all.
  const [filter, setFilter] = useState('All');

  // Build a category list from available projects, including "All".
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);

  // Filter the project list when the selected category changes.
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading and description. */}
        <SectionTitle eyebrow="Projects" title="Selected work" description="A mix of polished product experiences and experimental interfaces created with modern frontend tools." />

        {/* Category filter buttons. */}
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

        {/* Render each filtered project card. */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
