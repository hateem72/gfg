import { motion } from 'framer-motion';
import { Image, Play, Calendar, Users } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, type: 'image', title: 'Web Development Workshop', date: '2024-01-15', category: 'Workshop' },
    { id: 2, type: 'image', title: 'Hackathon 2024', date: '2024-01-20', category: 'Competition' },
    { id: 3, type: 'image', title: 'AI/ML Seminar', date: '2024-01-25', category: 'Seminar' },
    { id: 4, type: 'image', title: 'Team Building Event', date: '2024-02-01', category: 'Social' },
    { id: 5, type: 'image', title: 'Coding Contest', date: '2024-02-05', category: 'Competition' },
    { id: 6, type: 'image', title: 'Guest Lecture', date: '2024-02-10', category: 'Lecture' }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gfg-green/5 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gfg-black mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Capturing moments of learning, innovation, and community building
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gfg-green/20 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gfg-green/20 to-gfg-dark-green/20 flex items-center justify-center relative">
                    <Image className="text-gfg-green" size={48} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mt-3 mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;