// Footer section visible at the bottom of every page.


import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-4 py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Gene's Creative</p>
          <p>© 2026 All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#top" className="transition hover:text-cyan-500">Back to top</a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
