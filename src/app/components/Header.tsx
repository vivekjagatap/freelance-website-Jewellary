import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello%20Kanak%20Gold%20Shop', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-serif text-amber-600">
              KANAK
            </div>
            <div className="ml-2 text-xs text-gray-600 hidden sm:block">
              Fine Gold Jewellery
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('collections')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Collections
            </button>
            <button onClick={() => scrollToSection('patterns')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Patterns
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-amber-100 mt-2">
            <nav className="flex flex-col gap-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('collections')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                Collections
              </button>
              <button onClick={() => scrollToSection('patterns')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                Patterns
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </button>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
