import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Snowflake, Thermometer, Activity, MapPin, TrendingDown, Calendar, ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const Glacier = () => {
  const [isReasonsDropdownOpen, setIsReasonsDropdownOpen] = useState(false);
  const [isImpactsDropdownOpen, setIsImpactsDropdownOpen] = useState(false);
  const [isBearReasonsDropdownOpen, setIsBearReasonsDropdownOpen] = useState(false);
  const [isBearImpactsDropdownOpen, setIsBearImpactsDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fixed video path - ensure this matches your actual file location
  const videoPath = "/.bolt/assets/gangotri.mp4"; // or wherever your video file is located

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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

  const dropdownVariants = {
    closed: { height: 0, opacity: 0 },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section with Glacier Background Image */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/.bolt/assets/glacierback.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Sky blue tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 to-blue-900/60"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-30">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-sky-50 mb-8 leading-tight drop-shadow-2xl"
          >
            SAR Glacier Monitoring
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-sky-100 mb-12 font-light drop-shadow-lg"
          >
            Tracking Ice Dynamics Through Radar Vision
          </motion.h2>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-900 via-blue-900 to-sky-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Why SAR for Glacier Monitoring Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-sky-50 text-center mb-16">
              Why SAR for Glacier Monitoring?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-sky-500/25 to-blue-600/25 backdrop-blur-sm border border-sky-300/40 rounded-3xl p-8 hover:bg-sky-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Snowflake className="w-10 h-10 text-sky-400 mr-4" />
                  <h4 className="text-2xl font-bold text-sky-200">Cloud Penetration</h4>
                </div>
                <p className="text-sky-100 leading-relaxed">
                  SAR signals penetrate clouds and weather, providing clear views of 
                  glacial surfaces when optical sensors are blocked by atmospheric conditions.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-blue-500/25 to-sky-600/25 backdrop-blur-sm border border-blue-300/40 rounded-3xl p-8 hover:bg-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Thermometer className="w-10 h-10 text-blue-400 mr-4" />
                  <h4 className="text-2xl font-bold text-blue-200">Polar Night Operation</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Continuous monitoring during polar winter months when optical satellites 
                  cannot function due to extended darkness periods.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-sky-500/25 to-blue-600/25 backdrop-blur-sm border border-sky-300/40 rounded-3xl p-8 hover:bg-sky-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Activity className="w-10 h-10 text-sky-400 mr-4" />
                  <h4 className="text-2xl font-bold text-sky-200">Ice Movement Tracking</h4>
                </div>
                <p className="text-sky-100 leading-relaxed">
                  SAR interferometry precisely measures glacier flow rates and ice 
                  dynamics, crucial for understanding glacial response to climate change.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Case Studies Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-sky-50 text-center mb-16">
              Case Studies
            </h3>

            <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
              {/* Gangotri Glacier Case Study */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-sky-500/25 to-blue-600/25 backdrop-blur-sm border border-sky-300/40 rounded-3xl p-8 hover:bg-sky-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Mountain className="w-10 h-10 text-sky-400 mr-4" />
                  <h4 className="text-2xl font-bold text-sky-200">Gangotri Glacier, Uttarakhand</h4>
                </div>
                
                {/* Overview Section with Video Frame */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h5 className="text-xl font-semibold text-sky-200 mb-4">Overview</h5>
                  <div className="bg-gradient-to-br from-sky-500/15 to-blue-600/15 backdrop-blur-sm border border-sky-300/30 rounded-2xl p-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Text Content */}
                      <div>
                        <p className="text-sky-100 leading-relaxed">
                          The Gangotri Glacier, situated in the Garhwal Himalayas of Uttarakhand, is one of India's largest glaciers and the principal source of the Bhagirathi River, which feeds into the Ganga. Stretching approximately 30 km, it provides critical freshwater to millions across northern India and holds immense cultural and ecological significance.
                        </p>
                      </div>
                      
                      {/* Video Frame */}
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="relative bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-2xl overflow-hidden border border-sky-300/40 group">
                          {/* Video Element */}
                          <div className="aspect-video relative overflow-hidden">
                            <video
                              ref={videoRef}
                              className="w-full h-full object-cover"
                              onPlay={() => setIsPlaying(true)}
                              onPause={() => setIsPlaying(false)}
                              onEnded={() => setIsPlaying(false)}
                              controls
                              preload="metadata"
                            >
                              <source src={videoPath} type="video/mp4" />
                              <p className="text-sky-200 p-4">
                                Your browser does not support the video tag. 
                                <a href={videoPath} className="text-sky-400 hover:text-sky-300 underline ml-1">
                                  Download the video instead.
                                </a>
                              </p>
                            </video>
                          </div>
                          
                          {/* Video Caption */}
                          <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-sky-200 text-sm mt-3 text-center font-light"
                          >
                            SAR satellite data showing glacial retreat patterns over time
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>
                
                

                {/* Reasons for Melting Dropdown */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <motion.button
                    onClick={() => setIsReasonsDropdownOpen(!isReasonsDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-sky-500/30 to-blue-600/30 backdrop-blur-sm border border-sky-300/50 rounded-2xl p-6 flex items-center justify-between hover:from-sky-500/40 hover:to-blue-600/40 transition-all duration-300"
                  >
                    <h5 className="text-xl font-semibold text-sky-200">Reasons for Melting</h5>
                    <motion.div
                      animate={{ rotate: isReasonsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-sky-300" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isReasonsDropdownOpen ? "open" : "closed"}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-sky-500/15 to-blue-600/15 backdrop-blur-sm border border-sky-300/30 rounded-2xl mt-4 p-6">
                      <div className="space-y-4">
                        <div className="bg-sky-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Rising Temperatures:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Mean annual temperature has increased, accelerating melting.
                          </p>
                        </div>
                        <div className="bg-sky-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Decreasing Snow Cover / Snowfall:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Less winter snow → less accumulation that would normally offset summer melt.
                          </p>
                        </div>
                        <div className="bg-sky-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Earlier Summer Melting:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Peak discharge shifted from August to July, indicating melting happens earlier in the season.
                          </p>
                        </div>
                        <div className="bg-sky-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Base Thinning:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            The glacier's thickness (mass) is decreasing, especially at the base, making it more fragile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>
                
                {/* Impact of Melting Dropdown */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <motion.button
                    onClick={() => setIsImpactsDropdownOpen(!isImpactsDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-sky-500/30 to-blue-600/30 backdrop-blur-sm border border-sky-300/50 rounded-2xl p-6 flex items-center justify-between hover:from-sky-500/40 hover:to-blue-600/40 transition-all duration-300"
                  >
                    <h5 className="text-xl font-semibold text-sky-200">Impact of Melting</h5>
                    <motion.div
                      animate={{ rotate: isImpactsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-sky-300" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isImpactsDropdownOpen ? "open" : "closed"}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-sky-500/15 to-blue-600/15 backdrop-blur-sm border border-sky-300/30 rounded-2xl mt-4 p-6">
                      <div className="space-y-4">
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Less Snowmelt Flow:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Over four decades, ~10% drop in snowmelt contribution to total flow.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Water Security Risk:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Bhagirathi/Ganga river flow patterns are changing, affecting agriculture, drinking water, power etc.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Ecosystem Changes:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Alteration in melt timing and reduced snow cover affect plants, animals adapted to cold conditions.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-sky-200 mb-2">Potential Fragmentation & Vulnerability:</div>
                          <p className="text-sky-100 text-sm leading-relaxed">
                            Because of thinning, risk of parts breaking off, altering flow, risk to stability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>
              </motion.div>

              {/* Bear Glacier, Alaska Case Study */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-blue-500/25 to-cyan-600/25 backdrop-blur-sm border border-blue-300/40 rounded-3xl p-8 hover:bg-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Mountain className="w-10 h-10 text-blue-400 mr-4" />
                  <h4 className="text-2xl font-bold text-blue-200">Bear Glacier, Alaska</h4>
                </div>
                
                {/* Overview Section */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h5 className="text-xl font-semibold text-blue-200 mb-4">Overview</h5>
                  <div className="bg-gradient-to-br from-blue-500/15 to-cyan-600/15 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
                    <p className="text-blue-100 leading-relaxed">
                      Located within Kenai Fjords National Park, Bear Glacier is Alaska's longest glacier originating from the Harding Icefield. Stretching over 13 miles, it flows toward the Gulf of Alaska, forming a striking lagoon at its terminus. Its proximity to the ocean makes it highly sensitive to temperature and sea-level fluctuations.
                    </p>
                  </div>
                </motion.section>

                {/* Video Frames Section */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h5 className="text-xl font-semibold text-blue-200 mb-6">SAR Monitoring Data</h5>
                  <div className="bg-gradient-to-br from-blue-500/15 to-cyan-600/15 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 mb-6">
                    <p className="text-blue-100 leading-relaxed">
                      The following video frames illustrate the changes in Bear Glacier over time as observed through Synthetic Aperture Radar (SAR) imagery:
                    </p>
                  </div>
                    
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* First Video Frame */}
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="relative bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-2xl overflow-hidden border border-blue-300/40 group">
                        {/* Video Element */}
                        <div className="aspect-video relative overflow-hidden">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src="/.bolt/assets/bearoptical.mp4" type="video/mp4" />
                            <p className="text-blue-200 p-4">
                              Your browser does not support the video tag or video file is missing.
                              <br />
                              <span className="text-blue-400 text-sm">
                                Expected file: /.bolt/assets/bearoptical.mp4
                              </span>
                            </p>
                          </video>
                        </div>
                        
                        {/* Video Caption */}
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="text-blue-200 text-sm mt-3 text-center font-light"
                        >
                          Optical image of glacial melt
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Second Video Frame */}
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl overflow-hidden border border-cyan-300/40 group">
                        {/* Video Element */}
                        <div className="aspect-video relative overflow-hidden">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src="/.bolt/assets/bearsar.mp4" type="video/mp4" />
                            <p className="text-blue-200 p-4">
                              Your browser does not support the video tag or video file is missing.
                              <br />
                              <span className="text-blue-400 text-sm">
                                Expected file: /.bolt/assets/bearsar.mp4
                              </span>
                            </p>
                          </video>
                        </div>
                        
                        {/* Video Caption */}
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          viewport={{ once: true }}
                          className="text-blue-200 text-sm mt-3 text-center font-light"
                        >
                          SAR image of glacial melt
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Reasons for Melting Dropdown */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <motion.button
                    onClick={() => setIsBearReasonsDropdownOpen(!isBearReasonsDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500/30 to-cyan-600/30 backdrop-blur-sm border border-blue-300/50 rounded-2xl p-6 flex items-center justify-between hover:from-blue-500/40 hover:to-cyan-600/40 transition-all duration-300"
                  >
                    <h5 className="text-xl font-semibold text-blue-200">Reasons for Melting</h5>
                    <motion.div
                      animate={{ rotate: isBearReasonsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-blue-300" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isBearReasonsDropdownOpen ? "open" : "closed"}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-blue-500/15 to-cyan-600/15 backdrop-blur-sm border border-blue-300/30 rounded-2xl mt-4 p-6">
                      <div className="space-y-4">
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Rising Temperatures:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Regional warming has accelerated ice melt in the Kenai Peninsula.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Ocean Influence:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Warm oceanic air and currents increase coastal glacier retreat.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Reduced Snowfall:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Less accumulation limits glacier regeneration.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Black Carbon & Dust:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Lowers albedo, increasing surface heat absorption.
                          </p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Climate Feedback Loop:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Thinning ice and exposed rock absorb more heat, speeding up melting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>

                {/* Impact of Melting Dropdown */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <motion.button
                    onClick={() => setIsBearImpactsDropdownOpen(!isBearImpactsDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500/30 to-cyan-600/30 backdrop-blur-sm border border-blue-300/50 rounded-2xl p-6 flex items-center justify-between hover:from-blue-500/40 hover:to-cyan-600/40 transition-all duration-300"
                  >
                    <h5 className="text-xl font-semibold text-blue-200">Impact of Melting</h5>
                    <motion.div
                      animate={{ rotate: isBearImpactsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-blue-300" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isBearImpactsDropdownOpen ? "open" : "closed"}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-blue-500/15 to-cyan-600/15 backdrop-blur-sm border border-blue-300/30 rounded-2xl mt-4 p-6">
                      <div className="space-y-4">
                        <div className="bg-cyan-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Lagoon Formation:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Created the Bear Glacier Lagoon (~19 km²).
                          </p>
                        </div>
                        <div className="bg-cyan-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Glacial Lake Outburst Floods (GLOFs):</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Recorded in 2018 and 2019.
                          </p>
                        </div>
                        <div className="bg-cyan-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Coastal & Marine Change:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Altered local ecosystems and sediment flow.
                          </p>
                        </div>
                        <div className="bg-cyan-500/10 rounded-xl p-4">
                          <div className="font-medium text-blue-200 mb-2">Tourism & Habitat Risk:</div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Increased instability affects both ecology and nearby tourism zones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-sky-950 to-blue-900 border-t border-sky-700/50 py-12 px-4 relative overflow-hidden">
        {/* Add droplet animation */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`footer-drop-${i}`}
              className="absolute bg-sky-300/20 rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: '50% 50% 50% 65%',
                transform: 'rotate(35deg)'
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 15 - 7.5],
                rotate: [35, 40, 35],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
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
                  <h3 className="text-2xl font-bold text-sky-100">ELITE ERUDITE</h3>
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
              <p className="text-lg text-sky-100 mb-2">
                Advanced SAR glacier monitoring solutions
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent my-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sky-100 text-sm">
              © 2025 ELITE ERUDITE. Educational content for learning purposes
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Glacier;
