import React from 'react';
import { motion } from 'framer-motion';

export const KnapsackVisualization = ({ selectedItems, capacity, currentProfit, usedCapacity }) => {
  const capacityPercentage = (usedCapacity / capacity) * 100;
  const isOverfull = usedCapacity > capacity;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 mb-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">🎒 Knapsack Status</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Capacity Bar */}
        <div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-300">Capacity Used</span>
              <span className={`text-2xl font-bold ${isOverfull ? 'text-purple-300' : 'text-purple-200'}`}>
                {usedCapacity.toFixed(1)} / {capacity.toFixed(1)}
              </span>
            </div>
            <motion.div
              className="w-full h-6 bg-white/10 rounded-full overflow-hidden border border-white/20"
            >
              <motion.div
                className={`h-full transition-colors ${
                  capacityPercentage > 100
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                    : capacityPercentage > 80
                    ? 'bg-gradient-to-r from-purple-400 to-purple-500'
                    : 'bg-gradient-to-r from-purple-300 to-purple-400'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(capacityPercentage, 100)}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              {capacityPercentage > 100 && (
                <motion.div
                  className="absolute inset-0 bg-purple-600/50 border-l-4 border-purple-300"
                  animate={{ x: [-10, 10] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  style={{
                    width: `${Math.min(capacityPercentage - 100, 20)}%`,
                    marginLeft: '100%',
                  }}
                />
              )}
            </motion.div>
            <p className="text-sm text-gray-400 mt-2">{capacityPercentage.toFixed(1)}% full</p>
          </div>

          {/* Warnings */}
          {capacityPercentage > 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-warning"
            >
              ⚠️ Overfilled! (by {(usedCapacity - capacity).toFixed(1)})
            </motion.div>
          )}
          {capacityPercentage > 80 && capacityPercentage <= 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-warning"
            >
              ⚠️ Capacity nearly full
            </motion.div>
          )}
          {capacityPercentage <= 80 && capacityPercentage > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-success"
            >
              ✓ Good capacity usage
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-purple-500/30 to-purple-400/30 border-2 border-purple-300/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-1">Total Profit</p>
              <motion.p
                className="text-3xl font-bold text-purple-100"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                {currentProfit.toFixed(2)}
              </motion.p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/30 to-purple-400/30 border-2 border-purple-300/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-1">Items Selected</p>
              <motion.p
                className="text-3xl font-bold text-purple-100"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                {selectedItems.length}
              </motion.p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/30 to-purple-400/30 border-2 border-purple-300/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-1">Space Left</p>
              <p className="text-3xl font-bold text-purple-100">
                {Math.max(0, capacity - usedCapacity).toFixed(1)}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/30 to-purple-400/30 border-2 border-purple-300/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-1">Efficiency</p>
              <p className="text-3xl font-bold text-purple-100">
                {capacity > 0 ? ((currentProfit / capacity) * 100).toFixed(0) : 0}%
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Selected Items Display */}
      {selectedItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 pt-6 border-t border-white/10"
        >
          <p className="font-medium text-gray-300 mb-3">Items in Knapsack:</p>
          <div className="flex flex-wrap gap-2">
            {selectedItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/15 border-2 border-purple-300/40 rounded-lg px-3 py-2 text-sm shadow-md"
              >
                <span className="text-white font-medium">{item.name}</span>
                <span className="text-gray-400 ml-2">
                  {item.quantity === 1 ? '(Full)' : `(${(item.quantity * 100).toFixed(0)}%)`}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
