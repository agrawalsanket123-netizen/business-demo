import { MessageSquare } from 'lucide-react';

interface HeroProps {
  onChatOpen: () => void;
}

export default function Hero({ onChatOpen }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight mb-6">
            We Help Your <span className="text-indigo-600">Business Grow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Quality service you can trust. We provide professional solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </a>
            <button
              onClick={onChatOpen}
              className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Chat with Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
