import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ItemCard } from './ItemCard';

export const SimulationPanel = ({ sorted, currentStepIdx, steps, animatingItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 mb-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">⚙️ Sorted Items (by Value/Weight Ratio)</h2>

      <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
        <p className="text-sm text-gray-400 mb-2">Sorting Strategy:</p>
        <p className="text-white font-medium">
          Items are sorted by their value-to-weight ratio in descending order. We greedily select items with the highest ratio first.
        </p>
      </div>

      {/* Current Step Info */}
      {currentStepIdx >= 0 && currentStepIdx < steps.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gradient-to-r from-purple-500/20 to-purple-400/20 border-2 border-purple-300/50 rounded-lg"
        >
          <p className="text-sm text-gray-300 mb-2">
            Step {currentStepIdx + 1} of {steps.length}
          </p>
          <p className="text-lg font-semibold text-white mb-2">
            {steps[currentStepIdx].explanation}
          </p>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <span className="text-gray-300">Profit Gained:</span>
              <p className="font-bold text-purple-200">{steps[currentStepIdx].profitGained.toFixed(2)}</p>
            </div>
            <div>
              <span className="text-gray-300">Capacity Left:</span>
              <p className="font-bold text-purple-200">{steps[currentStepIdx].remainingCapacity.toFixed(2)}</p>
            </div>
            <div>
              <span className="text-gray-300">Action:</span>
              <p className="font-bold text-purple-300 capitalize">{steps[currentStepIdx].action}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {sorted.map((item, idx) => {
            const step = steps.find(s => s.item.id === item.id);
            const isActive = idx === currentStepIdx;
            const isSelected = step !== undefined;
            const quantity = step?.quantity || 0;

            return (
              <motion.div key={item.id} layout>
                <ItemCard
                  item={item}
                  isSelected={isSelected}
                  isActive={isActive}
                  quantity={quantity}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Animated Item Counter */}
      {animatingItem && (
        <motion.div
          className="fixed bottom-10 right-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-4 text-white font-bold text-lg shadow-lg shadow-purple-600/50"
          animate={{
            y: [0, -100, -200],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => {}}
        >
          +{animatingItem.value.toFixed(2)}
        </motion.div>
      )}
    </motion.div>
  );
};
