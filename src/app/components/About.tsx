import { Award, Users, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Certified 22K & 24K pure gold jewelry with hallmark certification',
  },
  {
    icon: Users,
    title: '50+ Years of Trust',
    description: 'Three generations of excellence in gold craftsmanship',
  },
  {
    icon: Shield,
    title: 'Lifetime Guarantee',
    description: 'Every piece comes with lifetime buyback and exchange guarantee',
  },
  {
    icon: Clock,
    title: 'Custom Made',
    description: 'Bespoke jewelry designed to match your unique style',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            About Kanak
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1764054335288-79a4eafd294b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc3MTA4NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kanak Gold Shop"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-serif text-gray-900 mb-6">
              Crafting Timeless Elegance Since 1974
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Kanak Gold Shop has been a trusted name in fine gold jewelry for over five decades. 
              Our commitment to quality, craftsmanship, and customer satisfaction has made us a 
              household name in the jewelry industry.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We take pride in our traditional craftsmanship combined with contemporary designs. 
              Each piece of jewelry is carefully crafted by our skilled artisans, ensuring the 
              highest standards of quality and authenticity.
            </p>
            <p className="text-gray-700 text-lg">
              Whether you're looking for traditional bridal jewelry or modern everyday pieces, 
              Kanak offers an extensive collection to suit every occasion and taste.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-serif text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
