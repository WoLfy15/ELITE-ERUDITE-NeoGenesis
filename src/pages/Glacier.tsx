import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain } from 'lucide-react';

const Glacier = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-800">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-4 pt-32 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-cyan-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <motion.div className="flex justify-center mb-6">
              <Mountain className="w-20 h-20 text-cyan-400" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Glaciers
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Monitor glacial retreat and ice dynamics using SAR technology to track 
              climate change impacts on polar and alpine environments.
            </p>
          </motion.div>

          {/* Why SAR for Glacier Monitoring Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Why SAR for Glacier Monitoring?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Cloud Penetration</h3>
                <p className="text-gray-200 leading-relaxed">
                  SAR signals penetrate clouds and weather, providing clear views of 
                  glacial surfaces when optical sensors are blocked by atmospheric conditions.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Polar Night Operation</h3>
                <p className="text-gray-200 leading-relaxed">
                  Continuous monitoring during polar winter months when optical satellites 
                  cannot function due to extended darkness periods.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Ice Movement Tracking</h3>
                <p className="text-gray-200 leading-relaxed">
                  SAR interferometry precisely measures glacier flow rates and ice 
                  dynamics, crucial for understanding glacial response to climate change.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Glacier Analysis Content */}
          <motion.div variants={itemVariants} className="mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Glacier Analysis Data
            </h2>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
              <Mountain className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Interactive Glacier Monitoring
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Explore real-time glacier monitoring data and track ice mass changes 
                using advanced SAR satellite imagery and analysis tools.
              </p>
              
              {/* Placeholder for future interactive content */}
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/20">
                <p className="text-cyan-300 text-lg">
                  Interactive glacier analysis map coming soon...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Glacier;
