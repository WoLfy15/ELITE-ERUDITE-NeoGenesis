import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Flame, ArrowRight, Calendar, MapPin } from 'lucide-react';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: 'Flood Monitoring Revolution',
      description: 'How SAR technology is transforming flood detection and disaster response worldwide.',
      image: 'https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg',
      category: 'Floods',
      date: 'March 2024',
      location: 'Global',
      path: '/floods',
      icon: Waves,
      color: 'blue',
    },
    {
      id: 2,
      title: 'Wildfire Detection & Tracking',
      description: 'Advanced SAR applications in monitoring and predicting wildfire behavior and spread.',
      image: 'https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg',
      category: 'Wild Fires',
      date: 'February 2024',
      location: 'California, USA',
      path: '/wildfires',
      icon: Flame,
      color: 'orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SAR Technology Stories
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore real-world applications and breakthrough discoveries powered by 
            Synthetic Aperture Radar technology in monitoring Earth's dynamic processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Link to={story.path}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 right-4 p-3 rounded-full ${
                      story.color === 'blue' ? 'bg-blue-500/30' : 'bg-orange-500/30'
                    } backdrop-blur-sm`}>
                      <story.icon className={`w-6 h-6 ${
                        story.color === 'blue' ? 'text-blue-300' : 'text-orange-300'
                      }`} />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        story.color === 'blue' 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-orange-500/20 text-orange-300'
                      }`}>
                        {story.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {story.date}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {story.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {story.location}
                      </div>
                      
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2 font-semibold">Read More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Stories Coming Soon
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're continuously documenting new applications and breakthroughs in SAR technology. 
              Stay tuned for more inspiring stories of how radar is reshaping our understanding of Earth.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stories;