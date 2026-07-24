// Skills section showing a grid of developer skill cards.


import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SkillCard from './SkillCard';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="Core tools I work with" description="A blend of modern frontend technologies and development practices that help me ship quickly and thoughtfully." />
        <div className="grid gap-6 grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
              <SkillCard skill={skill} iconsOnly />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
