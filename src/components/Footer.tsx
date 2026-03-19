export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-2xl font-display font-bold text-indigo-400 mb-4 block">
              BusinessName
            </a>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Providing quality services you can trust. Helping businesses grow since 2019.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Business Street, Suite 100</li>
              <li>City, State 12345</li>
              <li>Email: info@businessname.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BusinessName. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
