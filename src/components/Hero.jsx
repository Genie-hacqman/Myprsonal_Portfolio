import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import Button from './Button';
import imgProfile from '../assets/images/image.jpeg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xl font-bold uppercase tracking-[0.35em] text-cyan-500">Full Stack Developer.</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            I'm <span className="text-cyan-500">HACKMAN AGYEMANG,</span>transforming ideas into scalable web applications.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            <span className="block text-2xl font-bold tracking-wide text-cyan-500 sm:text-5xl"></span> developer who enjoys turning ideas into websites and products that feels beautifully crafted.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contact">Let&apos;s Talk</Button>
            <Button href="#projects" variant="secondary">View Projects</Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <SocialLinks />
            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-cyan-500 dark:text-slate-200">
              Download CV <FiArrowRight />
            </a>
          </div>
        </motion.div>

        {}
      </div>
    </section>
  );
};

export default Hero;
