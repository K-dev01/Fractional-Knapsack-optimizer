import React from 'react';
import { motion } from 'framer-motion';

export const Controls = ({
  isPlaying,
  onPlayPause,
  onReset,
  onNextStep,
  speed,
  onSpeedChange,
  hasSteps,
  currentStep,
  totalSteps,
  darkMode,
  onToggleDarkMode
}) => {
  const speedOptions = [
    { value: 0.5, label: '🐢 Slow' },
    { value: 1, label: '⚡ Normal' },
    { value: 2, label: '🚀 Fast' },
    { value: 3, label: '⚡⚡ Extreme' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 mb-8 sticky top-4 z-50"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Controls */}
        <div className="flex gap-3 items-center">
          <button
            onClick={onPlayPause}
            disabled={!hasSteps}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/50"
          >
            <span>{isPlaying ? '⏸️' : '▶️'}</span>
            <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={onNextStep}
            disabled={!hasSteps || currentStep >= totalSteps - 1}
            className="px-4 py-3 bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/50"
            title="Next Step"
          >
            ⏭️
          </button>

          <button
            onClick={onReset}
            className="px-4 py-3 bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-600 hover:to-purple-700 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/40"
            title="Reset"
          >
            🔄
          </button>
        </div>

        {/* Speed Control */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-400 whitespace-nowrap">Speed:</span>
          <div className="flex gap-2 flex-wrap">
            {speedOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => onSpeedChange(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded font-bold transition-all text-sm shadow-lg ${
                  speed === option.value
                    ? 'bg-gradient-to-r from-purple-300 to-purple-500 text-white shadow-purple-500/50'
                    : 'bg-white/15 text-purple-100 hover:bg-white/25 hover:shadow-md'
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Step Counter & Dark Mode */}
        <div className="flex items-center justify-end gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Progress</p>
            <p className="text-lg font-bold text-white">
              {Math.min(currentStep + 1, totalSteps)} / {totalSteps}
            </p>
          </div>

          <button
            onClick={onToggleDarkMode}
            className="px-4 py-3 bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all text-xl shadow-lg shadow-purple-500/40"
            title="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <motion.div className="w-full h-2 bg-white/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 shadow-lg shadow-purple-500/50"
            initial={{ width: 0 }}
            animate={{ width: `${totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
