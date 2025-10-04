import { motion } from 'framer-motion';
import { Users, Award, Globe, Lightbulb, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const teamValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to SAR technology insights and make Earth observation data accessible to everyone.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with radar technology and data visualization.',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Every project we undertake aims to create positive environmental and social impact.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our work spans across continents, addressing challenges that affect communities worldwide.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Research Projects' },
    { number: '15+', label: 'Countries Served' },
    { number: '100+', label: 'Publications' },
    { number: '25+', label: 'Team Members' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            About Elite Erudites
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate collective of researchers, scientists, and technologists dedicated to 
            advancing the understanding and application of Synthetic Aperture Radar technology for 
            Earth observation and environmental monitoring.
          </p>
        </motion.div>

        {/* Hero Story Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded by a group of remote sensing experts and data scientists, Elite Erudites 
              emerged from a shared vision to bridge the gap between cutting-edge SAR technology 
              and real-world applications that benefit society.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What started as academic research has evolved into a comprehensive platform that 
              educates, innovates, and applies SAR technology to address some of the world's 
              most pressing environmental challenges.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-blue-300 font-semibold">Est. 2019</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg"
                alt="SAR Technology"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Excellence in Innovation</h3>
                <p className="text-gray-300">
                  Recognized globally for breakthrough applications in SAR technology
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)' 
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Mission
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you're a researcher, student, or simply curious about SAR technology, 
              we invite you to explore, learn, and contribute to our growing community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;