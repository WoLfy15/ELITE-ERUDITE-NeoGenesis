import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Brain, Zap, Eye, AlertTriangle, CheckCircle, Loader, Image, Activity } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

// TypeScript declaration for tiff.js (loaded via CDN)
declare const Tiff: {
  new(options: { buffer: ArrayBuffer }): {
    width(): number;
    height(): number;
    toCanvas(): HTMLCanvasElement;
  };
};

interface PredictionResult {
  predictedClass: string;
  confidence: string;
  rawOutput: number[];
}

// Enhanced Droplet Animation Component
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
    purple: {
      large: 'from-purple-400/20 to-purple-600/30',
      medium: 'from-violet-300/15 to-purple-500/25',
      small: 'from-purple-200/10 to-violet-400/20',
      particles: 'bg-purple-300/10',
      ripples: 'border-purple-400/20'
    }
  };
  
  const colors = colorSchemes[colorScheme] || colorSchemes.blue;

  return (
    <div className="absolute inset-0 z-0">
      {/* Large Droplets */}
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

      {/* Medium Droplets */}
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

      {/* Small Droplets */}
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

      {/* Floating Water Particles */}
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

const SARPredictor: React.FC = () => {
  // State management
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [status, setStatus] = useState('Waiting for model to load...');
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  // Refs for DOM elements
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageSourceElement = useRef<HTMLImageElement | HTMLCanvasElement | null>(null);

  // Configuration
  const MODEL_URL = '/.bolt/assets/model/model.json';
  const TARGET_SIZE = 256;

  // Load model on component mount
  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      setStatus('Loading model...');
      const loadedModel = await tf.loadLayersModel(MODEL_URL);
      setModel(loadedModel);
      setIsModelLoaded(true);
      setStatus('Model loaded successfully. Upload an image to begin prediction.');
      console.log('Model Summary:', loadedModel.summary());
    } catch (error) {
      console.error('Error loading model:', error);
      setStatus('ERROR: Failed to load model. Check console for path/CORS error.');
    }
  };

  const preprocessImage = (sourceElement: HTMLImageElement | HTMLCanvasElement) => {
    return tf.tidy(() => {
      let tensor = tf.browser.fromPixels(sourceElement);
      tensor = tf.image.resizeBilinear(tensor, [TARGET_SIZE, TARGET_SIZE]);
      let grayscaleTensor = tensor.mean(2, true);
      let twoChannelTensor = tf.concat([grayscaleTensor, grayscaleTensor], 2);
      twoChannelTensor = twoChannelTensor.div(255.0);
      const inputTensor = twoChannelTensor.expandDims(0);
      return inputTensor;
    });
  };

  const runPrediction = async () => {
    if (!model || !isImageLoaded || !imageSourceElement.current) {
      setStatus('Error: Model or image not ready.');
      return;
    }

    setStatus('Preprocessing image and predicting...');
    setIsPredicting(true);

    try {
      const inputTensor = preprocessImage(imageSourceElement.current);
      const prediction = model.predict(inputTensor) as tf.Tensor;
      const outputArray = await prediction.data();

      const classLabels = ['No Flood', 'Flood'];
      const maxIndex = Array.from(outputArray).indexOf(Math.max(...Array.from(outputArray)));
      const predictedClass = classLabels[maxIndex];
      const confidence = (outputArray[maxIndex] * 100).toFixed(2);

      setStatus('Prediction complete.');
      setPredictionResult({
        predictedClass,
        confidence,
        rawOutput: Array.from(outputArray)
      });

      inputTensor.dispose();
      prediction.dispose();
    } catch (e) {
      setStatus('ERROR during prediction. Check console.');
      console.error('Prediction error:', e);
    }

    setIsPredicting(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset state
    setIsImageLoaded(false);
    setPredictionResult(null);
    
    const reader = new FileReader();

    // TIFF File Handling
    if (file.type === 'image/tiff') {
      reader.onload = (e) => {
        const buffer = e.target?.result as ArrayBuffer;
        const tiff = new Tiff({ buffer: buffer });
        const tiffCanvas = tiff.toCanvas();

        // Display the TIFF on the visible img tag for user feedback
        if (imageRef.current) {
          imageRef.current.src = tiffCanvas.toDataURL();
          imageRef.current.style.display = 'block';
        }

        // Set the canvas as the source for TF.js
        imageSourceElement.current = tiffCanvas;
        setIsImageLoaded(true);
        setStatus('Image loaded successfully. Ready for prediction.');
      };
      reader.readAsArrayBuffer(file);
    } else {
      // JPG/PNG File Handling
      reader.onload = (e) => {
        if (imageRef.current && e.target?.result) {
          imageRef.current.src = e.target.result as string;
          imageRef.current.style.display = 'block';
          imageSourceElement.current = imageRef.current;
          setIsImageLoaded(true);
          setStatus('Image loaded successfully. Ready for prediction.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isPredictButtonEnabled = isModelLoaded && isImageLoaded && !isPredicting;

  const getStatusIcon = () => {
    if (status.includes('ERROR')) return <AlertTriangle className="w-5 h-5 text-red-400" />;
    if (status.includes('complete')) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (status.includes('Loading') || status.includes('Preprocessing')) return <Loader className="w-5 h-5 text-blue-400 animate-spin" />;
    if (status.includes('loaded successfully')) return <CheckCircle className="w-5 h-5 text-green-400" />;
    return <Activity className="w-5 h-5 text-blue-400" />;
  };

  const getStatusColor = () => {
    if (status.includes('ERROR')) return 'text-red-400';
    if (status.includes('complete')) return 'text-green-400';
    if (status.includes('loaded successfully')) return 'text-green-400';
    return 'text-blue-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <DropletAnimation density="medium" colorScheme="blue" />
      
      {/* Neural Network Visual Effects */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`neural-${i}`}
            className="absolute border border-purple-400/20 rounded-full"
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

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/floods"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-white font-medium rounded-2xl border border-blue-400/20 backdrop-blur-sm hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Floods
          </Link>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SAR Flood Prediction Model
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Upload SAR imagery to detect flood patterns using our advanced CNN model trained on satellite data
            </p>
          </motion.div>

          {/* Main Prediction Interface */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Panel - Upload and Image Display */}
            <div className="space-y-8">
              {/* Upload Section */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-300/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <DropletAnimation density="light" colorScheme="blue" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <Upload className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Upload SAR Image</h3>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/jpeg, image/png, image/tiff"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-blue-400/40 rounded-2xl p-8 text-center bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-white font-medium mb-2">Click to upload or drag and drop</p>
                      <p className="text-gray-300 text-sm">Supports JPEG, PNG, and TIFF formats</p>
                    </div>
                  </motion.div>

                  <div className="mt-6 text-sm text-gray-300">
                    <p className="mb-2"><span className="font-medium text-blue-300">Supported formats:</span></p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-blue-500/10 rounded-lg p-2 text-center">
                        <span className="font-medium">.jpg</span>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-2 text-center">
                        <span className="font-medium">.png</span>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-2 text-center">
                        <span className="font-medium">.tiff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: isImageLoaded ? 1 : 0.3, 
                  scale: isImageLoaded ? 1 : 0.9 
                }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/20 rounded-3xl p-6 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Image Preview</h3>
                </div>

                <div className="relative bg-black/20 rounded-2xl overflow-hidden" style={{ minHeight: '300px' }}>
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Image className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-400">No image uploaded</p>
                      </div>
                    </div>
                  )}
                  
                  <img
                    ref={imageRef}
                    className={`w-full h-auto max-h-80 object-contain rounded-2xl transition-all duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    alt="Input SAR Image"
                    style={{ display: isImageLoaded ? 'block' : 'none' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Panel - Controls and Results */}
            <div className="space-y-8">
              {/* Status Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/20 rounded-3xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">System Status</h3>
                </div>

                <div className={`flex items-center p-4 rounded-2xl bg-slate-800/30 ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <span className="ml-3 font-medium">{status}</span>
                </div>
              </motion.div>

              {/* Prediction Button */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  onClick={runPrediction}
                  disabled={!isPredictButtonEnabled}
                  whileHover={isPredictButtonEnabled ? { scale: 1.02 } : {}}
                  whileTap={isPredictButtonEnabled ? { scale: 0.98 } : {}}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    isPredictButtonEnabled
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg border border-blue-400/20'
                      : 'bg-gray-600/20 text-gray-400 cursor-not-allowed border border-gray-600/20'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {isPredicting ? (
                      <>
                        <Loader className="w-5 h-5 mr-3 animate-spin" />
                        Analyzing...
                      </>
                    ) : !isModelLoaded ? (
                      <>
                        <Loader className="w-5 h-5 mr-3 animate-spin" />
                        Loading Model...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5 mr-3" />
                        Run Prediction
                      </>
                    )}
                  </div>
                </motion.button>
              </motion.div>

              {/* Results Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: predictionResult ? 1 : 0.3, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 backdrop-blur-sm border border-purple-300/20 rounded-3xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <DropletAnimation density="light" colorScheme="purple" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Prediction Results</h3>
                  </div>

                  {predictionResult ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      {/* Main Prediction */}
                      <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-400/30">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${
                          predictionResult.predictedClass === 'Flood' 
                            ? 'bg-red-500/20 text-red-300 border border-red-400/30' 
                            : 'bg-green-500/20 text-green-300 border border-green-400/30'
                        }`}>
                          {predictionResult.predictedClass === 'Flood' ? (
                            <AlertTriangle className="w-4 h-4 mr-2" />
                          ) : (
                            <CheckCircle className="w-4 h-4 mr-2" />
                          )}
                          <span className="font-bold text-lg">{predictionResult.predictedClass}</span>
                        </div>
                        
                        <p className="text-2xl font-bold text-white mb-2">
                          {predictionResult.confidence}% Confidence
                        </p>
                        
                        <div className="w-full bg-gray-700/30 rounded-full h-3 mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${predictionResult.confidence}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-3 rounded-full ${
                              predictionResult.predictedClass === 'Flood' 
                                ? 'bg-gradient-to-r from-red-500 to-red-600' 
                                : 'bg-gradient-to-r from-green-500 to-green-600'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Raw Output */}
                      <div className="bg-slate-800/30 rounded-2xl p-4">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <Activity className="w-4 h-4 mr-2" />
                          Raw Model Output
                        </h4>
                        <div className="bg-black/20 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                          <pre className="text-gray-300">
                            {predictionResult.rawOutput.map((val, idx) => 
                              `${idx === 0 ? 'No Flood' : 'Flood'}: ${val.toFixed(6)}`
                            ).join('\n')}
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-gray-400">Upload an image and run prediction to see results</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Model Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-300/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <DropletAnimation density="light" colorScheme="blue" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                Model Information
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Architecture</h4>
                  <p className="text-gray-300 text-sm">
                    Convolutional Neural Network optimized for SAR imagery processing with 2-channel input
                  </p>
                </div>
                
                <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/20">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">Input Size</h4>
                  <p className="text-gray-300 text-sm">
                    256x256 pixels, automatically resized and normalized for optimal performance
                  </p>
                </div>
                
                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Classes</h4>
                  <p className="text-gray-300 text-sm">
                    Binary classification: Flood / No Flood with confidence scores
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden canvas for TIFF processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default SARPredictor;