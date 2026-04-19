import React from 'react';
import { motion } from 'framer-motion';

export const ItemCard = ({ item, isSelected, isActive, quantity, style = {} }) => {
  const ratio = item.weight === 0 ? 0 : (item.value / item.weight).toFixed(2);
  const isFractional = quantity > 0 && quantity < 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        boxShadow: isActive 
          ? '0 0 30px rgba(147, 51, 234, 0.8)' 
          : isSelected 
          ? '0 0 20px rgba(168, 85, 247, 0.6)'
          : '0 0 10px rgba(255, 255, 255, 0.1)'
      }}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 relative overflow-hidden transition-all cursor-pointer ${
        isActive ? 'ring-2 ring-purple-400' : isSelected ? 'ring-2 ring-purple-300' : ''
      }`}
      style={style}
    >
      {/* Background animation for active item */}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="font-bold text-white text-lg">{item.name}</p>
            <p className="text-sm text-gray-400">{item.id ? `ID: ${item.id}` : 'Item'}</p>
          </div>
          {isSelected && (
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="badge-success"
            >
              ✓ Selected
            </motion.span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white/10 rounded p-2">
            <p className="text-xs text-gray-300 mb-1">Weight</p>
            <p className="text-lg font-bold text-purple-200">{item.weight}</p>
          </div>
          <div className="bg-white/10 rounded p-2">
            <p className="text-xs text-gray-300 mb-1">Value</p>
            <p className="text-lg font-bold text-purple-200">{item.value}</p>
          </div>
          <div className="bg-white/10 rounded p-2">
            <p className="text-xs text-gray-300 mb-1">Ratio</p>
            <p className="text-lg font-bold text-purple-200">{ratio}</p>
          </div>
        </div>

        {isFractional && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-purple-300">Fractional Fill</span>
              <span className="text-sm font-bold text-purple-300">{(quantity * 100).toFixed(1)}%</span>
            </div>
            <motion.div
              className="w-full h-2 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-300 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: `${quantity * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        )}

        {isSelected && quantity === 1 && (
          <div className="mt-3 text-sm font-medium text-green-300">
            ✓ Fully selected - Profit: {item.value}
          </div>
        )}
      </div>
    </motion.div>
  );
};
