import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  InputSection, 
  SimulationPanel, 
  KnapsackVisualization, 
  ScoreBoard, 
  ExplanationPanel, 
  Controls 
} from './components';
import { solveKnapsack, generateRandomItems } from './utils/algorithms';

function App() {
  // State Management
  const [items, setItems] = useState([]);
  const [capacity, setCapacity] = useState(50);
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);
  const [speed, setSpeed] = useState(1);
  const [solution, setSolution] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [animatingItem, setAnimatingItem] = useState(null);

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying || !solution || currentStepIdx >= solution.steps.length - 1) {
      return;
    }

    const delay = 2000 / speed;
    const timer = setTimeout(() => {
      setCurrentStepIdx(prev => {
        const nextIdx = prev + 1;
        if (nextIdx < solution.steps.length) {
          const step = solution.steps[nextIdx];
          setAnimatingItem({ value: step.profitGained });
          setTimeout(() => setAnimatingItem(null), 1500);
        }
        return nextIdx;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [isPlaying, solution, currentStepIdx, speed]);

  // Handlers
  const handleStartOptimization = () => {
    const result = solveKnapsack(items, capacity);
    setSolution(result);
    setSimulationStarted(true);
    setCurrentStepIdx(0);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (solution) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setSimulationStarted(false);
    setIsPlaying(false);
    setCurrentStepIdx(-1);
    setSolution(null);
    setAnimatingItem(null);
  };

  const handleNextStep = () => {
    if (solution && currentStepIdx < solution.steps.length - 1) {
      const nextIdx = currentStepIdx + 1;
      setCurrentStepIdx(nextIdx);
      const step = solution.steps[nextIdx];
      setAnimatingItem({ value: step.profitGained });
      setTimeout(() => setAnimatingItem(null), 1500);
      setIsPlaying(false);
    }
  };

  const handleLoadRandomData = () => {
    const randomItems = generateRandomItems(6);
    setItems(randomItems);
    setCapacity(50);
    setSimulationStarted(false);
    setCurrentStepIdx(-1);
    setSolution(null);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Calculate current metrics
  const currentMetrics = (() => {
    if (!solution || currentStepIdx < 0) {
      return {
        selectedItems: [],
        usedCapacity: 0,
        currentProfit: 0,
      };
    }

    let selectedItems = [];
    let usedCapacity = 0;
    let currentProfit = 0;

    for (let i = 0; i <= currentStepIdx && i < solution.steps.length; i++) {
      const step = solution.steps[i];
      selectedItems.push({
        ...step.item,
        quantity: step.quantity,
        profit: step.profitGained,
      });
      currentProfit += step.profitGained;
      if (step.action === 'full') {
        usedCapacity += step.item.weight;
      } else {
        usedCapacity += step.item.weight * step.quantity;
      }
    }

    return { selectedItems, usedCapacity, currentProfit };
  })();

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900' 
    : 'bg-gradient-to-br from-white via-purple-50 to-white';

  const textClass = darkMode ? 'text-white' : 'text-purple-950';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 ${textClass}`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden py-8 px-4"
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #a78bfa, #d8b4fe, #e9d5ff, #c084fc, #b794f6)',
            backgroundSize: '400% 400%',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, type: 'spring' }}
            className="inline-block mb-4"
          >
            <span className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-100 via-fuchsia-100 to-white bg-clip-text text-transparent drop-shadow-2xl filter brightness-110">
              🎮 Fractional Knapsack Optimizer ✨
            </span>
          </motion.div>
          <p className="text-lg mt-2 font-semibold bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent">Master the Greedy Algorithm through Interactive Learning</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mb-8 flex-wrap justify-center"
        >
          <button
            onClick={handleLoadRandomData}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-lg font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/50"
          >
            🎲 Load Random Data
          </button>
          <button
            onClick={() => {
              setItems([]);
              setSimulationStarted(false);
              setCurrentStepIdx(-1);
              setSolution(null);
            }}
            className="px-6 py-2 bg-gradient-to-r from-purple-400/80 to-purple-600/80 hover:from-purple-500 hover:to-purple-700 rounded-lg font-bold text-white transition-all shadow-lg shadow-purple-500/40"
          >
            🗑️ Clear All
          </button>
        </motion.div>

        {/* Controls (show when simulation started) */}
        {simulationStarted && solution && (
          <Controls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onReset={handleReset}
            onNextStep={handleNextStep}
            speed={speed}
            onSpeedChange={setSpeed}
            hasSteps={solution.steps.length > 0}
            currentStep={currentStepIdx}
            totalSteps={solution.steps.length}
            darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        )}

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {!simulationStarted ? (
            // Input Mode
            <motion.div
              key="input-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <InputSection
                items={items}
                setItems={setItems}
                capacity={capacity}
                setCapacity={setCapacity}
                onStartOptimization={handleStartOptimization}
              />
            </motion.div>
          ) : (
            // Simulation Mode
            <motion.div
              key="simulation-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Knapsack Visualization */}
              <KnapsackVisualization
                selectedItems={currentMetrics.selectedItems}
                capacity={capacity}
                currentProfit={currentMetrics.currentProfit}
                usedCapacity={currentMetrics.usedCapacity}
              />

              {/* Simulation Panel */}
              <SimulationPanel
                sorted={solution.sorted}
                currentStepIdx={currentStepIdx}
                steps={solution.steps}
                animatingItem={animatingItem}
              />

              {/* Score Board */}
              <ScoreBoard
                totalProfit={currentMetrics.currentProfit}
                efficiency={capacity > 0 ? (currentMetrics.currentProfit / capacity) * 100 : 0}
                itemsCount={currentMetrics.selectedItems.length}
                isCompleted={currentStepIdx === solution.steps.length - 1}
              />

              {/* Explanation Panel */}
              <ExplanationPanel
                currentStep={currentStepIdx >= 0 ? solution.steps[currentStepIdx] : null}
                steps={solution.steps}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center py-8 text-gray-500 border-t border-white/10 mt-12"
      >
        <p>Built with 💜 for DSA by Keerthi S • 2026</p>
        <p className="text-sm mt-2">Learn the Greedy Algorithm through Interactive Visualization</p>
      </motion.footer>

      {/* Floating Badges Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {'🎁🎮📦⭐🏆'[i]}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
