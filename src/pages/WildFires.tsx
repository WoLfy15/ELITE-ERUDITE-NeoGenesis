import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame } from 'lucide-react';

const WildFires = () => {
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-red-800">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-4 pt-32 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Why SAR for Wildfire Monitoring Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Why SAR for Wildfire Monitoring?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Smoke Penetration</h3>
                <p className="text-gray-200 leading-relaxed">
                  SAR signals penetrate smoke and haze, providing clear views of fire 
                  boundaries and behavior when optical sensors fail completely.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Day/Night Operation</h3>
                <p className="text-gray-200 leading-relaxed">
                  Continuous 24/7 monitoring capability ensures no fire event goes 
                  undetected, regardless of lighting conditions or weather.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Burn Scar Mapping</h3>
                <p className="text-gray-200 leading-relaxed">
                  SAR excels at mapping burn scars and tracking recovery, providing 
                  critical data for post-fire ecosystem management and restoration.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 🔥 Interactive Fire Map Iframe */}
          <motion.div variants={itemVariants} className="mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Fire Analysis Map
            </h2>

            <div className="flex justify-center">
              <iframe
                src="/src/pages/fire_analysis_map.html"
                title="Wildfire SAR Analysis Map"
                width="100%"
                height="400"
                style={{ maxWidth: '100%', border: 'none', borderRadius: '24px', boxShadow: '0 0 32px #0008' }}
                allowFullScreen
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-lg text-gray-200 mt-6"
            >
              Explore real-time wildfire monitoring data and interactive mapping powered by SAR.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WildFires;
