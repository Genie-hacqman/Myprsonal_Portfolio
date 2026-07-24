// Projects page wrapper that renders the project showcase component.

import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio" title="Some Things I've Built" description="A selection of work spanning landing pages, product experiences, and polished web applications." />
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
