# 🆘 Troubleshooting Guide

## Installation Issues

### ❌ Problem: "npm ERR! code ERESOLVE"
**Cause**: Dependency version conflicts
**Solutions**:
```bash
# Method 1: Use legacy peer deps
npm install --legacy-peer-deps

# Method 2: Force resolution
npm install --force

# Method 3: Clean reinstall
rm -r node_modules package-lock.json
npm install
```

### ❌ Problem: "node-gyp rebuild failed"
**Cause**: Missing build tools
**Windows Solution**:
- Install Microsoft Visual C++ Build Tools
- Install Node.js again with native modules

### ❌ Problem: "EACCES: permission denied"
**Cause**: Permission issues
**Windows Solution**: Run Command Prompt as Administrator
**Mac/Linux Solution**: 
```bash
sudo chown -R $(whoami) ~/.npm
```

---

## Runtime Issues

### ❌ Problem: Blank White Screen
**Possible Causes**:
1. React not rendering
2. Tailwind not loaded
3. Babel/JSX issues

**Solutions**:
```bash
# Clear browser cache
# Method 1: Hard refresh (Ctrl+Shift+R)
# Method 2: Open DevTools → Application → Clear Storage

# Check console for errors
# Open DevTools (F12) → Console tab

# Restart dev server
npm run dev  # Stop with Ctrl+C, restart
```

### ❌ Problem: Styles Not Applying (CSS Missing)
**Cause**: Tailwind not processing

**Solutions**:
```bash
# Ensure Tailwind is watching files
# Check postcss.config.js exists
# Check tailwind.config.js paths are correct

# Restart dev server with cache clear
rm -r node_modules/.vite
npm run dev
```

### ❌ Problem: Components Not Loading
**Cause**: Import/export issues

**Check**:
1. All component files exist in `src/components/`
2. `index.js` exports all components
3. `App.jsx` imports correctly from components

**Example correct import**:
```javascript
import { InputSection, ItemCard } from './components';
```

---

## Performance Issues

### ❌ Problem: Animations are Choppy/Laggy
**Cause**: Browser performance issues
**Solutions**:
```javascript
// In browser DevTools
// 1. Performance tab → Record → Run simulation → Stop
// 2. Look for bottlenecks
// 3. Close other tabs

// Windows: Disable transparency effects
Settings → Ease of Access → Display → Turn off transparency
```

**System solutions**:
- Close other applications
- Disable browser extensions
- Update GPU drivers
- Check available RAM (need 4GB+)

### ❌ Problem: App Crashes with Large Datasets
**Cause**: Too many items to render

**Solution**: Limit items in code
```javascript
// In algorithms.js, add limit:
if (count > 100) count = 100;
```

### ❌ Problem: Memory Leak or Slow Over Time
**Cause**: Incomplete cleanup in useEffect

**Solution**: Ensure all cleanup functions return:
```javascript
useEffect(() => {
  const timer = setTimeout(() => {}, 1000);
  return () => clearTimeout(timer);  // Clean up!
}, []);
```

---

## Styling Issues

### ❌ Problem: Colors Look Wrong
**Possible Issues**:
1. Tailwind JIT compiler not running
2. PostCSS not configured
3. CSS file not imported

**Check**:
- `src/index.css` imports `@tailwind` directives
- `main.jsx` imports `index.css`
- `tailwind.config.js` paths are correct

```javascript
// Correct tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,jsx}"  // Must match actual files
],
```

### ❌ Problem: Glass-morphism Effects Not Working
**Cause**: Browser doesn't support backdrop-filter

**Solution**: Add fallback
```css
.glass-card {
  background: rgba(255, 255, 255, 0.9);  /* Fallback */
  backdrop-filter: blur(10px);             /* Main */
}
```

---

## Animation Issues

### ❌ Problem: Animations Don't Play
**Cause**: Framer Motion not loaded
**Check**:
```bash
npm list framer-motion
# Should show 10.16.4 or similar
```

### ❌ Problem: Elements Flash at Wrong Position
**Cause**: Initial animation values wrong
**Solution**: Set initial state matching actual position:
```javascript
<motion.div
  initial={{ opacity: 0, y: 0 }}  // Start at current position
  animate={{ opacity: 1, y: -20 }} // Then animate
/>
```

---

## Algorithm Issues

### ❌ Problem: Sorting Order Wrong
**Check** `solveKnapsack()` in `src/utils/algorithms.js`:
```javascript
const sorted = [...itemsWithRatio].sort((a, b) => 
  b.ratio - a.ratio  // Descending? Should be b - a
);
```

