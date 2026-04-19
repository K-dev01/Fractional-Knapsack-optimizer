# 📖 Complete Feature Documentation

## 🎮 Input Section

### Adding Items
- **Name Field**: Optional item identifier (default: "Item 1", "Item 2", etc.)
- **Weight Field**: Numerical weight value (required)
- **Value Field**: Numerical monetary value (required)
- **Add Button**: Creates item card with validations

### Features
- ✅ Add multiple items dynamically
- ✅ Remove items with trash icon
- ✅ View added items in grid layout
- ✅ Responsive item display
- ✅ Items disappear in animation when removed

### Constraints
- Weight and Value must be numbers
- Cannot start optimization with 0 items
- Capacity must be positive number

---

## 🎪 Visualization Features

### Item Cards Display
Each item shows:
- **Name**: Item identifier
- **Weight**: Total weight
- **Value**: Total value  
- **Ratio**: Value-to-weight ratio (calculated as Value/Weight)

### Color Coding
- **Blue**: Weight indicator
- **Green**: Value indicator
- **Yellow**: Ratio indicator
- **Active item**: Purple glow effect

### Card States
1. **Normal**: Standard display
2. **Active**: Currently being processed (purple ring + glow)
3. **Selected**: Already taken (blue ring)
4. **Fractional**: Shows progress bar for partial items

---

## ⚙️ Simulation Panel

### What It Shows
- **Current Step**: Real-time step counter (1 of N)
- **Strategy Explanation**: Why items are sorted this way
- **Profit Gained**: How much value added in this step
- **Capacity Left**: Remaining space in knapsack
- **Action Type**: "Full" or "Fraction"

### Visual Indicators
- Currently processing item highlighted with purple glow
- Selected items marked with checkmark badge
- Fractional fills shown with animated progress bar
- Step counter at top

### Sorted Items Display
- All items sorted by value/weight ratio (descending)
- Items arranged in selection order
- Visual feedback as each is processed

---

## 🎒 Knapsack Visualization

### Capacity Status
- **Used/Total Display**: Shows current and max capacity
- **Percentage Bar**: Visual representation of fill level
- **Color Coding**:
  - Green (0-80%): Good capacity usage
  - Orange (80-99%): Nearly full
  - Red (100%+): Overfilled warning

### Statistics Display
- **Total Profit**: Sum of all item values taken
- **Items Selected**: Count of items in knapsack
- **Space Left**: Remaining capacity
- **Efficiency**: Percentage (Profit / Capacity * 100)

### Items in Knapsack List
- Shows which items were selected
- Indicates full vs fractional (percentage shown)
- Organized as tags/chips

### Warnings
- ⚠️ Capacity nearly full (> 80%)
- ⚠️ Overfilled warning if exceeding capacity
- ✓ Good capacity usage indicator

---

## ⭐ Score & Achievements

### Score Metrics
1. **Total Profit**: Real-time counter with animation
2. **Efficiency Score**: Percentage of optimal packing
3. **Items Packed**: Count of items in knapsack

### Badge System

**Automatic unlocking based on performance:**

| Badge | Requirement | Emoji |
|-------|-------------|-------|
| Perfect Optimizer | 95%+ efficiency | 🏆 |
| Greedy Master | 80%+ efficiency | 🏆 |
| Pack Master | 5+ items selected | 🏆 |
| Efficiency Expert | 70%+ efficiency | 🏆 |

### Badge Display
- Shows count of unlocked badges
- Badges scale and rotate on unlock
- Persistent glowing effect around badges
- Encourages re-running for improvements

---

## 🎮 Controls Panel

### Playback Controls
- **▶️ Play**: Auto-advance through steps
- **⏸️ Pause**: Pause auto-advancement
- **⏭️ Next Step**: Manual step advancement
- **🔄 Reset**: Start over with new optimization

### Speed Control
- **🐢 Slow (0.5x)**: Each step takes ~4 seconds
- **⚡ Normal (1x)**: Each step takes ~2 seconds
- **🚀 Fast (2x)**: Each step takes ~1 second
- **⚡⚡ Extreme (3x)**: Each step takes ~0.67 seconds

