// Reusable about section component used inside the About page.


import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import imgProfile from '../assets/images/image.jpeg';

const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <img src={imgProfile} alt="Profile" className="h-80 w-full rounded-2xl object-cover" />
        </motion.div>
        

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionTitle eyebrow="About Me" title="Crafting thoughtful digital experiences" description="I’m drawn to the quiet details that make a product feel effortless, useful, and genuinely human." />
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m a developer who loves the point where an idea becomes something real — a website, a product, or a digital experience people can feel confident using. I enjoy working at the intersection of design, code, and problem-solving, and I care deeply about making interfaces feel clear, welcoming, and polished.
            Outside of building, I’m always learning, exploring new tools, and looking for better ways to create experiences that respect the people using them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-sm text-cyan-500">Location</p>
              <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">Accra, Gh</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-sm text-cyan-500">Focus</p>
              <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">Web Development/Web apps</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
