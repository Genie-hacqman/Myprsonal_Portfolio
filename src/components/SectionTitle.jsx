// Heading and subtitle component used for section titles.


const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-2xl mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

export default SectionTitle;
