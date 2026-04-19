# 🏗️ Project Architecture & Data Flow

## Component Hierarchy

```
App (Main Component - State Management)
├── Header (Title & Hero)
├── Quick Actions (Load Random, Clear All)
├── Controls (Play/Pause/Reset/Speed)
│
├── InputSection (When not simulating)
│   ├── Item Input Fields
│   ├── Capacity Input
│   ├── Added Items List
│   └── Start Button
│
└── Simulation View (When simulating)
    ├── KnapsackVisualization
    │   ├── Capacity Bar
    │   ├── Stats Display
    │   └── Selected Items List
    │
    ├── SimulationPanel
    │   ├── Current Step Info
    │   ├── Sorted Items Grid
    │   └── Item Cards
    │       └── ItemCard
    │           ├── Item Info
    │           ├── Stats
    │           └── Fractional Bar
    │
    ├── ScoreBoard
    │   ├── Total Profit
    │   ├── Efficiency Score
    │   └── Badge Display
    │
    └── ExplanationPanel
        ├── Algorithm Overview
        ├── Step Instructions
        └── Complexity Analysis

Footer
```

## Data Flow Diagram

```
User Input
    ↓
[Items Array] + [Capacity]
    ↓
solveKnapsack() Algorithm
    ├→ calculateRatio()
    ├→ Sort items
    └→ Simulate greedy selection
    ↓
Solution Object
├── steps[]          ← Step-by-step breakdown
├── selectedItems[]  ← Final selection
├── sorted[]         ← Sorted items
├── totalProfit      ← Total value
└── efficiency       ← Efficiency score
    ↓
State Updates in App.jsx
├── currentStepIdx
├── isPlaying
├── speed
└── animatingItem
    ↓
Component Re-renders
    ↓
Visual Display + Animations
```

## Algorithm Flow

```
┌─────────────────────────────────────────┐
│  1. INPUT: Items + Capacity             │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  2. CALCULATE RATIO (Value/Weight)      │
│     for each item                       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  3. SORT by Ratio (Descending)          │
│     Highest ratio first                 │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  4. GREEDY SELECTION                    │
│     For each item (in sorted order):    │
│     ├─ If fits completely: TAKE IT      │
│     ├─ If partially fits: TAKE FRACTION │
│     └─ If full: STOP                    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  5. OUTPUT: Solution                    │
│     ├─ Selected items                   │
│     ├─ Total profit                     │
│     └─ Efficiency score                 │
└─────────────────────────────────────────┘
```

## State Management Flow

```
App.jsx (Main State)
│
├─ items[]              ← User-added items
├─ capacity             ← Knapsack capacity
├─ simulationStarted    ← UI mode flag
├─ isPlaying            ← Animation playing?
├─ currentStepIdx       ← Current step (0 to N-1)
├─ speed                ← Animation speed (0.5x to 3x)
├─ solution             ← Algorithm result
├─ darkMode             ← Theme toggle
└─ animatingItem        ← Floating profit animation
   │
   ├─ Props flow down to components
   ├─ Callbacks flow up from components
   └─ State updates trigger re-renders
```

## Component Communication

```
App (State Owner)
├── setItems()
├── setCapacity()
├── onStartOptimization()
├── setIsPlaying()
├── setCurrentStepIdx()
└── setSpeed()
    │
    ├─→ InputSection
    │   ├─ Receives: items, capacity, setItems, setCapacity
    │   └─ Calls: onStartOptimization()
    │
    ├─→ Controls
    │   ├─ Receives: isPlaying, speed, currentStepIdx
    │   └─ Calls: onPlayPause(), onReset(), onNextStep()
    │
    ├─→ KnapsackVisualization
    │   ├─ Receives: selectedItems, capacity, currentProfit
    │   └─ Display-only (no callbacks)
    │
    ├─→ SimulationPanel
    │   ├─ Receives: sorted, currentStepIdx, steps
    │   └─ Display-only (no callbacks)
    │
    ├─→ ScoreBoard
    │   ├─ Receives: totalProfit, efficiency, itemsCount
    │   └─ Display-only (no callbacks)
    │
    ├─→ ExplanationPanel
    │   ├─ Receives: currentStep, steps
    │   └─ Display-only (no callbacks)
    │
    └─→ ItemCard
        ├─ Receives: item, isSelected, isActive, quantity
        └─ Display-only (no callbacks)
```

## Animation Pipeline