### ❌ Problem: Profit Calculation Wrong
**Check formula**:
```javascript
totalProfit += item.value * quantity;  // Must include quantity!
```

### ❌ Problem: Capacity Not Updating Correctly
**Check**:
```javascript
remainingCapacity -= item.weight * quantity;  // Include quantity!
```

---

## Browser Compatibility

### Issues by Browser

**Chrome/Edge**: Usually works perfectly
- ✅ Supports all ES6+
- ✅ Supports CSS Grid/Flexbox
- ✅ Supports backdrop-filter

**Firefox**: Minor compatibility
- ⚠️ May have slower animations
- ⚠️ CSS scroll behavior different
- ✅ Otherwise fully compatible

**Safari**: Some issues
- ⚠️ backdrop-filter needs -webkit prefix
- ⚠️ CSS variables may need vendor prefix
- ✅ Generally works

**IE 11**: Not supported
- ❌ No ES6 support
- ❌ No CSS Grid
- ❌ Would need compilation

**Solution**: Use modern browser (Chrome, Firefox, Safari, Edge)

---

## Port Issues

### ❌ Problem: "Port 3000 already in use"
**Find what's using it**:

Windows PowerShell:
```powershell
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess
tasklist /FI "PID eq <PID>"  # Replace <PID>
taskkill /PID <PID> /F       # Force kill
```

Windows Command Prompt:
```cmd
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or change port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Use different port
}
```

---

## Build Issues

### ❌ Problem: Build Fails with Error
**Solution**:
```bash
# Check for TypeScript errors
npm run build -- --debug

# Check if node_modules corrupted
rm -r node_modules
npm install

# Clear Vite cache
rm -r .vite
npm run build
```

### ❌ Problem: Build Output Too Large
**Cause**: Dependencies not tree-shaken
**Solution**: Check what's in bundle:
```bash
npm install -g vite-bundle-analyzer
# Analyze bundle size
```

---

## Development Environment

### ❌ Problem: Changes Not Reflecting
**Cause**: Hot reload not working
**Solutions**:
```bash
# 1. Force page refresh (Ctrl+Shift+R)
# 2. Restart dev server (Ctrl+C then npm run dev)
# 3. Check file is saved (watch for dot in filename)
# 4. Check correct file is being edited
```

### ❌ Problem: Syntax Errors Not Showing
**Solution**: Check VS Code settings
- Install ESLint extension
- Install Prettier extension
- Configure in `.eslintrc` (create if needed)

---

## Debugging Tips

### Enable Debug Mode
```javascript
// Add to App.jsx
console.log('Current state:', { items, capacity, solution });

// Use React DevTools browser extension
// Inspect components, track state changes
```

### Check Algorithm Logic
```javascript
// Add logging to algorithms.js
console.log('Items:', itemsWithRatio);
console.log('Sorted:', sorted);
console.log('Steps:', steps);
```

### Profile Performance
```javascript
console.time('algorithm');
const result = solveKnapsack(items, capacity);
console.timeEnd('algorithm');
```

---

## Getting Help

### Before Reporting Issues, Try:
1. ✅ Clear browser cache (Ctrl+Shift+Del)
2. ✅ Hard refresh (Ctrl+Shift+R)
3. ✅ Restart dev server
4. ✅ Reinstall node_modules
5. ✅ Check Node.js version
6. ✅ Check all files exist
7. ✅ Read error messages carefully

### When Reporting, Include:
- OS (Windows 10/11, Mac, Linux)
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Exact error message
- Steps to reproduce
- Browser used

### Useful Resources:
- React docs: https://react.dev
- Vite docs: https://vitejs.dev
- Tailwind docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion/
- Stack Overflow: Search error message

---

## Common Mistakes

### ❌ Mistake 1: Editing Wrong File
- Always save file (look for dot indicator)
- Check file path matches `src/components/` structure
- Use Ctrl+P in VS Code to find file

### ❌ Mistake 2: Forgetting npm run dev
- Always start dev server before testing
- Check it says "ready in X ms"

### ❌ Mistake 3: Using Old Node Version
- Need Node 16+
- Update from https://nodejs.org/

### ❌ Mistake 4: Not Clearing Dependencies
- When stuck, try clean install:
  ```bash
  rm -r node_modules package-lock.json
  npm install
  ```

### ❌ Mistake 5: Port Already in Use
- Kill process using port or use different port
- Don't ignore "EADDRINUSE" errors

---

**Still stuck? Refer to README.md or check browser console for specific errors! 🆘**
