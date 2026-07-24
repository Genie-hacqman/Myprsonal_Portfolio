// Experience section component for the About page.
import { experience } from '../data/experience';
import SectionTitle from './SectionTitle';
import Timeline from './Timeline';

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="A path shaped by product and design" description="A track record of building across startup and studio environments with a strong design-minded approach." />
        <Timeline items={experience} />
      </div>
    </section>
  );
};

export default Experience;
