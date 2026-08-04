import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';

const Services = () => {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Services" title="What I can help you build" description="Flexible support for brands, founders, and teams looking for polished digital products." />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
