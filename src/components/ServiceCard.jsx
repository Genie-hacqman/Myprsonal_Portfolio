// Single service card component used in the services section.

import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-md dark:border-slate-800 dark:bg-slate-900/70">
      <div className="text-4xl">{service.icon}</div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
