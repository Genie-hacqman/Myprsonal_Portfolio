// Hero section for the homepage with headline and call-to-action.
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
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">Full Stack Developer</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            I build <span className="text-cyan-500">thoughtful digital experiences</span> that feel clear, calm, and memorable.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m <span className="block text-2xl font-semibold tracking-wide text-cyan-500 sm:text-3xl">Hackman Agyemang</span> — a developer who enjoys turning ideas into websites and products that feel personal, useful, and beautifully crafted. I care about detail, accessibility, and creating experiences people genuinely enjoy using.
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

        {/* <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -translate-y-3 rounded-4xl bg-linear-to-br from-cyan-500/30 to-blue-600/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/30 bg-white/60 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-900/70">
            <img src={imgProfile} alt="Portrait" className="h-120 w-full rounded-3xl object-cover" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
