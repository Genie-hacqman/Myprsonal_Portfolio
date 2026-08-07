import { useRef } from 'react';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const btnRef = useRef(null);
  const baseClass = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-1',
    secondary: 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800',
  };
  if (href) {
    return (
      <a
        href={href}
        ref={btnRef}
        onMouseMove={(e) => {
          const el = btnRef.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
          const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
          el.style.transform = `translate(${dx * 6}px, ${dy * 6}px) scale(1.03)`;
          el.style.boxShadow = '0 18px 40px rgba(14,165,233,0.12)';
        }}
        onMouseLeave={() => {
          const el = btnRef.current;
          if (!el) return;
          el.style.transform = '';
          el.style.boxShadow = '';
        }}
        className={`${baseClass} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={btnRef}
      onMouseMove={(e) => {
        const el = btnRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        el.style.transform = `translate(${dx * 6}px, ${dy * 6}px) scale(1.03)`;
        el.style.boxShadow = '0 18px 40px rgba(14,165,233,0.12)';
      }}
      onMouseLeave={() => {
        const el = btnRef.current;
        if (!el) return;
        el.style.transform = '';
        el.style.boxShadow = '';
      }}
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
