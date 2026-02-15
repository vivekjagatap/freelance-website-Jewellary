import { Card, CardContent } from './ui/card';
import { Sparkles, Heart, Gem, Crown, Star, Flower2 } from 'lucide-react';

const patterns = [
  {
    id: 1,
    name: 'Traditional Filigree',
    description: 'Intricate traditional patterns with delicate wirework',
    icon: Sparkles,
    features: ['Handcrafted', 'Heritage Design', '22K Gold'],
  },
  {
    id: 2,
    name: 'Contemporary Minimal',
    description: 'Modern sleek designs for everyday elegance',
    icon: Heart,
    features: ['Lightweight', 'Modern Style', 'Versatile'],
  },
  {
    id: 3,
    name: 'Diamond Studded',
    description: 'Luxurious gold adorned with precious diamonds',
    icon: Gem,
    features: ['Premium Quality', 'Certified Diamonds', 'Exclusive'],
  },
  {
    id: 4,
    name: 'Bridal Collection',
    description: 'Grand designs perfect for your wedding day',
    icon: Crown,
    features: ['Exclusive', 'Customizable', 'Luxury'],
  },
  {
    id: 5,
    name: 'Antique Finish',
    description: 'Vintage-inspired designs with oxidized finish',
    icon: Star,
    features: ['Unique Finish', 'Traditional', 'Elegant'],
  },
  {
    id: 6,
    name: 'Floral Motifs',
    description: 'Nature-inspired patterns with floral elements',
    icon: Flower2,
    features: ['Artistic', 'Detailed Work', 'Timeless'],
  },
];

export function Patterns() {
  return (
    <section id="patterns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Design Patterns
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From traditional to contemporary, discover our wide variety of design patterns
          </p>
        </div>

        {/* Patterns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patterns.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <Card key={pattern.id} className="group border-2 border-amber-100 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">
                    {pattern.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pattern.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pattern.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12">
          <h3 className="text-3xl font-serif text-gray-900 mb-4">
            Custom Design Services
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? We offer custom design services to bring your vision to life. 
            Our expert craftsmen will work with you to create your perfect piece.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Request Custom Design
          </button>
        </div>
      </div>
    </section>
  );
}
