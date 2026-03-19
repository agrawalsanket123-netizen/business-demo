import { Briefcase, Headphones, Settings } from 'lucide-react';

const services = [
  {
    title: 'Consultation',
    description: 'Expert advice to help you navigate complex business challenges and identify growth opportunities.',
    icon: Briefcase,
  },
  {
    title: 'Support',
    description: 'Dedicated 24/7 support to ensure your business operations run smoothly without any interruptions.',
    icon: Headphones,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored strategies and tools designed specifically for your unique business requirements.',
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
