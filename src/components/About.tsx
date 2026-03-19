const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Support', value: '24/7' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              About Our Business
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We started with a simple mission: to provide high-quality, reliable services to our local community. Over the years, we've grown into a trusted partner for hundreds of businesses, helping them achieve their goals through innovation and dedication.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experts is committed to excellence in everything we do. We believe in building long-term relationships based on transparency, integrity, and results.
            </p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
