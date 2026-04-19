export const calculateRatio = (value, weight) => {
  return weight === 0 ? 0 : value / weight;
};

export const solveKnapsack = (items, capacity) => {
  // Create items with computed ratios
  const itemsWithRatio = items.map((item, idx) => ({
    ...item,
    ratio: calculateRatio(item.value, item.weight),
    id: item.id || idx,
    name: item.name || `Item ${idx + 1}`,
  }));

  // Sort by ratio in descending order
  const sorted = [...itemsWithRatio].sort((a, b) => b.ratio - a.ratio);

  // Simulate greedy selection
  const steps = [];
  let remainingCapacity = capacity;
  let totalProfit = 0;
  const selectedItems = [];

  for (const item of sorted) {
    if (remainingCapacity <= 0) break;

    if (item.weight <= remainingCapacity) {
      // Take full item
      selectedItems.push({
        ...item,
        quantity: 1,
        profit: item.value,
      });
      steps.push({
        item,
        action: 'full',
        quantity: 1,
        profitGained: item.value,
        remainingCapacity: remainingCapacity - item.weight,
        explanation: `Taking full ${item.name || 'item'} (${item.value}/${item.weight} = ${item.ratio.toFixed(2)})`,
      });
      totalProfit += item.value;
      remainingCapacity -= item.weight;
    } else {
      // Take fraction
      const fraction = remainingCapacity / item.weight;
      const profitFraction = item.value * fraction;
      selectedItems.push({
        ...item,
        quantity: fraction,
        profit: profitFraction,
      });
      steps.push({
        item,
        action: 'fraction',
        quantity: fraction,
        profitGained: profitFraction,
        remainingCapacity: 0,
        explanation: `Taking ${(fraction * 100).toFixed(1)}% of ${item.name || 'item'} (capacity limit reached)`,
      });
      totalProfit += profitFraction;
      remainingCapacity = 0;
      break;
    }
  }

  return {
    steps,
    selectedItems,
    totalProfit,
    sorted,
    efficiency: capacity > 0 ? (totalProfit / capacity) * 100 : 0,
  };
};

export const generateRandomItems = (count = 5) => {
  return Array.from({ length: count }, (_, idx) => ({
    id: idx,
    name: ['Gold Coin', 'Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'Opal', 'Jade', 'Amethyst', 'Topaz'][idx % 10],
    weight: Math.floor(Math.random() * 10) + 1,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

export const calculateBadges = (efficiency, itemsCount) => {
  const badges = [];
  
  if (efficiency > 95) badges.push('Perfect Optimizer');
  if (efficiency > 80) badges.push('Greedy Master');
  if (itemsCount >= 5) badges.push('Pack Master');
  if (efficiency > 70) badges.push('Efficiency Expert');
  
  return badges;
};
