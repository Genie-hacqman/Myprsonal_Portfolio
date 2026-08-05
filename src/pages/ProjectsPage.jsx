import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const apis = useMemo(
    () => new Set(projects.flatMap((project) => project.techStack.filter((tech) => tech.toLowerCase().includes('api')))).size,
    []
  );
  const technologies = useMemo(
    () => new Set(projects.flatMap((project) => project.techStack.map((tech) => tech.toLowerCase()))).size,
    []
  );
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio" title="Some Things I've Built" description="A selection of work spanning landing pages, product experiences, and polished web applications." />
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[20px] border border-white/10 bg-[#10172a] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
            <p className="mt-4 text-4xl font-bold text-white">{projects.length}</p>
            <p className="mt-2 text-sm text-slate-300">Active portfolio projects</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#10172a] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Technologies</p>
            <p className="mt-4 text-4xl font-bold text-white">{technologies}</p>
            <p className="mt-2 text-sm text-slate-300">Unique tools and libraries used</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#10172a] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">APIs</p>
            <p className="mt-4 text-4xl font-bold text-white">{apis}</p>
            <p className="mt-2 text-sm text-slate-300">API integrations surfaced</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#10172a] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Years Learning</p>
            <p className="mt-4 text-4xl font-bold text-white">4+</p>
            <p className="mt-2 text-sm text-slate-300">Growth in web development</p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