```
User clicks "Play"
         ↓
    isPlaying = true
         ↓
    useEffect watches isPlaying
         ↓
    Set timeout for next step
         ↓
    currentStepIdx++
         ↓
    Trigger ItemCard animation
         ↓
    Trigger profit animation
         ↓
    Wait (2000ms / speed)
         ↓
    Repeat until last step
```

## File Dependencies

```
main.jsx
    ↓
App.jsx
├── components/
│   ├── InputSection.jsx
│   ├── Controls.jsx
│   ├── SimulationPanel.jsx
│   │   ├── ItemCard.jsx
│   │   └── utils/algorithms.js
│   ├── KnapsackVisualization.jsx
│   ├── ScoreBoard.jsx
│   │   └── utils/algorithms.js
│   ├── ExplanationPanel.jsx
│   └── index.js (exports all)
└── utils/
    └── algorithms.js
        ├── solveKnapsack()
        ├── calculateRatio()
        ├── generateRandomItems()
        └── calculateBadges()

CSS Files
├── index.css (main)
├── tailwind.config.js
└── postcss.config.js
```

## Algorithm Complexity

```
Operation          Complexity      Details
─────────────────────────────────────────────
Create ratio array    O(n)         One pass through items
Sort items           O(n log n)     Dominant operation
Greedy selection     O(n)          Linear scan
Total                O(n log n)     Sorting dominates
```

## Performance Optimization

```
Re-render Triggers        Optimization
────────────────────────────────────────
State changes       → Only update changed state
Component props     → Use React.memo for display components
Animation frames    → Framer Motion GPU acceleration
CSS transitions     → Hardware acceleration with transform
DOM updates         → Efficient React batching
```

## Browser Rendering Pipeline

```
1. React Renders Components
        ↓
2. VDOM Diff Algorithm
        ↓
3. Update DOM
        ↓
4. Browser Paint
        ↓
5. CSS Transitions/Animations
        ↓
6. Framer Motion on top
        ↓
7. Visual Display
```

## Data Transformation Example

```
INPUT:
[
  { name: "Gold", weight: 3, value: 30 },
  { name: "Silver", weight: 5, value: 25 },
]
capacity: 7

↓ calculateRatio()

[
  { name: "Gold", weight: 3, value: 30, ratio: 10 },
  { name: "Silver", weight: 5, value: 25, ratio: 5 },
]

↓ Sort by ratio DESC

[
  { name: "Gold", weight: 3, value: 30, ratio: 10 },
  { name: "Silver", weight: 5, value: 25, ratio: 5 },
]

↓ Greedy Selection

Steps:
1. Gold: fits (3 ≤ 7) → Take full, profit: 30, capacity: 4
2. Silver: fits (5 > 4) → Take 80%, profit: 20, capacity: 0

OUTPUT:
{
  steps: [step1, step2],
  selectedItems: [gold_full, silver_partial],
  totalProfit: 50,
  efficiency: 71.4%
}
```

## Responsive Breakpoints

```
Mobile (<768px)
├─ Single column layouts
├─ Stacked controls
├─ Touch-friendly sizes
└─ Simplified animations

Tablet (768-1024px)
├─ 2-column grids
├─ Side-by-side panels
└─ Full features

Desktop (>1024px)
├─ 3-column grids
├─ Multi-column layouts
└─ All features visible
```

## Event Flow Example

```
User clicks "Add Item"
        ↓
handleAddItem() called
        ↓
Validate inputs
        ↓
Create item object
        ↓
setItems([...items, newItem])
        ↓
React re-renders InputSection
        ↓
New item card appears
        ↓
Animation: scale + opacity
        ↓
Item added to list
```

## State Update Timeline

```
Time    Event                       State
───────────────────────────────────────────
T0      User adds item             items: [item1, item2]
T1      Click "Start"              simulationStarted: true
T2      Algorithm runs             solution: {...}
T3      Play pressed               isPlaying: true
T4      Step 1 timer fires         currentStepIdx: 0
T5      Step 1 animations          UI updates
T6      Step 2 timer fires         currentStepIdx: 1
T7      Step 2 animations          UI updates
...     ... (repeat for each step)
Tn      Last step complete         currentStepIdx: n-1
Tn+1    Auto-pause                 isPlaying: false
```

---

**This architecture enables:**
- ✅ Clean component separation
- ✅ Efficient state management
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Easy testing
- ✅ Simple extension

---
