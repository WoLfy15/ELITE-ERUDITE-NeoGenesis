import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplets, Eye, Zap, Globe, Waves, AlertTriangle, MapPin, Clock, Radar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Floods = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [dropdownStates, setDropdownStates] = useState({
    sikkimEnvironmental: false,
    sikkimAftermath: false,
    sikkimSarTech: false,
    dharaliEnvironmental: false,
    dharaliAftermath: false,
    dharaliSarTech: false,
    guwahatiKeyApplications: false,
    guwahatiEnvironmental: false,
    guwahatiAftermath: false,
    guwahatiSarTech: false,
  });

  const toggleDropdown = (section: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const floodImageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  };

  // Enhanced Droplet Animation Component - Made smaller and slower
  const DropletAnimation = ({ density = 'medium', colorScheme = 'blue' }) => {
    const densityConfig = {
      light: { large: 5, medium: 8, small: 12, particles: 20, ripples: 3 },
      medium: { large: 8, medium: 12, small: 18, particles: 30, ripples: 5 },
      heavy: { large: 10, medium: 15, small: 22, particles: 35, ripples: 6 }
    };
    
    const config = densityConfig[density] || densityConfig.medium;
    
    const colorSchemes = {
      blue: {
        large: 'from-blue-400/20 to-blue-600/30',
        medium: 'from-cyan-300/15 to-blue-500/25',
        small: 'from-blue-200/10 to-cyan-400/20',
        particles: 'bg-blue-300/10',
        ripples: 'border-blue-400/20'
      },
      red: {
        large: 'from-red-400/20 to-red-600/30',
        medium: 'from-pink-300/15 to-red-500/25',
        small: 'from-red-200/10 to-pink-400/20',
        particles: 'bg-red-300/10',
        ripples: 'border-red-400/20'
      },
      green: {
        large: 'from-emerald-400/20 to-emerald-600/30',
        medium: 'from-teal-300/15 to-emerald-500/25',
        small: 'from-emerald-200/10 to-teal-400/20',
        particles: 'bg-emerald-300/10',
        ripples: 'border-emerald-400/20'
      }
    };
    
    const colors = colorSchemes[colorScheme] || colorSchemes.blue;

    return (
      <div className="absolute inset-0 z-0">
        {/* Large Droplets - Made smaller and slower */}
        {[...Array(config.large)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className={`absolute rounded-full bg-gradient-to-b ${colors.large} shadow-sm`}
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20}%`,
              borderRadius: '50% 50% 50% 65%',
              transform: 'rotate(45deg)'
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 800],
              x: [0, Math.random() * 20 - 10],
              rotate: [45, 50, 45],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Medium Droplets - Made smaller and slower */}
        {[...Array(config.medium)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className={`absolute rounded-full bg-gradient-to-b ${colors.medium} shadow-sm`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 15}%`,
              borderRadius: '50% 50% 50% 60%',
              transform: 'rotate(30deg)'
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight + 50 : 600],
              x: [0, Math.random() * 15 - 7.5],
              rotate: [30, 35, 30],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Small Droplets - Made smaller and slower */}
        {[...Array(config.small)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className={`absolute rounded-full bg-gradient-to-b ${colors.small}`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 10}%`,
              borderRadius: '50% 50% 50% 50%',
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight + 20 : 400],
              x: [0, Math.random() * 10 - 5],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Droplet Ripples on Impact - Made smaller and slower */}
        {[...Array(config.ripples)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className={`absolute border ${colors.ripples} rounded-full`}
            style={{
              width: '8px',
              height: '8px',
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 10}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.4, 0],
              borderWidth: [1, 0, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Floating Water Particles - Made smaller and slower */}
        {[...Array(config.particles)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute ${colors.particles} rounded-full`}
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 20 - 10],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-0">
      {/* Hero Section with SAR Flood Image */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/.bolt/assets/Flood.png )',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay to reduce background image opacity */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-30">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-50 mb-8 leading-tight drop-shadow-2xl"
          >
            SAR Flood Detection
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-50 mb-12 font-light drop-shadow-lg"
          >
            Revealing Hidden Water Through Radar Eyes
          </motion.h2>
        </div>
      </motion.section>

      {/* FLOODS WITH SAR Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-red-900/60 relative overflow-hidden">
        {/* Enhanced Droplet Animation - Smaller and slower */}
        <DropletAnimation density="medium" colorScheme="blue" />

        {/* Radar wave effects - Made smaller and slower */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-400/20 rounded-full"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              FLOODS WITH SAR
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-blue-400 rounded-full mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-3xl p-8 relative">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  <p>
                    Floods happen when water overflows onto dry land, often from heavy rain or glacial lake bursts. They cause major damage to people, farms, and infrastructure. Unlike normal cameras, SAR (Synthetic Aperture Radar) sees through clouds and at night, making floods appear as dark water patches against bright land.
                  </p>
                  
                  <p className="font-semibold text-white">
                    To improve detection, SAR uses different bands:
                  </p>
                  
                  <div className="space-y-3 ml-4">
                    <p><span className="font-medium text-blue-300">C-band</span> → large-scale flood monitoring, water bodies.</p>
                    <p><span className="font-medium text-green-300">L-band</span> → penetrates vegetation, floods in farms & forests.</p>
                    <p><span className="font-medium text-red-300">X-band</span> → high-resolution, urban and infrastructure floods.</p>
                  </div>
                  
                  <p className="font-semibold text-white">
                    Our project also uses VV/VH polarization:
                  </p>
                  
                  <div className="space-y-3 ml-4">
                    <p><span className="font-medium text-cyan-300">VV</span> shows smooth water and soil surfaces.</p>
                    <p><span className="font-medium text-purple-300">VH</span> highlights vegetation and surface changes.</p>
                  </div>
                  
                  <p className="font-medium text-white">
                    Together they make flood maps more accurate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SAR for Flood Monitoring Section with Enhanced Droplet Effects */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-900/60 via-black via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Droplet Animation - Smaller and slower */}
        <DropletAnimation density="heavy" colorScheme="blue" />

        {/* Floating Bubbles Background - Made smaller and slower */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400/15 rounded-full"
              style={{
                width: `${Math.random() * 10 + 3}px`,
                height: `${Math.random() * 10 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why SAR for Flood Monitoring?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* All-Weather Capability */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Card-specific droplets - Made smaller and slower */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-blue-300/20 rounded-full"
                    style={{
                      width: `${Math.random() * 8 + 2}px`,
                      height: `${Math.random() * 8 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 6,
                    }}
              />
                ))}
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <Eye className="w-10 h-10 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">All-Weather Capability</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed relative z-10"
              >
                Unlike optical satellites, SAR works through clouds, rain, and darkness, 
                providing continuous monitoring during flood events when visibility is limited.
              </motion.p>

              <div className="space-y-3 text-sm relative z-10">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">24/7 Monitoring Capability</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Cloud Penetration Technology</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Weather-Independent Operation</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Water Detection */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-300/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Card-specific droplets - Made smaller and slower */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-cyan-300/20 rounded-full"
                    style={{
                      width: `${Math.random() * 8 + 2}px`,
                      height: `${Math.random() * 8 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 6,
                    }}
              />
                ))}
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <Waves className="w-10 h-10 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Water Detection</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed relative z-10"
              >
                SAR's sensitivity to moisture makes it ideal for mapping flooded areas, 
                even distinguishing between water types and detecting changes over time.
              </motion.p>

              <div className="space-y-3 text-sm relative z-10">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Sub-meter Resolution Mapping</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Water Level Change Detection</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Inundation Area Calculation</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Rapid Response */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Card-specific droplets - Made smaller and slower */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-yellow-300/20 rounded-full"
                    style={{
                      width: `${Math.random() * 8 + 2}px`,
                      height: `${Math.random() * 8 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 6,
                    }}
              />
                ))}
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <AlertTriangle className="w-10 h-10 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Rapid Emergency Response</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed relative z-10"
              >
                High revisit times and automated processing enable near real-time 
                flood mapping for emergency response coordination and disaster management.
              </motion.p>
              
              <div className="space-y-3 text-sm relative z-10">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">6-12 Hour Update Cycles</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Automated Alert Systems</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Emergency Response Integration</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section with Enhanced Droplet Animation */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Enhanced Water Droplet Animation Background - Smaller and slower */}
        <DropletAnimation density="heavy" colorScheme="blue" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications of SAR technology in flood monitoring and disaster response
            </p>
          </motion.div>

          {/* Sikkim Floods 2025 Case Study */}
          <motion.article
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-sm border border-emerald-300/20 rounded-3xl p-8 mb-16 relative overflow-hidden"
          >
            {/* Article-specific droplet animation - Made smaller and slower */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`article-drop-${i}`}
                  className="absolute bg-gradient-to-b from-emerald-300/15 to-teal-400/20 rounded-full"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 20}%`,
                    borderRadius: '50% 50% 50% 65%',
                    transform: 'rotate(35deg)'
                  }}
                  animate={{
                    y: [0, 400],
                    x: [0, Math.random() * 15 - 7.5],
                    rotate: [35, 40, 35],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 12,
                    ease: "easeIn"
                  }}
                />
              ))}
            </div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center relative z-10"
            >
              <Globe className="w-10 h-10 text-emerald-400 mr-4" />
              SIKKIM FLOODS OF 2025
            </motion.h3>

            {/* Main content with image slider and text */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 relative z-10">
              {/* Left side - Image Slider */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Before/After Slider - Optimized for smoothness */}
                <div className="relative bg-gray-900/50 rounded-2xl p-6 border border-emerald-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 text-center">
                    SAR Imagery Comparison
                  </h4>
                  
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-black">
                    {/* Before Image (Right side) */}
                    <div 
                      className="absolute inset-0 select-none pointer-events-none"
                      style={{
                        clipPath: `inset(0 0 0 ${sliderValue}%)`,
                        transition: 'clip-path 0.05s ease-out'
                      }}
                    >
                      <img
                        src="/.bolt/assets/notflooded.jpg"
                        alt="Before Flooding - Normal SAR Image"
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                      />
                      <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Before Flood
                      </div>
                    </div>
                    
                    {/* After Image (Left side) */}
                    <div 
                      className="absolute inset-0 select-none pointer-events-none"
                      style={{
                        clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                        transition: 'clip-path 0.05s ease-out'
                      }}
                    >
                      <img
                        src="/.bolt/assets/flooded.jpg"
                        alt="After Flooding - Flood Detection SAR Image"
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                      />
                      <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        After Flood
                      </div>
                    </div>
                    
                    {/* Slider Handle - Improved smoothness */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10"
                      style={{ 
                        left: `${sliderValue}%`,
                        transition: 'left 0.05s ease-out, width 0.2s ease-out'
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300">
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-3 bg-gray-600 rounded"></div>
                          <div className="w-0.5 h-3 bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Invisible slider input - Optimized for smooth interaction */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20 appearance-none"
                      style={{
                        background: 'transparent',
                        outline: 'none',
                      }}
                    />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-gray-300 text-sm">
                      Drag the slider to compare SAR images before and after the Sikkim floods
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Overview */}
              <motion.section
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-semibold text-white mb-4">Overview</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Sentinel-1 SAR (Synthetic Aperture Radar) images captured before and after the floods in August 2025 reveal the drastic environmental changes in Sikkim. Unlike optical images, SAR uses microwave radar pulses that bounce off the Earth's surface, allowing monitoring even through clouds and at night—crucial during heavy monsoon conditions.
                </p>
                
                <div className="space-y-4 mb-4">
                  <p className="text-gray-300 leading-relaxed">In these images:</p>
                  
                  <div className="space-y-3 ml-4">
                    <p className="text-gray-300">
                      <span className="font-medium text-black bg-white px-2 py-1 rounded">Dark Black Areas</span> → These represent water bodies or flood-affected zones. Radar waves are absorbed or scattered away on smooth water surfaces, causing very little signal to return to the satellite. As a result, flooded valleys, swollen rivers, and waterlogged plains appear completely dark.
                    </p>
                    
                    <p className="text-gray-300">
                      <span className="font-medium text-black bg-gray-100 px-2 py-1 rounded">Bright/White Areas</span> → These are steep mountain slopes, bare rocks, or built-up regions. Rough or inclined surfaces strongly reflect radar waves back to the sensor, creating high backscatter intensity that appears bright.
                    </p>
                    
                    <p className="text-gray-300">
                      <span className="font-medium text-white bg-gray-600 px-2 py-1 rounded">Textured Mid-tone Areas</span> → These correspond to vegetation-covered slopes or mixed terrain. Vegetation causes moderate backscatter due to volume scattering from leaves and branches.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  By comparing the SAR images from <span className="text-emerald-300 font-medium">7 August 2025 (before the peak flooding)</span> and <span className="text-red-300 font-medium">11 August 2025 (after the floods)</span>, it is evident that several valleys and riverbeds turned significantly darker, showing expanded water coverage and inundation. The radar imagery thus clearly captures the geomorphological impact of the flood event—river widening, valley inundation, and altered drainage networks.
                </p>
              </motion.section>
            </div>

            {/* Environmental Factors - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('sikkimEnvironmental')}
                className="w-full flex items-center justify-between text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-300/20 rounded-2xl p-4 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Environmental Factors Causing the Calamity</span>
                <motion.div
                  animate={{ rotate: dropdownStates.sikkimEnvironmental ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.sikkimEnvironmental ? 'auto' : 0,
                  opacity: dropdownStates.sikkimEnvironmental ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                      <h5 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                        <Droplets className="w-6 h-6 mr-3" />
                        Extreme Monsoon Rainfall
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Intensified Indian monsoon system due to climate variability
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Orographic lifting in steep terrain amplified precipitation
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/20">
                      <h5 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center">
                        <Waves className="w-6 h-6 mr-3" />
                        Glacial Lake Outburst Flood (GLOF)
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Retreating glaciers created unstable moraine-dammed lakes
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          SAR images show sudden widening of downstream valleys
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                      <h5 className="text-xl font-semibold text-red-300 mb-3 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3" />
                        Steep and Fragile Terrain
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Young Himalayan geology prone to landslides
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Mass wasting contributed sediment to river channels
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/20">
                      <h5 className="text-xl font-semibold text-orange-300 mb-3 flex items-center">
                        <MapPin className="w-6 h-6 mr-3" />
                        Anthropogenic Stress
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Hydropower projects altered natural drainage
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Deforestation reduced ecosystem resilience
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Aftermath and Environmental Impacts - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-8 relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('sikkimAftermath')}
                className="w-full flex items-center justify-between text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-purple-500/10 to-green-500/10 backdrop-blur-sm border border-purple-300/20 rounded-2xl p-4 hover:from-purple-500/20 hover:to-green-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Aftermath and Environmental Impacts</span>
                <motion.div
                  animate={{ rotate: dropdownStates.sikkimAftermath ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.sikkimAftermath ? 'auto' : 0,
                  opacity: dropdownStates.sikkimAftermath ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                    <h5 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-3" />
                      Human & Infrastructure Loss
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Villages near Dharali and Harsil valleys were inundated, forcing evacuations</li>
                      <li>• Roads, bridges, and hydropower projects along the Bhagirathi sustained severe damage, isolating the region</li>
                      <li>• Agricultural lands were submerged, and apple orchards—the local economic backbone—suffered heavy losses</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                    <h5 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-3" />
                      Geomorphological Changes
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• SAR imagery showed widened river channels and significant scouring between 6–12 August</li>
                      <li>• New sediment deposits and altered terraces reshaped valley floors</li>
                      <li>• The flood reworked riverbanks, creating unstable sandbars and gravel beds</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                    <h5 className="text-lg font-semibold text-red-300 mb-4 flex items-center">
                      <Waves className="w-5 h-5 mr-3" />
                      Landslides and Secondary Hazards
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Saturated slopes triggered frequent landslides, burying farmland and blocking highways</li>
                      <li>• Temporary river blockages created risks of sudden outburst floods</li>
                    </ul>
                  </div>
                </div>

                {/* Environmental Impacts Section - Merged content */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                      <h5 className="text-lg font-semibold text-blue-300 mb-4 flex items-center">
                        <Waves className="w-5 h-5 mr-3" />
                        Hydrological Impacts
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Bhagirathi River experienced altered flow dynamics with elevated sediment load and turbidity</li>
                        <li>• Aquifers faced recharge disruptions due to deposition of impermeable silt</li>
                      </ul>
                    </div>

                    <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                      <h5 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-3" />
                        Biodiversity Stress
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Riparian vegetation was uprooted, reducing habitat stability for fish and aquatic fauna</li>
                        <li>• Wildlife corridors were fragmented as floodplains and forest edges eroded</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/20">
                      <h5 className="text-lg font-semibold text-orange-300 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-3" />
                        Soil and Agriculture
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Productive topsoil was stripped away, while farmlands were layered with coarse sediment</li>
                        <li>• Cash crops like apples, rajma (kidney beans), and millets sustained long-term damage</li>
                      </ul>
                    </div>

                    <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                      <h5 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-3" />
                        Climatic Feedback Loops
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Increased soil erosion released stored carbon, reducing natural carbon sinks</li>
                        <li>• Loss of vegetation heightened the vulnerability of local ecosystems to future climate extremes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* SAR Technology Impact - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('sikkimSarTech')}
                className="w-full flex items-center justify-between text-xl font-semibold text-white mb-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-4 hover:from-emerald-600/30 hover:to-teal-600/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>SAR Technology Impact</span>
                <motion.div
                  animate={{ rotate: dropdownStates.sikkimSarTech ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.sikkimSarTech ? 'auto' : 0,
                  opacity: dropdownStates.sikkimSarTech ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-6 border border-emerald-400/30">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The 2025 Sikkim floods demonstrate how <span className="text-emerald-300 font-medium">SAR imagery provides critical insights</span> into flood extent, geomorphological changes, and cascading environmental effects. This case highlights the urgent need for climate-resilient infrastructure, early warning systems for GLOFs, and sustainable land-use policies in Himalayan regions.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          </motion.article>

          {/* Dharali Floods 2025 Case Study */}
          <motion.article
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm border border-orange-300/20 rounded-3xl p-8 mb-16 relative overflow-hidden"
          >
            {/* Article-specific droplet animation - Made smaller and slower */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`dharali-drop-${i}`}
                  className="absolute bg-gradient-to-b from-orange-300/15 to-red-400/20 rounded-full"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 20}%`,
                    borderRadius: '50% 50% 50% 65%',
                    transform: 'rotate(35deg)'
                  }}
                  animate={{
                    y: [0, 400],
                    x: [0, Math.random() * 15 - 7.5],
                    rotate: [35, 40, 35],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 12,
                    ease: "easeIn"
                  }}
                />
              ))}
            </div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center relative z-10"
            >
              <Radar className="w-10 h-10 text-orange-400 mr-4" />
              DHARALI FLOODS OF 2025
            </motion.h3>

            {/* Main content with image slider and text */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 relative z-10">
              {/* Left side - Image Slider */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Before/After Slider - Optimized for smoothness */}
                <div className="relative bg-gray-900/50 rounded-2xl p-6 border border-orange-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 text-center">
                    SAR Imagery Comparison
                  </h4>
                  
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-black">
                    {/* Before Image (Right side) */}
                    <div 
                      className="absolute inset-0 select-none pointer-events-none"
                      style={{
                        clipPath: `inset(0 0 0 ${sliderValue}%)`,
                        transition: 'clip-path 0.05s ease-out'
                      }}
                    >
                      <img
                        src="/.bolt/assets/dharaliflood.jpg"
                        alt="Before Flooding - Normal SAR Image"
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                      />
                      <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Flooded
                      </div>
                    </div>
                    
                    {/* After Image (Left side) */}
                    <div 
                      className="absolute inset-0 select-none pointer-events-none"
                      style={{
                        clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                        transition: 'clip-path 0.05s ease-out'
                      }}
                    >
                      <img
                        src="/.bolt/assets/dharaliafterflood.jpg"
                        alt="After Flooding - Flood Detection SAR Image"
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                      />
                      <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        After Flood
                      </div>
                    </div>
                    
                    {/* Slider Handle - Improved smoothness */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10"
                      style={{ 
                        left: `${sliderValue}%`,
                        transition: 'left 0.05s ease-out, width 0.2s ease-out'
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300">
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-3 bg-gray-600 rounded"></div>
                          <div className="w-0.5 h-3 bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Invisible slider input - Optimized for smooth interaction */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20 appearance-none"
                      style={{
                        background: 'transparent',
                        outline: 'none',
                      }}
                    />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-gray-300 text-sm text-center">
                      Drag the slider to compare SAR images before and after the Dharali floods
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Overview */}
              <motion.section
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-semibold text-white mb-4">Overview</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Sentinel-1 SAR (Synthetic Aperture Radar) images acquired before and after the Dharali flash floods in Uttarakhand (August 2025) reveal the severe transformation of the river valleys and surrounding landscapes. Unlike optical imagery, SAR uses microwave signals, making it possible to monitor Earth's surface through thick monsoon clouds and during nighttime—an essential advantage for assessing disasters triggered during extreme weather.
                </p>
                
                <div className="space-y-4 mb-4">
                  <p className="text-gray-300 leading-relaxed">SAR Image Interpretation:</p>
                  
                  <div className="space-y-3 ml-4">
                    <p className="text-gray-300">
                      <span className="font-medium text-black bg-white px-2 py-1 rounded">Dark Black Areas</span> → These indicate flood-affected zones and water bodies. Smooth water surfaces scatter radar waves away, resulting in minimal backscatter. Consequently, the submerged river valleys, overbank flooding, and waterlogged agricultural plains appear dark.
                    </p>
                    
                    <p className="text-gray-300">
                      <span className="font-medium text-black bg-gray-100 px-2 py-1 rounded">Bright/White Areas</span> → These represent rugged mountain slopes, rocky cliffs, or built-up zones. Their roughness produces strong backscatter, returning intense signals that appear white.
                    </p>
                    
                    <p className="text-gray-300">
                      <span className="font-medium text-white bg-gray-600 px-2 py-1 rounded">Textured Grey Mid-tones</span> → These correspond to vegetation and mixed terrain. Moderate scattering from tree canopies and foliage causes these medium reflections.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  By comparing SAR data from <span className="text-blue-300 font-medium">6 August 2025 (pre-flood)</span> and <span className="text-red-300 font-medium">12 August 2025 (post-flood)</span>, it becomes clear that several valleys widened, and low-lying farmland turned darker—evidence of large-scale inundation and river course reshaping.
                </p>
              </motion.section>
            </div>

            {/* Environmental Factors - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('dharaliEnvironmental')}
                className="w-full flex items-center justify-between text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-300/20 rounded-2xl p-4 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Environmental Factors Causing the Flood</span>
                <motion.div
                  animate={{ rotate: dropdownStates.dharaliEnvironmental ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.dharaliEnvironmental ? 'auto' : 0,
                  opacity: dropdownStates.dharaliEnvironmental ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                      <h5 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                        <Droplets className="w-6 h-6 mr-3" />
                        Extreme Monsoon Rainfall
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Unusually heavy rainfall events linked to monsoon intensification dumped large volumes of water within a short span
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Orographic uplift against the steep Himalayan slopes concentrated rainfall over the upper catchments of the Bhagirathi and its tributaries
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/20">
                      <h5 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center">
                        <Waves className="w-6 h-6 mr-3" />
                        Glacial and Snowmelt Contribution
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          High summer temperatures enhanced glacial meltwater discharge into rivers
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          The sudden combination of snowmelt and intense rain amplified flood peaks downstream
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                      <h5 className="text-xl font-semibold text-red-300 mb-3 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3" />
                        Fragile Himalayan Terrain
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          The young and tectonically active geology of Uttarakhand makes slopes inherently unstable
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Saturated soils and undercut riverbanks collapsed, triggering landslides that blocked streams and later burst as secondary surges
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/20">
                      <h5 className="text-xl font-semibold text-orange-300 mb-3 flex items-center">
                        <MapPin className="w-6 h-6 mr-3" />
                        Anthropogenic Stress
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Road expansion and hydropower development along the Bhagirathi altered drainage channels and destabilized slopes
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Deforestation and slope cutting reduced natural water absorption, accelerating flash flood impacts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Aftermath and Environmental Impacts - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-8 relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('dharaliAftermath')}
                className="w-full flex items-center justify-between text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-purple-500/10 to-green-500/10 backdrop-blur-sm border border-purple-300/20 rounded-2xl p-4 hover:from-purple-500/20 hover:to-green-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Aftermath and Environmental Impacts</span>
                <motion.div
                  animate={{ rotate: dropdownStates.dharaliAftermath ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.dharaliAftermath ? 'auto' : 0,
                  opacity: dropdownStates.dharaliAftermath ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                    <h5 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-3" />
                      Human & Infrastructure Loss
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Villages near Dharali and Harsil valleys were inundated, forcing evacuations</li>
                      <li>• Roads, bridges, and hydropower projects along the Bhagirathi sustained severe damage, isolating the region</li>
                      <li>• Agricultural lands were submerged, and apple orchards—the local economic backbone—suffered heavy losses</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                    <h5 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-3" />
                      Geomorphological Changes
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• SAR imagery showed widened river channels and significant scouring between 6–12 August</li>
                      <li>• New sediment deposits and altered terraces reshaped valley floors</li>
                      <li>• The flood reworked riverbanks, creating unstable sandbars and gravel beds</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                    <h5 className="text-lg font-semibold text-red-300 mb-4 flex items-center">
                      <Waves className="w-5 h-5 mr-3" />
                      Landslides and Secondary Hazards
                    </h5>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Saturated slopes triggered frequent landslides, burying farmland and blocking highways</li>
                      <li>• Temporary river blockages created risks of sudden outburst floods</li>
                    </ul>
                  </div>
                </div>

                {/* Environmental Impacts Section - Merged content */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                      <h5 className="text-lg font-semibold text-blue-300 mb-4 flex items-center">
                        <Waves className="w-5 h-5 mr-3" />
                        Hydrological Impacts
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Bhagirathi River experienced altered flow dynamics with elevated sediment load and turbidity</li>
                        <li>• Aquifers faced recharge disruptions due to deposition of impermeable silt</li>
                      </ul>
                    </div>

                    <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                      <h5 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-3" />
                        Biodiversity Stress
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Riparian vegetation was uprooted, reducing habitat stability for fish and aquatic fauna</li>
                        <li>• Wildlife corridors were fragmented as floodplains and forest edges eroded</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/20">
                      <h5 className="text-lg font-semibold text-orange-300 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-3" />
                        Soil and Agriculture
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Productive topsoil was stripped away, while farmlands were layered with coarse sediment</li>
                        <li>• Cash crops like apples, rajma (kidney beans), and millets sustained long-term damage</li>
                      </ul>
                    </div>

                    <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                      <h5 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-3" />
                        Climatic Feedback Loops
                      </h5>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Increased soil erosion released stored carbon, reducing natural carbon sinks</li>
                        <li>• Loss of vegetation heightened the vulnerability of local ecosystems to future climate extremes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* SAR Technology Impact - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('dharaliSarTech')}
                className="w-full flex items-center justify-between text-xl font-semibold text-white mb-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-4 hover:from-emerald-600/30 hover:to-teal-600/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>SAR Technology Impact</span>
                <motion.div
                  animate={{ rotate: dropdownStates.dharaliSarTech ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.dharaliSarTech ? 'auto' : 0,
                  opacity: dropdownStates.dharaliSarTech ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-400/30">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The 2025 Dharali flash floods in Uttarakhand highlight how extreme monsoon rainfall, glacial melt, fragile Himalayan geology, and human interventions converge to amplify natural hazards. <span className="text-orange-300 font-medium">Sentinel-1 SAR imagery played a pivotal role</span> in mapping inundation zones, detecting geomorphological changes, and guiding relief operations.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300 font-medium">This event reinforces the urgent need for:</p>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• Early warning systems for glacial and rainfall-triggered floods</li>
                      <li>• Eco-sensitive infrastructure planning in Himalayan valleys</li>
                      <li>• Sustainable watershed management to reduce disaster risks in the long term</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </motion.article>

          {/* Guwahati Floods 2022 Case Study */}
          <motion.article
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm border border-green-300/20 rounded-3xl p-8 mb-16 relative overflow-hidden"
          >
            {/* Article-specific droplet animation */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`guwahati-drop-${i}`}
                  className="absolute bg-gradient-to-b from-green-300/15 to-emerald-400/20 rounded-full"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 20}%`,
                    borderRadius: '50% 50% 50% 65%',
                    transform: 'rotate(35deg)'
                  }}
                  animate={{
                    y: [0, 400],
                    x: [0, Math.random() * 15 - 7.5],
                    rotate: [35, 40, 35],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 12,
                    ease: "easeIn"
                  }}
                />
              ))}
            </div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center relative z-10"
            >
              <Waves className="w-10 h-10 text-green-400 mr-4" />
              ASSAM FLOODS OF 2022
            </motion.h3>

            {/* Overview Section with Video on Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 relative z-10">
              {/* Left side - Overview */}
              <motion.section
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h4 className="text-2xl font-semibold text-white mb-6">Overview</h4>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm border border-green-300/20 rounded-2xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    During the devastating twin waves of floods that submerged vast swathes of Assam in May and June 2022, Synthetic Aperture Radar (SAR) technology emerged as a critical tool for monitoring, mapping, and managing the natural disaster. With its ability to penetrate dense cloud cover and operate day and night, SAR provided invaluable and timely information to disaster management authorities, enabling a more effective response to the crisis that affected millions.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    The 2022 floods in Assam were among the most severe in recent history, characterized by widespread inundation, landslides, and significant damage to infrastructure and agriculture. In such conditions, traditional optical satellite imagery is often rendered ineffective due to the persistent cloud cover of the monsoon season. This is where SAR technology, onboard satellites like the European Space Agency's Sentinel-1, the Indian Space Research Organisation's (ISRO) RISAT series, and Japan's ALOS-2, played a pivotal role.
                  </p>
                </div>
              </motion.section>

              {/* Right side - Video */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center">
                    <Radar className="w-6 h-6 mr-3 text-green-400" />
                    SAR Flood Monitoring in Action
                  </h4>
                  
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-black">
                    {/* Video without any overlays */}
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      key="guwahati-flood-video"
                    >
                      <source src="/.bolt/assets/ASSAM.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-300 text-sm text-center">
                      This video demonstrates how SAR technology provided critical flood monitoring capabilities during the 2022 Assam floods
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Applications - Dropdown */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 relative z-10"
            >
              <motion.button
                onClick={() => toggleDropdown('guwahatiKeyApplications')}
                className="w-full flex items-center justify-between text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-300/20 rounded-2xl p-4 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Key Applications of SAR during the Floods</span>
                <motion.div
                  animate={{ rotate: dropdownStates.guwahatiKeyApplications ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: dropdownStates.guwahatiKeyApplications ? 'auto' : 0,
                  opacity: dropdownStates.guwahatiKeyApplications ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                    <h5 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                      <MapPin className="w-6 h-6 mr-3" />
                      Near Real-Time Flood Inundation Mapping
                    </h5>
                    <p className="text-gray-300 text-sm mb-3">
                      ISRO's National Remote Sensing Centre (NRSC) extensively utilized data from a constellation of SAR satellites to generate rapid flood inundation maps.
                    </p>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Comparing pre-flood and during-flood SAR imagery to accurately delineate submerged areas
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        High precision mapping of floodwaters by distinguishing land and water surfaces
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/20">
                    <h5 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center">
                      <Eye className="w-6 h-6 mr-3" />
                      All-Weather Monitoring
                    </h5>
                    <p className="text-gray-300 text-sm mb-3">
                      SAR's microwave sensors penetrate dense monsoon clouds, providing uninterrupted monitoring capabilities.
                    </p>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Continuous information flow to ASDMA and response agencies
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Round-the-clock monitoring of evolving flood crisis
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                    <h5 className="text-xl font-semibold text-green-300 mb-3 flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-3" />
                      Damage Assessment & Relief Operations
                    </h5>
                    <p className="text-gray-300 text-sm mb-3">
                      High-resolution SAR imagery enabled comprehensive damage assessment and strategic relief planning.
                    </p>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Assessment of agricultural, residential, and infrastructure damage
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Identification of marooned villages and safe access routes
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                    <h5 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
                      <Waves className="w-6 h-6 mr-3" />
                      Monitoring River Dynamics
                    </h5>
                    <p className="text-gray-300 text-sm mb-3">
                      SAR imagery tracked the Brahmaputra and its tributaries for flood forecasting and early warnings.
                    </p>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Monitoring dangerously high water levels and river course changes
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Detection of embankment breaches for downstream warnings
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Additional Info Box */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm border border-emerald-300/20 rounded-2xl p-6 relative z-10"
            >
              <h5 className="text-lg font-semibold text-emerald-300 mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-3" />
                Technology Impact
              </h5>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Enabled 24/7 monitoring despite monsoon cloud cover</li>
                <li>• Reduced response time for emergency services</li>
                <li>• Provided accurate damage assessment for relief planning</li>
                <li>• Supported early warning systems for downstream areas</li>
              </ul>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* Flood Prediction Model Section - Updated with Model Link */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-blue-900 relative overflow-hidden">
        {/* Enhanced Droplet Animation */}
        <DropletAnimation density="heavy" colorScheme="blue" />

        {/* Neural Network Visual Effects */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`neural-${i}`}
              className="absolute border border-blue-400/20 rounded-full"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 12,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Flood Prediction
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Experience our cutting-edge machine learning model that analyzes SAR imagery to predict flood patterns and assess flood risk in real-time.
              </p>
              
              <motion.div className="space-y-4">
                <Link
                  to="/sar-predictor"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 border border-blue-400/20 backdrop-blur-sm hover:scale-105"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  Launch SAR Flood Prediction Model
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </Link>
                
                <p className="text-sm text-gray-400">
                  Upload SAR images and get instant flood risk assessment powered by TensorFlow.js
                </p>
              </motion.div>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Radar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Analysis</h3>
                <p className="text-gray-300 text-sm">
                  Process SAR imagery instantly with our optimized neural network
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-300/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visual Predictions</h3>
                <p className="text-gray-300 text-sm">
                  See flood probability maps overlaid on your input imagery
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <AlertTriangle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Risk Assessment</h3>
                <p className="text-gray-300 text-sm">
                  Get detailed flood risk scores and confidence intervals
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-700/30 py-12 px-4 relative overflow-hidden">
        <DropletAnimation density="light" colorScheme="blue" />
        
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
                Advanced SAR flood detection and monitoring solutions
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

export default Floods;