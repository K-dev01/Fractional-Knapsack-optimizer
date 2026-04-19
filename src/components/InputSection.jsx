import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const InputSection = ({ items, setItems, capacity, setCapacity, onStartOptimization }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    weight: '',
    value: '',
  });

  const handleAddItem = () => {
    if (newItem.weight && newItem.value) {
      setItems([
        ...items,
        {
          id: Date.now(),
          name: newItem.name || `Item ${items.length + 1}`,
          weight: parseFloat(newItem.weight),
          value: parseFloat(newItem.value),
        },
      ]);
      setNewItem({ name: '', weight: '', value: '' });
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 mb-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">📦 Setup Your Items</h2>
      
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Item Name (Optional)</label>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            onKeyPress={handleKeyPress}
            placeholder="e.g., Gold"
            className="w-full px-4 py-2 bg-white/20 border-2 border-purple-300/50 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-purple-400 focus:bg-white/25 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Weight</label>
          <input
            type="number"
            value={newItem.weight}
            onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
            onKeyPress={handleKeyPress}
            placeholder="0"
            className="w-full px-4 py-2 bg-white/20 border-2 border-purple-300/50 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-purple-400 focus:bg-white/25 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Value</label>
          <input
            type="number"
            value={newItem.value}
            onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
            onKeyPress={handleKeyPress}
            placeholder="0"
            className="w-full px-4 py-2 bg-white/20 border-2 border-purple-300/50 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-purple-400 focus:bg-white/25 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">&nbsp;</label>
          <button
            onClick={handleAddItem}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/40"
          >
            ➕ Add
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Knapsack Capacity</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(parseFloat(e.target.value))}
          placeholder="50"
          className="w-full px-4 py-2 bg-white/20 border-2 border-purple-300/50 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-purple-400 focus:bg-white/25 transition-colors"
        />
      </div>

      {items.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Added Items ({items.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass-card p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-gray-300">W: {item.weight}, V: {item.value}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-purple-300 hover:text-purple-100 transition-colors text-2xl"
                >
                  🗑️
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={onStartOptimization}
          disabled={items.length === 0 || capacity <= 0}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-lg font-bold text-white text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/50"
        >
          🚀 Start Optimization
        </button>
      </div>
    </motion.div>
  );
};
