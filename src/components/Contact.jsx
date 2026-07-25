// Contact form and contact details section.


import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const Contact = () => {
  // Use a ref for the form so we can use EmailJS `sendForm` as shown in the docs.
  const formRef = useRef(null);

  // Store the contact form values in local state (keeps inputs controlled and allows validation).
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_subject: '', message: '' });

  // Track the submission status shown to the user after sending the form.
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus('Please fill in your name, email, and message.');
      return;
    }

    // Prefer providing the public key through an environment variable for security.
    // Add VITE_EMAILJS_PUBLIC_KEY to your .env if you haven't already.
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key';

    emailjs
      .sendForm('service_l8s1y3p', 'template_il38l1s', formRef.current, {
        publicKey,
      })
      .then((response) => {
        console.log('EmailJS SUCCESS:', response);
        setStatus('Thanks for reaching out. Your message is on its way.');
        setFormData({ user_name: '', user_email: '', user_subject: '', message: '' });
      })
      .catch((error) => {
        // Show a helpful error message and include console logging for debugging.
        console.error('EmailJS FAILED', error);
        if (error?.status === 400 && error?.text?.includes('Public Key is invalid')) {
          setStatus('Invalid EmailJS public key. Add VITE_EMAILJS_PUBLIC_KEY to your .env file.');
        } else {
          setStatus('Something went wrong. Please check the console for details.');
        }
      });
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contact" title="Let’s build something memorable" description="Whether you’re kicking off a new project or need a polished redesign, I’d love to hear about it." />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-linear-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Contact details</h3>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3"><FiMail size={18} /> <span>mirthfulmickgh12@gmail.com</span></div>
              <div className="flex items-center gap-3"><FiPhone size={18} /> <span>+233 549 7014 24</span></div>
              <div className="flex items-center gap-3"><FiMapPin size={18} /> <span>Accra, Ghana</span></div>
            </div>
          </motion.div>

          <motion.form ref={formRef} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input name="user_name" value={formData.user_name} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950" required />
              </label>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950" required />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Subject
              <input name="user_subject" value={formData.user_subject} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950" />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950" required />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1">
              Send Message
            </button>
            {status && <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
