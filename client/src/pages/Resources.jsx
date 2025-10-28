import { motion } from 'framer-motion';
import { BookOpen, Code, Video, Download, ExternalLink, Star } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: Code,
      title: 'Programming Tutorials',
      count: '50+',
      description: 'Step-by-step coding tutorials and guides',
      color: 'from-gfg-green to-gfg-dark-green'
    },
    {
      icon: Video,
      title: 'Video Lectures',
      count: '30+',
      description: 'Recorded sessions and workshops',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: BookOpen,
      title: 'Study Materials',
      count: '25+',
      description: 'PDFs, notes, and reference materials',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Download,
      title: 'Tools & Software',
      count: '15+',
      description: 'Essential development tools and resources',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Web Development Guide',
      type: 'Tutorial Series',
      description: 'From HTML basics to advanced React concepts',
      rating: 4.9,
      downloads: 1250
    },
    {
      title: 'Data Structures & Algorithms',
      type: 'Study Material',
      description: 'Comprehensive notes with examples',
      rating: 4.8,
      downloads: 980
    },
    {
      title: 'Python for Beginners',
      type: 'Video Course',
      description: '20-hour complete Python course',
      rating: 4.7,
      downloads: 2100
    }
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
              Learning <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Access our curated collection of tutorials, guides, and materials to accelerate your learning journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gfg-green/20">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-2">
                      {category.title}
                    </h3>
                    <p className="text-2xl font-orbitron font-bold text-gfg-green mb-2">
                      {category.count}
                    </p>
                    <p className="text-gray-600 text-sm font-inter">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold text-gfg-black mb-6">
              Featured <span className="text-gradient">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gfg-green/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green text-sm font-medium rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="text-sm font-medium text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-3 group-hover:text-gfg-green transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-inter">
                      {resource.downloads} downloads
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gfg-green hover:text-gfg-dark-green font-semibold"
                    >
                      <span>Access</span>
                      <ExternalLink size={16} />
                    </motion.button>
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

export default Resources;