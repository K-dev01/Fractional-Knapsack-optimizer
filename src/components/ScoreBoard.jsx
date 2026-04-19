import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateBadges } from '../utils/algorithms';

export const ScoreBoard = ({ totalProfit, efficiency, itemsCount, isCompleted }) => {
  const [badges, setBadges] = useState([]);
  const [displayProfit, setDisplayProfit] = useState(0);

  useEffect(() => {
    if (isCompleted) {
      setBadges(calculateBadges(efficiency, itemsCount));
    }
  }, [isCompleted, efficiency, itemsCount]);

  // Animate profit counter
  useEffect(() => {
    if (displayProfit < totalProfit) {
      const timer = setTimeout(() => {
        setDisplayProfit(prev => Math.min(prev + totalProfit / 20, totalProfit));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [displayProfit, totalProfit]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 mb-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">⭐ Score & Achievements</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Total Profit */}
        <motion.div
          className="bg-gradient-to-br from-purple-500/40 to-purple-600/40 border-2 border-purple-300/60 rounded-lg p-6 shadow-lg shadow-purple-600/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-100 font-bold">Total Profit</span>
            <span className="text-2xl">⚡</span>
          </div>
          <motion.p
            className="text-4xl font-bold text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            {displayProfit.toFixed(2)}
          </motion.p>
        </motion.div>

        {/* Efficiency Score */}
        <motion.div
          className="bg-gradient-to-br from-purple-400/40 to-purple-500/40 border-2 border-purple-300/60 rounded-lg p-6 shadow-lg shadow-purple-600/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-100 font-bold">Efficiency</span>
            <span className="text-2xl">⚡</span>
          </div>
          <div className="flex items-end gap-2">
            <motion.p
              className="text-4xl font-bold text-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
            >
              {efficiency.toFixed(0)}
            </motion.p>
            <span className="text-2xl text-gray-200 mb-1">%</span>
          </div>
        </motion.div>

        {/* Items Count */}
        <motion.div
          className="bg-gradient-to-br from-purple-600/40 to-purple-500/40 border-2 border-purple-300/60 rounded-lg p-6 shadow-lg shadow-purple-600/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-100 font-bold">Items Packed</span>
            <span className="text-2xl">🏆</span>
          </div>
          <motion.p
            className="text-4xl font-bold text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            {itemsCount}
          </motion.p>
        </motion.div>
      </div>

      {/* Badges */}
      {badges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-6 border-t border-white/10"
        >
          <p className="text-sm font-medium text-gray-400 mb-4">
            🏆 Unlocked Badges ({badges.length})
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, idx) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-purple-500/40 to-purple-400/40 border-2 border-purple-300/60 rounded-lg px-4 py-3 text-center shadow-lg shadow-purple-500/30">
                  <p className="text-2xl mb-1">🏆</p>
                  <p className="font-bold text-white text-sm">{badge}</p>
                </div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-amber-400/0 rounded-lg blur"
                  animate={{ boxShadow: ['0 0 0 0 rgba(234, 179, 8, 0.7)', '0 0 0 10px rgba(234, 179, 8, 0)'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Completion Message */}
      {isCompleted && badges.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-6 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">Complete more items to unlock badges!</p>
        </motion.div>
      )}
    </motion.div>
  );
};