### Progress Display
- Shows current step number
- Shows total number of steps
- Visual progress bar animates with progression

### Theme Toggle
- **🌙 Moon Icon**: Switch to/from dark mode
- Maintains other settings
- Smooth color transition

---

## 📖 Algorithm Explanation Panel

### Overview Section
- Explains Fractional Knapsack problem
- Explains Greedy approach
- Why this algorithm works

### Step-by-Step Instructions
Shows all algorithm steps in order:
1. Calculate ratios
2. Sort by ratio (descending)
3. Iteratively select items
4. Handle fractional items
5. Stop when full

### Current Step Details
When simulation running:
- Item name being processed
- Its value/weight ratio
- Action type (full/fraction)
- Profit gained this step
- Reason for this action

### Complexity Analysis
- **Time Complexity**: O(n log n) - explained
- **Space Complexity**: O(n) - explained
- Why sorting dominates runtime

---

## 🎲 Quick Actions

### Load Random Data
- Generates 6 random items
- Items named: Gold Coin, Diamond, Ruby, Emerald, Sapphire, Pearl
- Weights: 1-10 units
- Values: 10-110 units
- Pre-sets capacity to 50

### Clear All
- Resets all items
- Stops any running simulation
- Returns to input mode
- Clears all scores and badges

---

## 🎨 UI/UX Features

### Responsive Design
- **Desktop (>1024px)**: Multi-column layouts, full features
- **Tablet (768-1024px)**: 2-column layouts
- **Mobile (<768px)**: Single column, optimized controls

### Animations
- **Framer Motion**: Smooth entry/exit animations
- **Item selection**: Scale + glow effects
- **Progress bars**: Width animations
- **Profit counter**: Bounce animations on update
- **Badge unlock**: Spring physics animations

### Dark/Light Mode
- **Dark Mode**: Slate gradient backgrounds, white text
- **Light Mode**: Light backgrounds, dark text
- Smooth transition between modes
- All components adapt colors

### Accessibility
- High contrast text
- Readable font sizes
- Clear button labels
- Semantic HTML structure
- Keyboard navigation support

---

## 📊 Algorithm Walkthrough Example

### Input
```
Item A: Weight=3, Value=30
Item B: Weight=5, Value=40
Item C: Weight=2, Value=20
Capacity: 8
```

### Calculation
```
A: Ratio = 30/3 = 10.0
B: Ratio = 40/5 = 8.0
C: Ratio = 20/2 = 10.0
```

### Sorting (descending by ratio)
```
1. Item C (10.0)
2. Item A (10.0)
3. Item B (8.0)
```

### Execution
```
Step 1: Take full Item C (2 units) → Profit: 20, Capacity: 6
Step 2: Take full Item A (3 units) → Profit: 50, Capacity: 3
Step 3: Take 60% of Item B (3 units) → Profit: 74, Capacity: 0
```

### Result
```
Total Profit: 74
Used Capacity: 8/8 (100%)
Efficiency: 92.5%
Items: C (full), A (full), B (60%)
```

---

## 🎯 Learning Outcomes

After using this app, users understand:
- ✅ Greedy algorithm approach
- ✅ Why sorting by ratio works
- ✅ Fractional vs 0/1 knapsack difference
- ✅ Time complexity analysis
- ✅ Real-world optimization scenarios
- ✅ Algorithm visualization importance

---

## 🔧 Advanced Features (Optional Extensions)

Could be added in future:
- 💾 Save/load previous optimizations
- 📤 Export results as CSV
- 🌐 Multi-language support
- 🔊 Sound effects for actions
- 📊 Performance comparison charts
- 🏅 Leaderboard for high scores
- 🤖 AI suggestion for optimal items
- 🎯 Challenge mode with puzzles

---

## 📱 Mobile-Specific Features

On mobile devices:
- Touch-friendly button sizes
- Swipe support for navigation
- Optimized card layouts
- Readable text on small screens
- Simplified control panel
- Native-like feel with animations

---

**Explore all features and master the Greedy Algorithm! 🚀**
