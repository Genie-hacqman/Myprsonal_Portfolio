// Single skill card component for displaying an icon and label.


import { motion } from 'framer-motion';

const SkillCard = ({ skill, iconsOnly = false }) => {
  if (iconsOnly) {
    return (
      <motion.div whileHover={{ y: -6, scale: 1.02 }} className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        {skill.icon ? (
          <img src={skill.icon} alt={`${skill.name} icon`} title={skill.name} className="h-10 w-10 object-contain" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-slate-700">{skill.name[0]}</div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {skill.icon ? (
            <img src={skill.icon} alt={`${skill.name} icon`} className="h-6 w-6 object-contain" />
          ) : null}
          <h3 className="font-semibold text-slate-800 dark:text-slate-100">{skill.name}</h3>
        </div>
        <span className="text-sm font-medium text-cyan-500">{skill.level}%</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-600" style={{ width: `${skill.level}%` }} />
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
    </motion.div>
  );
};

export default SkillCard;
