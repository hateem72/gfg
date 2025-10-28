import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Target, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Best Student Chapter 2023',
      description: 'Recognized as the most active GeeksForGeeks student chapter in North India',
      date: '2023',
      category: 'Recognition',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Medal,
      title: 'Hackathon Winners',
      description: 'Our team secured 1st place in the Inter-College Hackathon',
      date: '2023',
      category: 'Competition',
      color: 'from-gfg-green to-gfg-dark-green'
    },
    {
      icon: Star,
      title: '500+ Active Members',
      description: 'Successfully built a thriving community of tech enthusiasts',
      date: '2024',
      category: 'Milestone',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Award,
      title: 'Excellence in Innovation',
      description: 'Awarded for outstanding contribution to student innovation',
      date: '2023',
      category: 'Award',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const stats = [
    { number: '25+', label: 'Awards Won', icon: Trophy },
    { number: '50+', label: 'Events Organized', icon: Target },
    { number: '500+', label: 'Students Impacted', icon: Users },
    { number: '100+', label: 'Projects Completed', icon: Star }
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
              Our <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Celebrating our journey of excellence, innovation, and community impact
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gfg-green/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-gfg-green to-gfg-dark-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-3xl font-orbitron font-bold text-gfg-black mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-inter">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gfg-green/20">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green text-sm font-medium rounded-full">
                          {achievement.category}
                        </span>
                        <p className="text-gray-500 text-sm font-inter mt-1">
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-space-grotesk font-bold text-gfg-black mb-4 group-hover:text-gfg-green transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;