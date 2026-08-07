import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import Button from './Button';
import imgProfile from '../assets/images/image.jpeg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const revealFromTop = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const revealFromBottom = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const revealFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } },
};

const orbitTech = [
  { name: 'React', icon: '/icons/react.svg', tooltip: 'React SPA + component-driven UIs' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', tooltip: 'Modern web interactions and logic' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', tooltip: 'Responsive UI and polished layouts' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', tooltip: 'APIs, tooling, and server-side workflows' },
  { name: 'GitHub', icon: '/icons/github.svg', tooltip: 'Version control, branches, and deployments' },
  { name: 'Docker', icon: '/icons/docker.svg', tooltip: 'Containerized development and deploys' },
];

const orbitRadius = 118;

const Hero = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let rafId = null;

    function onMove(e) {
      tx = e.clientX;
      ty = e.clientY;
      if (el) el.style.opacity = '0.07';
    }

    function animate() {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      if (el) {
        el.style.left = `${Math.round(x)}px`;
        el.style.top = `${Math.round(y)}px`;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    function onLeave() {
      if (el) el.style.opacity = '0';
    }
    window.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-3xl">
          <motion.p variants={revealFromTop} className="text-lg font-bold uppercase tracking-[0.35em] text-cyan-500" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-6xl">
            <motion.span variants={revealFromBottom} className="block">
              I&apos;m <span className="animated-gradient relative inline-block">HACKMAN,</span>
            </motion.span>
            <motion.span variants={revealFromBottom} className="block mt-2 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              transforming ideas into
            </motion.span>
            <motion.span variants={revealFromBottom} className="block text-3xl font-extrabold leading-tight text-slate-700 dark:text-slate-200 sm:text-4xl lg:text-5xl">
              scalable web applications.
            </motion.span>
          </motion.h1>

          <motion.p variants={revealFade} className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            I’m a developer who enjoys turning ideas into websites and products that feel beautifully crafted.
          </motion.p>

          <motion.div variants={revealFade} className="mt-8 flex flex-wrap gap-4">
            <Button href="#contact">Let&apos;s Talk</Button>
            <Button href="#projects" variant="secondary">View Projects</Button>
          </motion.div>

          <motion.div variants={revealFade} className="mt-8 flex items-center gap-4">
            <SocialLinks />
            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-cyan-500 dark:text-slate-200">
              Download CV <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>

        <div />
      </div>

      <div className="profile-card-wrapper">
        <div className="orbit-root">
          <div className="profile-card profile-card-inner">
            <img src={imgProfile} alt="Profile" className="h-full w-full rounded-2xl object-cover" />
          </div>
          <div className="orbit-container" aria-hidden="true">
            {orbitTech.map((tech, idx) => {
              const angle = idx * 60;
              const radians = (angle * Math.PI) / 180;
              const x = Math.cos(radians) * orbitRadius;
              const y = Math.sin(radians) * orbitRadius;

              return (
                <div key={tech.name} className="orbit-layer">
                  <div
                    className="orbit-icon"
                    style={{ '--orbit-x': `${x}px`, '--orbit-y': `${y}px` }}
                    tabIndex={0}
                    aria-label={`${tech.name}: ${tech.tooltip}`}
                  >
                    <img src={tech.icon} alt={tech.name} className="orbit-icon-image" />
                    <span className="orbit-tooltip">{tech.tooltip}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={glowRef} className="cursor-glow" id="cursor-glow" />
    </section>
  );
};

export default Hero;
