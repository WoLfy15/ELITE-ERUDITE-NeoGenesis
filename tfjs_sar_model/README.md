# SAR CNN Predictor - React TypeScript App

This is a React TypeScript application that converts the original HTML SAR CNN model predictor into a modern React component. It supports 2-channel input processing for flood prediction using TensorFlow.js.

## Features

- **Multi-format Support**: Handles JPEG, PNG, and TIFF image formats
- **Real-time Prediction**: Uses TensorFlow.js for client-side model inference
- **React TypeScript**: Modern React with TypeScript for type safety
- **Responsive UI**: Clean and responsive user interface

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd tfjs_sar_model
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Model Requirements

Make sure you have the following files in the `public` directory:
- `model.json` - The TensorFlow.js model file
- Model weight files (usually `.bin` files referenced in model.json)

## Usage

1. **Load the application** - The model will automatically load when the page opens
2. **Upload an image** - Click "Choose File" and select a JPEG, PNG, or TIFF image
3. **Run prediction** - Click "Run Prediction" to get flood/no-flood classification
4. **View results** - See the prediction confidence and raw model output

## Project Structure

```
tfjs_sar_model/
├── public/
│   ├── index.html
│   ├── model.json          # Your TensorFlow.js model
│   └── *.bin              # Model weight files
├── src/
│   ├── SARPredictor.tsx   # Main prediction component
│   ├── App.tsx            # Root application component
│   ├── index.tsx          # Application entry point
│   ├── App.css           # Application styles
│   └── index.css         # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

## Key Changes from Original HTML

- **Component-based**: Converted to React functional component with hooks
- **Type Safety**: Full TypeScript support with proper typing
- **State Management**: Uses React hooks for state management
- **Modern Syntax**: ES6+ features and modern React patterns
- **Better Error Handling**: Improved error states and user feedback

## Dependencies

- **React 18**: Modern React with concurrent features
- **TypeScript**: Type safety and better development experience
- **TensorFlow.js**: Machine learning in the browser
- **tiff.js**: TIFF image format support

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment.

## Troubleshooting

1. **CORS Issues**: Make sure model files are served from the same domain or configure CORS properly
2. **TIFF Support**: Ensure tiff.js is loaded via CDN in index.html
3. **Model Loading**: Check browser console for model loading errors
4. **Memory Issues**: Large models may cause memory issues; monitor browser dev tools

## Contributing

Feel free to submit issues and enhancement requests!