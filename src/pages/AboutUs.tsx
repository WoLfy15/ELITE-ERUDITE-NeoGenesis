import { motion } from 'framer-motion';

const AboutUs = () => {
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

  // Team member data
  const teamMembers = [
    { name: "Vraj Talati", image: "/.bolt/assets/vraj.jpg" },
    { name: "Deep Joshi", image: "/.bolt/assets/deep.jpg" },
    { name: "Ziyankhan Pathan", image: "/.bolt/assets/Ziyan.jpeg" },
    { name: "Jenil Paghdar", image: "/.bolt/assets/Jenil.jpeg" },
    { name: "Milan Ahir", image: "/.bolt/assets/Milan.jpg" },
    { name: "Sakshi Chavda", image: "/.bolt/assets/Sakshi.jpeg" },
  ];

  // Animated dots component
  const AnimatedDots = ({ color = "cyan", opacity = 0.08, size = 2 }) => {
    const dots = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full bg-${color}-400`}
            style={{
              width: `${size * 4}px`,
              height: `${size * 4}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              opacity: opacity,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [opacity, opacity * 2, opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow pt-32 pb-20 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Elite Erudite
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a passionate collective of students dedicated to 
              advancing the understanding and application of Synthetic Aperture Radar technology for 
              Earth observation and environmental monitoring.
            </p>
          </motion.div>

          {/* Team Members Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.3 } 
                  }}
                  className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1.5">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/192x192/1f2937/ffffff?text=${member.name.charAt(0)}`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Section - Fixed at bottom */}
      <footer className="bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-700/30 py-12 px-4 relative overflow-hidden mt-auto">
        <AnimatedDots color="cyan" opacity={0.08} size={2} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            {/* Logo and Brand */}
            <div className="flex items-center mb-6 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <img 
                    src="/.bolt/assets/logo.svg" 
                    alt="Elite Erudite Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ELITE ERUDITE</h3>
                </div>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right mb-6 md:mb-0"
            >
              <p className="text-lg text-white mb-2">
                Revealing Earth's hidden processes through advanced radar technology
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white text-sm">
              © 2025 ELITE ERUDITE. Educational content for learning purposes
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;