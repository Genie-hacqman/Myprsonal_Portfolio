// Timeline component showing experience or education dates.

import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="relative ml-4 border-l border-slate-300 pl-8 dark:border-slate-700">
      {items.map((item, index) => (
        <motion.div key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative mb-8">
          <div className="absolute left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 dark:border-slate-950" />
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-cyan-500">{item.company}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item.period}</span>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
