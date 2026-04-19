# 🎯 QUICK REFERENCE CARD

## ⚡ Setup (Copy & Paste)

```bash
# Navigate to project
cd "fractional knapsack"

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build
```

## 📍 File Locations

| What | Where |
|------|-------|
| Main App | `src/App.jsx` |
| Components | `src/components/` |
| Algorithm | `src/utils/algorithms.js` |
| Styles | `src/index.css` |
| Config | `tailwind.config.js` |
| HTML | `index.html` |

## 🎮 Using the App

**Add Item** → Name + Weight + Value → Click "Add"
**Set Capacity** → Enter number → "Start Optimization"
**Watch Algorithm** → Play, Pause, or Next Step
**Speed Control** → Choose: 🐢 Slow to ⚡⚡ Extreme
**Theme** → Click moon/sun icon
**Reset** → Click 🔄 button

## 📖 Documentation Map

| Start | Path |
|-------|------|
| I'm new | QUICK_START.md → README.md |
| I have issues | TROUBLESHOOTING.md |
| Windows user | WINDOWS_SETUP.md |
| Want full info | INDEX.md |
| Need features | FEATURES.md |
| Want architecture | ARCHITECTURE.md |

## 🧮 Algorithm Steps

1. Calculate ratio = Value / Weight
2. Sort by ratio (highest first)
3. Greedily select:
   - Full item if fits
   - Fraction if partially fits
   - Stop when full

## 🎯 Key Shortcuts

| Action | Command |
|--------|---------|
| Refresh | Ctrl+R |
| Hard Refresh | Ctrl+Shift+R |
| Dev Tools | F12 |
| Stop Server | Ctrl+C |
| Search File | Ctrl+P |

## 🐛 Common Fixes

| Problem | Solution |
|---------|----------|
| Blank page | Ctrl+Shift+R (hard refresh) |
| Styles missing | Restart dev server |
| Port in use | Kill process or change port |
| Dependencies broken | rm -r node_modules, npm install |
| Animations choppy | Close other tabs, restart |

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Theme Colors (Tailwind)

- Primary: Purple/Pink
- Success: Green
- Warning: Yellow/Orange
- Danger: Red
- Neutral: Gray/White

## 💾 Project Structure

```
📦 fractional knapsack
├── 📂 src/
│   ├── App.jsx
│   ├── components/ (7 files)
│   ├── utils/algorithms.js
│   └── index.css
├── 📄 Configuration files
├── 📄 Documentation files
└── 📄 package.json
```

## ⚙️ Available Scripts

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Create production build
npm run preview   # Preview production build
npm install       # Install dependencies
```

## 🔗 Important Links

- React Docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- Vite: https://vitejs.dev
- Node.js: https://nodejs.org/

## ✅ Component Checklist

- [x] InputSection - Item input
- [x] ItemCard - Item display
- [x] SimulationPanel - Sorted items
- [x] KnapsackVisualization - Capacity display
- [x] ScoreBoard - Achievements
- [x] ExplanationPanel - Algorithm explanation
- [x] Controls - Play/pause/reset

## 🎮 Control Panel Functions

| Control | Function |
|---------|----------|
| ▶️ Play | Auto-advance steps |
| ⏸️ Pause | Pause animation |
| ⏭️ Next | Go to next step |
| 🔄 Reset | Restart everything |
| 🐢⚡🚀 Speed | Adjust animation speed |
| 🌙 Mode | Toggle dark/light theme |

## 📊 Efficiency Badges

| Badge | Requirement |
|-------|------------|
| 🏆 Perfect Optimizer | 95%+ efficiency |
| 🏆 Greedy Master | 80%+ efficiency |
| 🏆 Pack Master | 5+ items |
| 🏆 Efficiency Expert | 70%+ efficiency |

## 🧪 Test Data

```
Item A: Weight=3, Value=30
Item B: Weight=5, Value=25
Item C: Weight=2, Value=20
Capacity: 8

Expected: 100% utilization, ~67% efficiency
```

## 🚀 Deployment Platforms

- Vercel (recommended)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📱 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ❌ IE 11 (not supported)

## 💡 Tips & Tricks

- Use random data to test quickly
- Pause at interesting steps
- Try different speeds
- Check console (F12) for errors
- Read explanations for learning
- Unlock all badges for fun!

## 🎓 What You'll Learn

- React Hooks (useState, useEffect)
- Greedy algorithms
- Time complexity analysis
- Framer Motion animations
- Tailwind CSS styling
- Responsive design
- Component composition

## 🆘 Help Command

When stuck:
1. Check error in console (F12)
2. Read TROUBLESHOOTING.md
3. Check documentation (INDEX.md)
4. Restart dev server
5. Clear cache & try again

## 📞 Before You Post Issues

- [ ] Read TROUBLESHOOTING.md
- [ ] Check browser console
- [ ] Try hard refresh (Ctrl+Shift+R)
- [ ] Restart dev server
- [ ] Reinstall node_modules
- [ ] Update Node.js

---

## 🎁 Pro Tips

1. **Keyboard Shortcut**: F12 opens DevTools
2. **Fast Iteration**: Use "Load Random Data"
3. **Learning**: Pause and read explanations
4. **Mobile**: Fully responsive, test it!
5. **Performance**: Try "Extreme" speed last!

---

**Save this card! Reference it often! 📌**
