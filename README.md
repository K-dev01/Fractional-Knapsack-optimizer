# 🎮 Fractional Knapsack Optimizer

A modern, gamified web application for learning and understanding the Greedy Algorithm applied to the Fractional Knapsack problem. Built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Interactive Learning**: Step-by-step visualization of the greedy algorithm
- **Gamification**: Earn badges and track efficiency scores
- **Dynamic Input**: Add items with custom names, weights, and values
- **Real-time Visualization**: Watch items sort and fill the knapsack
- **Speed Control**: Play at your own pace (Slow, Normal, Fast, Extreme)
- **Dark/Light Mode**: Toggle between themes
- **Random Data Generator**: Generate sample items instantly
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations throughout
- **Algorithm Explanation**: Detailed breakdown of each step

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "fractional knapsack"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

## 🎯 How to Use

### 1. **Add Items**
   - Enter item name (optional), weight, and value
   - Click "Add" or press Enter
   - Remove items using the trash icon

### 2. **Set Capacity**
   - Enter the maximum knapsack capacity

### 3. **Start Optimization**
   - Click "🚀 Start Optimization"
   - The algorithm will sort items by value/weight ratio

### 4. **Watch the Simulation**
   - Use Play/Pause to control animation
   - Click "Next Step" to go through step-by-step
   - Adjust speed with the speed controls

### 5. **Unlock Achievements**
   - Get badges based on efficiency and items packed
   - Aim for "Perfect Optimizer" badge (95%+ efficiency)

## 🧮 Algorithm Explanation

### Problem
Given items with weights and values, and a knapsack with limited capacity, maximize the total value while respecting the weight limit. **Fractional items can be split.**

### Greedy Solution
1. Calculate value-to-weight ratio for each item
2. Sort items by ratio in descending order
3. Greedily select items:
   - Take full items if they fit
   - Take fractional items when capacity runs out

### Complexity
- **Time**: O(n log n) - dominated by sorting
- **Space**: O(n) - for storing items

## 🎨 Component Structure

```
src/
├── App.jsx                 # Main component & state management
├── components/
│   ├── InputSection.jsx    # Item input & capacity setup
│   ├── ItemCard.jsx        # Individual item display
│   ├── SimulationPanel.jsx # Sorted items & simulation view
│   ├── KnapsackVisualization.jsx # Capacity & profit display
│   ├── ScoreBoard.jsx      # Score & achievements
│   ├── ExplanationPanel.jsx # Algorithm explanation
│   ├── Controls.jsx        # Play/Pause/Reset controls
│   └── index.js            # Component exports
├── utils/
│   └── algorithms.js       # Greedy algorithm implementation
├── main.jsx                # React entry point
└── index.css              # Tailwind styles
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Vite**: Build tool & dev server
- **Lucide React**: Icon library

## 🎮 Features Walkthrough

### Input Section
- Dynamically add/remove items
- Set knapsack capacity
- Load random data for quick testing

### Visualization
- Cards show weight, value, and ratio
- Color-coded animations
- Active item highlighting

### Step-by-Step Simulation
- Sorted items by ratio
- Visual indication of selected items
- Fractional progress bars

### Knapsack Status
- Real-time capacity tracking
- Profit accumulation
- Efficiency percentage
- Space remaining display

### Gamification
- Dynamic scoring system
- Badge achievements:
  - 🏆 Perfect Optimizer (95%+ efficiency)
  - 🏆 Greedy Master (80%+ efficiency)
  - 🏆 Pack Master (5+ items)
  - 🏆 Efficiency Expert (70%+ efficiency)

### Controls
- ▶️ Play/Pause simulation
- ⏭️ Next Step manual walkthrough
- 🔄 Reset to try again
- ⚡ Speed adjustment (0.5x to 3x)
- 🌙 Dark/Light mode toggle

## 💡 Example Use Case

```
Items:
- Gold Coin: Weight=3, Value=30, Ratio=10
- Diamond: Weight=2, Value=18, Ratio=9
- Ruby: Weight=4, Value=30, Ratio=7.5

Capacity: 8

Greedy Selection:
1. Take Gold Coin (full) → Capacity left: 5, Profit: 30
2. Take Diamond (full) → Capacity left: 3, Profit: 48
3. Take 75% of Ruby → Capacity left: 0, Profit: 70.5
```

## 🌟 Tips for Best Experience

- Start with small datasets (3-5 items)
- Use the "Load Random Data" button to explore different scenarios
- Pause at interesting steps to read explanations
- Try different speeds to find your learning pace
- Check out different efficiency levels to understand edge cases

## 📱 Responsive Design

- **Desktop**: Full feature set, multi-column layouts
- **Tablet**: Optimized grid layouts
- **Mobile**: Single column, touch-friendly controls

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.js` to change the gradient colors and theme.

### Add More Badges
Extend the `calculateBadges()` function in `src/utils/algorithms.js`.

### Adjust Animation Speed
Modify transition durations in component files.

## 🐛 Troubleshooting

**Issue**: Tailwind styles not applying
- Solution: Ensure Tailwind is building properly with `npm run dev`

**Issue**: Animations are choppy
- Solution: Check browser performance settings, close other tabs

**Issue**: Items not sorting correctly
- Solution: Verify weights and values are valid numbers

## 📄 License

This project is open source and available for educational purposes.

## 🙌 Contributing

Suggestions and improvements are welcome! Feel free to fork and submit pull requests.

## 📧 Feedback

Have ideas or found issues? Let us know!

---

**Happy Learning! Master the Greedy Algorithm! 🚀**
