import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag, Key, Palette, Shield, RefreshCw, CreditCard, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Buy Gold Jewelry',
    description: 'Own your dream piece forever',
    features: [
      'Lifetime buyback guarantee',
      '100% hallmarked gold',
      'Free customization',
      'Flexible payment options'
    ],
    gradient: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-50 to-yellow-50',
    action: 'Browse Collection'
  },
  {
    icon: Key,
    title: 'Rent Gold Jewelry',
    description: 'Luxury without the commitment',
    features: [
      'Affordable monthly rentals',
      'Perfect for events & occasions',
      'Fully insured jewelry',
      'Easy exchange options'
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    action: 'View Rental Plans'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Create your unique masterpiece',
    features: [
      'Expert design consultation',
      'Traditional & modern styles',
      '3D design preview',
      'Handcrafted by artisans'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    action: 'Start Designing'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'All rented jewelry is fully insured for your peace of mind'
  },
  {
    icon: RefreshCw,
    title: 'Easy Exchange',
    description: 'Switch to different designs during your rental period'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'EMI options available for purchases & rental deposits'
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Same-day delivery available for rentals in select cities'
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-medium">Flexible Options for Everyone</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-gray-900 mb-6"
          >
            Buy, Rent, or <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Create</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the perfect way to experience luxury. Whether you want to own, rent for special occasions, 
            or design something unique, we've got you covered.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-serif text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-1.5 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToContact}
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white group-hover:shadow-lg transition-all`}
                    >
                      {service.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-gray-300 text-lg">
              Premium benefits that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Rental Info Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <Key className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-serif text-gray-900 mb-4">
              New to Jewelry Rental?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Experience luxury jewelry for weddings, parties, and special occasions without the full purchase price. 
              Our rental plans start from just ₹999/day with free home delivery and pickup!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Explore Rental Plans
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/919876543210?text=I want to know more about jewelry rental', '_blank')}
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Chat with Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
