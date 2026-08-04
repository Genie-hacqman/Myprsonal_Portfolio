import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const decodeBase64 = (value) => atob(value);

const whatsappBaseUrl = decodeBase64('aHR0cHM6Ly93YS5tZS8yMzM1NDk3MDE0MjQ=');
const emailLink = decodeBase64('bWFpbHRvOm1pcnRoZnVsbWlja2doMTJAZ21haWwuY29t');

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s talk about your next idea"
          description="I’m available for freelance work, collaborations, and thoughtful digital experiences."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-linear-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Available now</p>
            <h3 className="mt-3 text-2xl font-semibold">Ready to build something meaningful?</h3>
            <p className="mt-4 text-sm leading-7 text-cyan-50/90">
              Whether you need a polished website, a product redesign, or a quick strategy conversation, I’d be glad to connect.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><FiMail size={18} /> <span>""</span></div>
              <a href={whatsappBaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:opacity-90">
                <FiPhone size={18} /> <span>""</span>
              </a>
              <div className="flex items-center gap-3"><FiMapPin size={18} /> <span>Accra, Ghana</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/60">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Start with a quick conversation</p>
              <h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Choose the best way to reach me</h4>

              <div className="mt-6 space-y-3">
                <a
                  href={whatsappBaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-4 text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1"
                >
                  <span className="font-medium">Message on WhatsApp</span>
                  <FiArrowRight size={18} />
                </a>

                <a
                  href={emailLink}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200"
                >
                  <span className="font-medium">Send an email</span>
                  <FiArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="rounded-full bg-cyan-50 px-3 py-1 dark:bg-cyan-500/10">Fast response</span>
              <span className="rounded-full bg-cyan-50 px-3 py-1 dark:bg-cyan-500/10">Remote friendly</span>
              <span className="rounded-full bg-cyan-50 px-3 py-1 dark:bg-cyan-500/10">Open to new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
