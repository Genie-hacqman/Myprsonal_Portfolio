import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const decodeBase64 = (value) => atob(value);

const SocialLinks = ({ className = '' }) => {
  
  const links = [
    { label: 'GitHub', icon: <FiGithub size={20} />, href: decodeBase64('aHR0cHM6Ly9naXRodWIuY29tL0dlbmllLWhhY3FtYW4=') },
    { label: 'LinkedIn', icon: <FiLinkedin size={20} />, href: decodeBase64('aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hhY2ttYW5rb2ZpYWd5ZW1hbmc=') },
    { label: 'Instagram', icon: <FiInstagram size={20} />, href: decodeBase64('aHR0cHM6Ly9pbnN0YWdyYW0uY29t') },
    { label: 'WhatsApp', icon: <FaWhatsapp size={20} />, href: decodeBase64('aHR0cHM6Ly93YS5tZS8wNTQ5NzAxNDI0') }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="social-icon rounded-full border border-slate-300 p-3 text-slate-700 transition-transform duration-300 hover:bg-cyan-500 hover:text-white dark:border-slate-700 dark:text-slate-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
