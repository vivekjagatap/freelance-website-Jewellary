import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Elegant Necklaces',
    description: 'Stunning gold necklaces for every occasion',
    image: 'https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzEwODQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Gold Bangles',
    description: 'Exquisite bangles and bracelets in pure gold',
    image: 'https://images.unsplash.com/photo-1741071520895-47d81779c11e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMGJyYWNlbGV0c3xlbnwxfHx8fDE3NzEwNzY0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Gold Earrings',
    description: 'Beautiful earrings crafted with precision',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MTAxNDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'New',
  },
  {
    id: 4,
    name: 'Wedding Rings',
    description: 'Perfect rings for your special moments',
    image: 'https://images.unsplash.com/photo-1732721674983-7a621db80dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZ3MlMjB3ZWRkaW5nfGVufDF8fHx8MTc3MTA4NDQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Popular',
  },
  {
    id: 5,
    name: 'Gold Chains',
    description: 'Classic and contemporary chain designs',
    image: 'https://images.unsplash.com/photo-1611170947204-5ab96c3e37a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBqZXdlbHJ5fGVufDF8fHx8MTc3MTA4NDQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Classic',
  },
  {
    id: 6,
    name: 'Pendants & Lockets',
    description: 'Unique pendants with intricate detailing',
    image: 'https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGVuZGFudCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwOTcwODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Exclusive',
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              Exquisite <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Collections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of handcrafted gold jewelry, designed to perfection
            </p>
          </motion.div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white border-0 shadow-lg">{collection.tag}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-amber-50 to-white">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600">
                    {collection.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}