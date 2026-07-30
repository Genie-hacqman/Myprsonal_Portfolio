import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const SocialLinks = ({ className = '' }) => {
  
  const links = [
    { label: 'GitHub', icon: <FiGithub size={20} />, href: 'https://github.com/Genie-hacqman' },
    { label: 'LinkedIn', icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/hackmankofiagyemang' },
    { label: 'Instagram', icon: <FiInstagram size={20} />, href: 'https://instagram.com' },
    { label: 'WhatsApp', icon: <FaWhatsapp size={20} />, href: 'https://wa.me/0549701424' }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:border-slate-700 dark:text-slate-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
