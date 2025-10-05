import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Eye, Clock, MapPin, Zap, BarChart3, Leaf } from 'lucide-react';

const WildFires = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  // Optimized Lightweight Animation Component
  const LightAmberAnimation = ({ density = 'light' }) => {
    const particleCount = density === 'heavy' ? 15 : density === 'medium' ? 8 : 5;
    
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Reduced particle count and simpler animations */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-amber-200/20 to-orange-400/30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.6, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Simple floating embers */}
        {[...Array(Math.floor(particleCount / 2))].map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/40"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -150],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-0">
      {/* Hero Section - NO AMBER EFFECT */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/.bolt/assets/wildbackdrop.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-30">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-50 mb-8 leading-tight drop-shadow-2xl"
          >
            SAR Wildfire Detection
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-50 mb-12 font-light drop-shadow-lg"
          >
            Penetrating Smoke to Reveal Fire's Path
          </motion.h2>
        </div>
      </motion.section>

      {/* Why SAR Section - WITH AMBER EFFECT */}
      <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-red-900 relative overflow-hidden">
        <LightAmberAnimation density="medium" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 pt-20 pb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why SAR for Wildfire Monitoring?
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:bg-amber-800/25 transition-colors duration-300 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <Eye className="w-10 h-10 text-amber-400 mr-4" />
                    <h3 className="text-2xl font-bold text-amber-300">Smoke Penetration</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    SAR signals penetrate smoke and haze, providing clear views of fire 
                    boundaries and behavior when optical sensors fail completely.
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:bg-amber-800/25 transition-colors duration-300 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <Clock className="w-10 h-10 text-amber-400 mr-4" />
                    <h3 className="text-2xl font-bold text-amber-300">Impact Analysis</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    By SAR imagery we can assess fire extent, severity, vegetation damage, providing critical data for effective response and recovery efforts.
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:bg-amber-800/25 transition-colors duration-300 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <MapPin className="w-10 h-10 text-amber-400 mr-4" />
                    <h3 className="text-2xl font-bold text-amber-300">Burn Scar Mapping</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    SAR excels at mapping burn scars and tracking recovery, providing 
                    critical data for post-fire ecosystem management and restoration.
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </motion.div>
              </div>
              
              {/* Introduction Card - Full Width */}
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.01, 
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:bg-amber-800/25 transition-colors duration-300 shadow-lg mt-8"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="w-10 h-10 text-amber-400 mr-4" />
                  <h3 className="text-2xl font-bold text-amber-300">Introduction</h3>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  The 2019–2020 Australian bushfires, known as <em>"Black Summer,"</em> were one of the worst ecological disasters in modern history. The fires raged across the continent, with <strong>New South Wales and Victoria</strong> being the most severely affected, but ultimately impacting every Australian state and territory. Burning over 24 million hectares, they caused massive losses of homes, wildlife, and vegetation. 
                </p>
                <p className="text-gray-200 leading-relaxed mt-4">
                  To assess the damage and recovery, we use satellite-based <em>remote sensing</em>, offering a clear, large-scale view from space.
                </p>
                <ul className="text-gray-200 mt-4 space-y-2">
                  <li> <strong>Sentinel-2 (Optical):</strong> Monitors vegetation health through visible and infrared imagery.</li>
                  <li> <strong>Sentinel-1 (SAR):</strong> Uses radar to detect land-surface and vegetation changes, even through clouds or smoke.</li>
                </ul>
                <p className="text-gray-200 leading-relaxed mt-4">
                  By combining both datasets, this study focuses specifically on the heavily impacted <strong>southeastern region, including New South Wales (NSW)</strong> and the <strong>Australian Capital Territory (ACT)</strong>. This area falls within the broader fire-affected corridor stretching from near Brisbane to south of Sydney and beyond. Our aim is to map fire severity, track regrowth, and identify impacted ecosystems, providing vital insight into post-fire recovery in this critical zone.
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Fire Analysis Section - WITH AMBER EFFECT */}
      

      {/* Burn Severity Section - WITH AMBER EFFECT */}
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-amber-900 to-orange-950 relative overflow-hidden">
        <LightAmberAnimation density="medium" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 pt-20 pb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Burn Severity Analysis
              </motion.h2>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left Side */}
                <div className="space-y-8">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-amber-900/25 to-orange-800/35 backdrop-blur-sm border border-amber-500/40 rounded-3xl p-8 hover:bg-amber-800/30 transition-colors duration-300 shadow-xl"
                  >
                    <div className="flex items-center mb-6">
                      <BarChart3 className="w-8 h-8 text-amber-400 mr-3" />
                      <h3 className="text-2xl font-bold text-amber-300">Burn Severity Calculation</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed mb-4">
                      To measure how intensely areas were burned, we used <em>Sentinel-2 optical data</em>. By comparing images <strong>before and after the fire</strong>, we calculated the <strong>Normalized Burn Ratio (NBR)</strong>, which highlights burned regions using the <strong>Near-Infrared (NIR)</strong> and <em>Short-Wave Infrared (SWIR)</em> bands.
                    </p>
                    <ul className="text-gray-200 space-y-3 mb-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <em>Healthy vegetation:</em> High NBR (reflects more NIR, less SWIR)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <em>Burned areas:</em> Low NBR (reflects more SWIR, less NIR)
                      </li>
                    </ul>
                    <p className="text-gray-200 leading-relaxed mb-4">
                      By subtracting <em>post-fire NBR from pre-fire NBR</em> (called <em>dNBR</em>), we quantified the change and classified it into categories: <strong>unburnt, low, moderate, high, and severe burn</strong>.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                      This <em>burn severity map</em> is essential for pinpointing the most affected areas and guiding <em>recovery and rehabilitation efforts</em>.
                    </p>
                    <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </motion.div>
                </div>

                {/* Right Side */}
                <div className="relative">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="w-full relative"
                  >
                    <div 
                      className="w-full h-80 bg-gray-800 rounded-2xl border border-amber-500/30 shadow-2xl"
                      style={{
                        backgroundImage: 'url(/.bolt/assets/severity.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />

                    {/* Color Palette */}
                    <motion.div
                      variants={cardVariants}
                      className="absolute right-4 top-4 bg-gradient-to-b from-amber-900/40 to-orange-800/60 backdrop-blur-md border border-amber-500/40 rounded-xl p-3 shadow-lg"
                    >
                      <h3 className="text-sm font-bold text-white mb-3 text-center">Severity</h3>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-sm border border-amber-300/20" style={{ backgroundColor: '#006400' }}></div>
                          <span className="text-white text-xs font-medium whitespace-nowrap">Unburned</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-sm border border-amber-300/20" style={{ backgroundColor: '#7FFFD4' }}></div>
                          <span className="text-white text-xs font-medium whitespace-nowrap">Low</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-sm border border-amber-300/20" style={{ backgroundColor: '#FFFF00' }}></div>
                          <span className="text-white text-xs font-medium whitespace-nowrap">Moderate</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-sm border border-amber-300/20" style={{ backgroundColor: '#FFA500' }}></div>
                          <span className="text-white text-xs font-medium whitespace-nowrap">High</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-sm border border-amber-300/20" style={{ backgroundColor: '#FF0000' }}></div>
                          <span className="text-white text-xs font-medium whitespace-nowrap">Very High</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
          
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Burnt Area Map using SAR Section - NEW SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-900 to-amber-950 relative overflow-hidden">
        <LightAmberAnimation density="medium" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 pt-20 pb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Burnt Area Map using SAR
              </motion.h2>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-amber-900/30 to-orange-800/25 backdrop-blur-sm border border-amber-500/40 rounded-3xl p-8 mb-8 shadow-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-amber-400 mr-3" />
                  <h3 className="text-xl font-bold text-amber-400">SAR-Based Burn Detection</h3>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Using <strong>Synthetic Aperture Radar (SAR)</strong> technology, we can detect burnt areas even through smoke and cloud cover. SAR data provides unique insights into surface texture changes caused by fire, revealing burn patterns that optical sensors might miss.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  The following map shows burnt areas detected using <em>Sentinel-1 SAR data</em>, highlighting the radar's ability to penetrate atmospheric conditions and provide reliable fire damage assessment.
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto w-1/2"></div>
              </motion.div>

              {/* SAR Burnt Area Map */}
              <motion.div 
                variants={itemVariants} 
                className="relative"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-6 shadow-2xl">
                  <iframe
                    src="/.bolt/assets/burnt_area-2.html"
                    title="SAR Burnt Area Detection Map"
                    width="100%"
                    height="500"
                    style={{ maxWidth: '100%', border: 'none', borderRadius: '16px' }}
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Vegetation Section - WITH AMBER EFFECT */}
      <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-red-950 relative overflow-hidden">
        <LightAmberAnimation density="medium" />
        
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 pt-20 pb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Vegetation Affected
              </motion.h2>
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-amber-900/30 to-orange-800/25 backdrop-blur-sm border border-amber-500/40 rounded-3xl p-8 mb-8 shadow-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-amber-400 mr-3" />
                  <h3 className="text-xl font-bold text-amber-400">Visualizing The Forest Cover In Burnt Area</h3>
                </div>
                <p className="text-xl text-gray-200 leading-relaxed text-center mb-6">
                  To study how different kinds of vegetation were affected we plotted a map using ESA WorldCover that shows different types of vegetation in different area and masked it with burnt area map. It helped us make a map to visualize different vegetation burnt in different regions of fire. From the map we can conclude that majorly trees, shrubland and grassland were burnt.
                </p>
                
                <p className="text-lg text-gray-200 leading-relaxed text-center mb-4">
                  To illustrate the dynamic effects on vegetation, we generated a time-series map utilizing <strong>Sentinel-1 VH data</strong> from four critical periods: <em>pre-fire, during the fire, post-fire, and one year post-fire</em>, while considering the burn severity map.
                </p>
                
                <p className="text-lg text-gray-200 leading-relaxed text-center mb-4">
                  On these maps, the color intensity corresponds to the strength of the VH backscatter:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center bg-amber-900/20 rounded-xl p-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-200"><strong>Bright Green:</strong> Strong VH signal, dense healthy vegetation</span>
                  </div>
                  <div className="flex items-center justify-center bg-amber-900/20 rounded-xl p-4">
                    <div className="w-4 h-4 bg-black rounded-full mr-3"></div>
                    <span className="text-gray-200"><strong>Black:</strong> Weak VH signal, bare soil or incinerated vegetation</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-200 leading-relaxed text-center">
                  The resulting sequence of maps tells a powerful story. The <em>"pre-fire"</em> map shows a vibrant green landscape. The <em>"post-fire"</em> map reveals a stark, dark scar where the vegetation was lost. Most importantly, the <em>"one-year later"</em> map shows patches of returning green, providing valuable insight into the pace and pattern of natural ecosystem regeneration and recovery.
                </p>
                
                <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto w-1/2"></div>
              </motion.div>

              {/* New iframe above the vegetation impact div */}
              <motion.div 
                variants={itemVariants} 
                className="relative mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-6 shadow-2xl">
                  <iframe
                    src="/.bolt/assets/revisedsar.html"
                    title="Vegetation Analysis"
                    width="100%"
                    height="500"
                    style={{ maxWidth: '100%', border: 'none', borderRadius: '16px' }}
                    allowFullScreen
                  />
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-amber-900/30 to-orange-800/25 backdrop-blur-sm border border-amber-500/40 rounded-3xl p-8 mb-8 shadow-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-amber-400 mr-3" />
                  <h3 className="text-xl font-bold text-amber-400">Imapct on Different Types of Vegetation</h3>
                </div>
                <p className="text-xl text-gray-200 leading-relaxed text-center">
                  To study how different kinds of vegetation were affected we plotted a map using ESA WorldCover that shows different types of vegetation in different area and masked it with burnt area map. It helped us make a map to visualize different vegetation burnt in different regions of fire. From the map we can conclude that majorly trees, shrubland and grassland were burnt.
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto w-1/2"></div>
              </motion.div>

              {/* Vegetation Map */}
              <motion.div 
                variants={itemVariants} 
                className="relative"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center gap-8">
                  <div className="flex-1 max-w-4xl">
                    <div className="bg-gradient-to-r from-amber-900/20 to-orange-800/30 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-6 shadow-2xl">
                      <iframe
                        src="/.bolt/assets/sar_vegetation_map-2.html"
                        title="Vegetation Affected by Fire Map"
                        width="100%"
                        height="500"
                        style={{ maxWidth: '100%', border: 'none', borderRadius: '16px' }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                  
                  {/* Vegetation Palette */}
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-b from-amber-900/40 to-orange-800/60 backdrop-blur-md border border-amber-500/40 rounded-xl p-4 w-64 h-fit shadow-xl"
                  >
                    <h3 className="text-sm font-bold text-white mb-3 text-center">Vegetation Types</h3>
                    <div className="space-y-2">
                      {[
                        { color: '#004000', label: 'Trees' },
                        { color: '#ffbb22', label: 'Shrubland' },
                        { color: '#ff0000', label: 'Grassland' },
                        { color: '#f096ff', label: 'Cropland' },
                        { color: '#ffff00', label: 'Built-up' },
                        { color: '#b4b4b4', label: 'Barren / sparse vegetation' },
                        { color: '#f0f0f0', label: 'Snow and ice' },
                        { color: '#0064c8', label: 'Open water' },
                        { color: '#0096a0', label: 'Herbaceous wetland' },
                        { color: '#00cf75', label: 'Mangroves' },
                        { color: '#fae6a0', label: 'Moss and lichen' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 hover:bg-white/10 rounded p-1 transition-colors">
                          <div className="w-4 h-4 rounded-sm border border-gray-300" style={{ backgroundColor: item.color }}></div>
                          <span className="text-gray-200 text-xs font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer - WITH AMBER EFFECT */}
      <footer className="bg-gradient-to-b from-amber-950 via-orange-900 to-red-950 border-t border-amber-700/30 py-12 px-4 relative overflow-hidden">
        <LightAmberAnimation density="light" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center mb-6 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
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

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right mb-6 md:mb-0"
            >
              <p className="text-lg text-white mb-2">
                Advanced SAR wildfire detection and monitoring solutions
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent my-8"
          />

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

export default WildFires;