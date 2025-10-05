import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Satellite, Eye, Zap, Globe, Waves, Mountain, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Play } from 'lucide-react';
import { image } from 'framer-motion/client';

const Home = () => {
  const sarRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // YouTube Video Configuration - Replace with your YouTube video ID
  const youtubeVideoId = "6A-JtU6abw0"; // Replace with actual YouTube video ID
  const youtubeEmbedUrl = `https://www.youtube.com/embed/6A-JtU6abw0?si=jYcTWtYu_Nxz2XGl`;

  // SAR Images data - you can replace these URLs with your actual images
  const sarImages = [
    {
      url: "/.bolt/assets/SAR1.jpg",
      title: "NISAR SAR Mission",
      description: "NASA's upcoming NISAR mission will provide detailed Earth observations"
    },
    {
      url: "/.bolt/assets/SAR2.jpg",
      title: "ALOS AVNIR-2 Image",
      description: "Advanced Land Observing Satellite imagery showing terrain details"
    },
    {
      url: "/.bolt/assets/SAR3.jpg",
      title: "ERS-2 Greenland",
      description: "European Remote Sensing satellite capturing Greenland ice formations"
    },
    {
      url: "/.bolt/assets/SAR4.jpg",
      title: "SAR Agriculture Monitoring",
      description: "Agricultural land use monitoring through SAR technology"
    },
    {
      url: "/.bolt/assets/SAR5.jpg",
      title: "Urban SAR Analysis",
      description: "Urban environment analysis using synthetic aperture radar"
    }
  ];

  // Reset to first image on component mount (from any navigation)
  useEffect(() => {
    setCurrentImageIndex(0);
    setPage([0, 0]);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sarImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sarImages.length) % sarImages.length);
  };

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

  // Updated Cube transition variants
  const cubeVariants = {
    enter: (direction: number) => {
      return {
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.8,
      };
    },
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        rotateY: direction < 0 ? 90 : -90,
        opacity: 0,
        scale: 0.8,
      };
    }
  };

  const paginate = (newDirection: number) => {
    const newIndex = newDirection === 1 
      ? (currentImageIndex + 1) % sarImages.length
      : (currentImageIndex - 1 + sarImages.length) % sarImages.length;
    
    setCurrentImageIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  // Animated dots component
  const AnimatedDots = ({ color = "green", opacity = 0.1, size = 2 }) => {
    // Generate dots only once to prevent re-creation
    const dots = useMemo(() => 
      [...Array(50)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })), []
    );

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
    <div className="pt-0">
      {/* Hero Section with Earth Background */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/.bolt/assets/EARTH.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/60 to-slate-800/70"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-cyan-400 mb-8 leading-tight"
          >
            Through the Radar Looking Glass
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 font-light"
          >
            Revealing Earth Processes with SAR
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Discover how Synthetic Aperture Radar technology penetrates clouds, darkness, and 
            weather to reveal hidden Earth processes with unprecedented clarity and precision.
          </motion.p>
        </div>
      </motion.section>

      {/* What is SAR Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <AnimatedDots color="green" opacity={0.15} size={3} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What is SAR?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - SAR Definition */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Waves className="w-8 h-8 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Synthetic Aperture Radar</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                SAR is a sophisticated remote sensing technology that uses radio waves to create 
                high-resolution images of Earth's surface. Unlike optical satellites that depend on 
                sunlight, SAR systems actively emit microwave pulses and analyze the reflected signals.
              </p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6"
              >
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                  <h4 className="text-xl font-semibold text-white">All-Weather Vision</h4>
                </div>
                <p className="text-gray-300">
                  The microwave frequencies used by SAR can penetrate clouds, rain, and darkness, 
                  providing continuous Earth observation capabilities regardless of weather conditions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Key Capabilities */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Key Capabilities</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Zap className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Millimeter Precision:</h4>
                    <p className="text-gray-300">Detect ground movement as small as a few millimeters</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Zap className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Surface Penetration:</h4>
                    <p className="text-gray-300">See through vegetation and sand to reveal subsurface features</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Zap className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">3D Mapping:</h4>
                    <p className="text-gray-300">Create detailed topographic models of terrain</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Zap className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Change Detection:</h4>
                    <p className="text-gray-300">Monitor landscape evolution over time</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">How It Works</h4>
                <p className="text-gray-300">
                  SAR satellites orbit Earth while continuously transmitting radar pulses toward the surface. 
                  The time delay and intensity of reflected signals are processed to create detailed images 
                  and measurements.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PROJECT Section - YouTube Video */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-800 relative overflow-hidden">
        <AnimatedDots color="green" opacity={0.15} size={3} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              OUR PROJECT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Watch our comprehensive overview of SAR technology and its revolutionary applications 
              in Earth observation and environmental monitoring
            </p>
          </motion.div>

          {/* YouTube Video Frame */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              
              {/* YouTube Video Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10"
              >
                {/* YouTube Embed iframe */}
                {youtubeVideoId && youtubeVideoId !== "YOUR_YOUTUBE_VIDEO_ID_HERE" ? (
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={youtubeEmbedUrl}
                    title="SAR Technology Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  // Placeholder when no video ID is provided
                  <div className="w-full h-full bg-gradient-to-br from-slate-900/50 to-blue-900/50 flex flex-col items-center justify-center text-center p-8">
                    <Play className="w-16 h-16 text-white/60 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Video Coming Soon</h3>
                    <p className="text-gray-300 mb-6 max-w-md">
                      Replace the YouTube video ID in the code to display your SAR project video here.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-md">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>Instructions:</strong>
                      </p>
                      <p className="text-xs text-gray-400 font-mono">
                        Find: youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID_HERE"<br/>
                        Replace with your actual YouTube video ID
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Video Info Section */}
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAR Images Section with Cube Transitions */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-indigo-900 to-blue-900 relative overflow-hidden">
        <AnimatedDots color="green" opacity={0.12} size={4} />
        <div className="max-w-full mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SAR Images
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore the unique visual characteristics of SAR imagery and how different features 
              appear through the radar perspective
            </p>
          </motion.div>

          {/* Image Carousel with Cube Animations */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl mb-6 w-full"
            style={{ perspective: '1000px' }}
          >
            {/* Main Image Display with Cube AnimatePresence */}
            <div className="relative h-[350px] md:h-[400px] lg:h-[450px] w-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  variants={cubeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute inset-0"
                  style={{ 
                    transformOrigin: 'center',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src={sarImages[currentImageIndex].url}
                    alt={sarImages[currentImageIndex].title}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Image Info Overlay with entrance animation */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl backdrop-blur-sm"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {sarImages[currentImageIndex].title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {sarImages[currentImageIndex].description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <motion.button
                onClick={() => {
                  prevImage();
                  paginate(-1);
                }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10 border border-white/20"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={() => {
                  nextImage();
                  paginate(1);
                }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10 border border-white/20"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Thumbnail Navigation with stagger animation */}
            <motion.div 
              className="flex justify-center space-x-4 mt-6 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {sarImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const newDirection = index > currentImageIndex ? 1 : -1;
                    setCurrentImageIndex(index);
                    paginate(newDirection);
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'ring-4 ring-cyan-400 scale-110'
                      : 'ring-2 ring-white/20 hover:ring-white/40'
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-20 h-16 object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Image Counter with fade animation */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-gray-300">
                {currentImageIndex + 1} of {sarImages.length}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Behind SAR Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <AnimatedDots color="green" opacity={0.1} size={3} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Technology Behind SAR
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Satellite Platforms */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Satellite className="w-10 h-10 text-teal-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Satellite Platforms</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Modern SAR missions like Sentinel-1, ALOS-2, and TerraSAR-X orbit Earth at 
                altitudes of 500-700km, providing global coverage with repeat cycles of 6-35 days.
              </motion.p>
              
              <div className="space-y-3 text-sm">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex justify-between"
                >
                  <span className="text-gray-400">Frequency Bands:</span>
                  <span className="text-cyan-400 font-semibold">X, C, L, P-band</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-between"
                >
                  <span className="text-gray-400">Resolution:</span>
                  <span className="text-cyan-400 font-semibold">1m - 100m</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-between"
                >
                  <span className="text-gray-400">Coverage:</span>
                  <span className="text-cyan-400 font-semibold">10km - 500km swath</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Signal Processing */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Waves className="w-10 h-10 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Signal Processing</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Advanced algorithms transform raw radar echoes into interpretable images, using 
                techniques like range compression, azimuth focusing, and interferometric processing.
              </motion.p>
              
              <div className="space-y-3 text-sm">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Range-Doppler Algorithm</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Chirp Scaling Algorithm</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Interferometric Processing</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Polarimetric Decomposition</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Data Analysis */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Data Analysis</h3>
              </div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Machine learning and AI techniques extract meaningful information from SAR data, 
                enabling automated detection of changes and anomalies in Earth systems.
              </motion.p>
              
              <div className="space-y-3 text-sm">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Deep Learning Classification</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Time Series Analysis</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Change Detection Algorithms</span>
                </motion.div>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">3D Reconstruction Techniques</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-700/30 py-12 px-4 relative overflow-hidden">
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

export default Home;