// About page content describing the developer and experience.


import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { experience } from '../data/experience';
import imgProfile from '../assets/images/image.jpeg';

const AboutPage = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src={imgProfile} alt="Profile" className="h-120 w-full rounded-3xl object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <SectionTitle eyebrow="About" title="Hi, I’m Hackman Agyemang" description="A product-minded full stack developer focused on beautiful interfaces and smooth user journeys." />
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I create modern web experiences that are as expressive as they are usable. My work combines thoughtful design systems, motion, and performant React architecture.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <Timeline items={experience} />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm text-cyan-500">Education</p>
                <p className="mt-1 font-semibold">BSc in Information Technology</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm text-cyan-500">Certifications</p>
                <p className="mt-1 font-semibold">Software Engineering, comptia A+, AWS Cloud</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1">
                <FiDownload /> Download Resume
              </a>
              <a href="/projects" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">View Projects</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
