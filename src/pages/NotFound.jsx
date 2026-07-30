import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">404</p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white sm:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">The page you’re looking for has moved or no longer exists.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
