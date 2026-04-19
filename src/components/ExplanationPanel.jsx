import React from 'react';
import { motion } from 'framer-motion';

export const ExplanationPanel = ({ currentStep, steps, algorithm = 'Greedy Fractional Knapsack' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 mb-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">
        📖 Algorithm Explanation
      </h2>

      {/* Algorithm Overview */}
      <div className="bg-white/10 border-2 border-purple-300/40 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-white mb-3">
          💡 What is the {algorithm}?
        </h3>
        <p className="text-gray-200 leading-relaxed mb-4">
          The Fractional Knapsack Problem is an optimization problem where we want to maximize the value of items we can fit into a knapsack with a limited capacity. Unlike the 0/1 knapsack, we can take fractional amounts of items.
        </p>
        <p className="text-gray-200 leading-relaxed">
          The Greedy approach works by sorting items by their value-to-weight ratio and selecting them in that order, taking as much as possible before moving to the next item.
        </p>
      </div>

      {/* Algorithm Steps */}
      <div className="mb-6">
        <h3 className="font-bold text-white mb-4">🎯 Algorithm Steps:</h3>
        <div className="space-y-2">
          {[
            'Calculate value/weight ratio for each item',
            'Sort items by ratio in descending order',
            'For each item (in sorted order):',
            '  • If it fits completely: take it',
            '  • If it partially fits: take the fraction',
            '  • Continue until knapsack is full'
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-gray-200 text-sm font-mono flex items-start gap-2"
            >
              <span className="text-purple-300 font-bold flex-shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Step Explanation */}
      {currentStep && steps.length > 0 && (
        <motion.div
          key={currentStep.explanation}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500/20 to-purple-400/20 border-2 border-purple-300/50 rounded-lg p-6"
        >
          <h3 className="font-bold text-white mb-3">📍 Current Step:</h3>
          <p className="text-lg text-purple-100 mb-4">{currentStep.explanation}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-300">Item Name:</span>
              <p className="font-bold text-white">{currentStep.item.name}</p>
            </div>
            <div>
              <span className="text-gray-300">Ratio:</span>
              <p className="font-bold text-purple-200">
                {(currentStep.item.value / currentStep.item.weight).toFixed(2)}
              </p>
            </div>
            <div>
              <span className="text-gray-300">Action Type:</span>
              <p className="font-bold capitalize text-purple-300">{currentStep.action}</p>
            </div>
            <div>
              <span className="text-gray-300">Profit Gained:</span>
              <p className="font-bold text-purple-200">+{currentStep.profitGained.toFixed(2)}</p>
            </div>
          </div>

          {/* Why explanation */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-gray-300 mb-2">Why?</p>
            <p className="text-gray-200">
              {currentStep.action === 'full'
                ? `This item has a good ratio and fits completely. Taking it maximizes our profit return on the space used.`
                : `There's not enough space for the full item, but we can take what fits. We calculate the fractional amount and take the proportional value.`}
            </p>
          </div>
        </motion.div>
      )}

      {/* Complexity Info */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h3 className="font-bold text-white mb-3">⏱️ Complexity Analysis:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
          <div className="bg-white/10 border-2 border-purple-300/40 rounded p-3">
            <span className="text-gray-300">Time Complexity:</span>
            <p className="font-mono font-bold text-purple-200">O(n log n)</p>
            <p className="text-xs text-gray-300 mt-1">Due to sorting phase</p>
          </div>
          <div className="bg-white/10 border-2 border-purple-300/40 rounded p-3">
            <span className="text-gray-300">Space Complexity:</span>
            <p className="font-mono font-bold text-purple-200">O(n)</p>
            <p className="text-xs text-gray-300 mt-1">For storing items and result</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
