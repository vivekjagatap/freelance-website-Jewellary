import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif text-amber-400 mb-4">KANAK</h3>
            <p className="text-sm mb-4">
              Crafting timeless elegance in gold jewelry since 1974. Your trusted partner for premium quality gold jewelry.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('patterns')} className="hover:text-amber-400 transition-colors">
                  Design Patterns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Our Collections</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Necklaces
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Bangles & Bracelets
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Earrings
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Rings
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="hover:text-amber-400 transition-colors">
                  Chains & Pendants
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-sm">123 Jewelers Street, MG Road, Bangalore 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-amber-400">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@kanakgold.com" className="text-sm hover:text-amber-400">info@kanakgold.com</a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors w-fit"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Kanak Gold Shop. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Hallmark Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
