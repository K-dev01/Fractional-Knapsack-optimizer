# ⚡ Quick Start Guide

## One-Minute Setup

### Step 1: Open Terminal
Navigate to the project directory:
```bash
cd "fractional knapsack"
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- Framer Motion (animations)
- Tailwind CSS (styling)
- Vite (build tool)

### Step 3: Start Development Server
```bash
npm run dev
```

Your browser should automatically open to `http://localhost:3000`

### Step 4: Start Learning!
- Click "🎲 Load Random Data" to get sample items
- Click "🚀 Start Optimization"
- Hit Play or step through manually
- Watch the algorithm in action!

## 📋 Project Structure

```
fractional knapsack/
├── src/
│   ├── components/          ← React components
│   ├── utils/              ← Algorithm logic
│   ├── App.jsx             ← Main app
│   ├── main.jsx            ← Entry point
│   └── index.css           ← Styles
├── index.html              ← HTML template
├── package.json            ← Dependencies
├── tailwind.config.js      ← Tailwind config
├── vite.config.js          ← Vite config
└── README.md               ← Full documentation
```

## 🎮 Quick Tutorial

### Adding Items
1. Enter item name (optional)
2. Enter weight (required)
3. Enter value (required)
4. Click "Add" button

### Starting Simulation
1. Set knapsack capacity
2. Click "🚀 Start Optimization"
3. Items will auto-sort by value/weight ratio

### Controls
- **▶️ Play** - Start automatic step-by-step
- **⏭️ Next Step** - Go to next step manually
- **🔄 Reset** - Start over
- **⚡ Speed** - Adjust animation speed
- **🌙 Dark/Light** - Toggle theme

### Understanding the Algorithm
Watch the "Algorithm Explanation" panel to understand each step:
- Why items are in this order
- Why the action is full/fractional
- How profit is calculated

## 🧪 Testing

### Try These Examples

**Example 1: Simple Case**
- Item A: Weight=2, Value=20
- Item B: Weight=3, Value=15
- Capacity: 5
- Expected: 100% efficiency

**Example 2: Fractional Example**
- Item A: Weight=3, Value=30
- Item B: Weight=5, Value=40
- Capacity: 6
- Expected: Full A + Fraction of B

**Example 3: Large Dataset**
- Click "🎲 Load Random Data"
- See how algorithm handles multiple items

## 🚀 Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder. Deploy to any static host:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## ✨ Features Showcase

### Gamification
- Real-time profit tracking
- Efficiency score calculation
- Badge system (unlock "Perfect Optimizer")
- Score animations

### Visualization
- Color-coded item cards
- Sorting animation
- Knapsack capacity bar
- Fractional fill progress

### Learning
- Step-by-step execution
- Detailed explanations
- Algorithm complexity info
- Example scenarios

### Customization
- Speed control (0.5x - 3x)
- Dark/Light mode
- Responsive design
- Touch-friendly mobile

## 🐛 Common Issues

**Q: Dependencies won't install?**
A: Try `npm install --legacy-peer-deps` or update Node.js

**Q: Port 3000 already in use?**
A: Edit `vite.config.js` to use different port

**Q: Animations are choppy?**
A: Close other tabs, ensure hardware acceleration is enabled

**Q: Styles not showing?**
A: Clear cache and restart dev server

## 📚 Learn More

### Algorithm References
- [Fractional Knapsack on GeeksforGeeks](https://www.geeksforgeeks.org/fractional-knapsack-problem/)
- [Greedy Algorithms Overview](https://en.wikipedia.org/wiki/Greedy_algorithm)

### Technologies
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

## 🎓 Educational Use

This project is perfect for:
- Computer Science students learning greedy algorithms
- Algorithm courses and bootcamps
- Interview preparation
- Interactive algorithm visualization
- Understanding optimization problems

## 💻 System Requirements

- Node.js v16 or higher
- npm v7 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 200MB disk space

## 🎯 Next Steps

1. ✅ Install and run the project
2. 🎮 Play with sample data
3. 📖 Read the algorithm explanation
4. 🧪 Try custom examples
5. 🚀 Build for production
6. 📚 Customize and extend

---

**Enjoy learning the Greedy Algorithm! 🚀**

Questions? Check the full README.md or explore the code!
