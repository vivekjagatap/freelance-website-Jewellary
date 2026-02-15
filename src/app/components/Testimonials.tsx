import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Bangalore',
    rating: 5,
    text: 'Rented a stunning necklace set for my sister\'s wedding. The quality was exceptional and the rental process was so smooth. Highly recommend Kanak!',
    occasion: 'Wedding Rental'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    text: 'Purchased my wife\'s anniversary gift from Kanak. The craftsmanship is impeccable and the buyback guarantee gives great peace of mind.',
    occasion: 'Purchase'
  },
  {
    name: 'Anjali Mehta',
    location: 'Delhi',
    rating: 5,
    text: 'The custom design service is amazing! They brought my vision to life perfectly. The team was patient and the final piece exceeded my expectations.',
    occasion: 'Custom Design'
  },
  {
    name: 'Vikram Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'Best jewelry rental experience! Perfect for festivals and special occasions. The insurance coverage and easy exchange made it worry-free.',
    occasion: 'Festival Rental'
  },
  {
    name: 'Sneha Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Kanak has been our family jeweler for three generations. The trust and quality they maintain is unmatched. Every piece tells a story!',
    occasion: 'Regular Customer'
  },
  {
    name: 'Arjun Singh',
    location: 'Pune',
    rating: 5,
    text: 'Flexible payment options and transparent pricing. Bought wedding rings here and couldn\'t be happier with the service and quality.',
    occasion: 'Wedding Purchase'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
              <span className="text-amber-700 text-sm font-medium">5000+ Happy Customers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from people who chose Kanak for their special moments
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-amber-400 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t border-amber-100 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                        {testimonial.occasion}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">5000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">10,000+</div>
            <div className="text-sm text-gray-600">Jewelry Pieces Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Years of Trust</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
