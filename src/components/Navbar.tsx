import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Radar } from 'lucide-react';

const Navbar = () => {
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
  ];

  const storyItems = [
    { name: 'Floods', path: '/floods' },
    { name: 'Wild Fires', path: '/wildfires' },
    { name: 'Glaciers', path: '/glacier' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/10' : 'bg-white/5'
      } backdrop-blur-lg border border-white/20 rounded-3xl px-8 py-4 shadow-2xl`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src="/.bolt/assets/logo.svg"
            alt="Logo"
            className="w-8 h-8 group-hover:opacity-80 transition-opacity"
          />
          <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            ELITE ERUDITE
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-blue-300 bg-blue-500/20'
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsStoriesOpen(!isStoriesOpen)}
              className="flex items-center space-x-1 px-4 py-2 rounded-full text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 md:hidden"
            >
              <span>More</span>
              <motion.div
                animate={{ rotate: isStoriesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isStoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl min-w-[160px] md:hidden"
                >
                  {storyItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsStoriesOpen(false)}
                        className="block px-6 py-3 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop dropdown for Stories */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsStoriesOpen(!isStoriesOpen)}
              className="flex items-center space-x-1 px-4 py-2 rounded-full text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300"
            >
              <span>Stories</span>
              <motion.div
                animate={{ rotate: isStoriesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isStoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl min-w-[160px]"
                >
                  {storyItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsStoriesOpen(false)}
                        className="block px-6 py-3 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
              location.pathname === '/about'
                ? 'text-blue-300 bg-blue-500/20'
                : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;