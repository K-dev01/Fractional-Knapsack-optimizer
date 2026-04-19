# 🪟 Windows Setup Instructions

## Prerequisites Check

Open PowerShell and verify you have:

### 1. Check Node.js Installation
```powershell
node --version
npm --version
```

Should show v16 or higher for Node.js and v7 or higher for npm.

### 2. If Not Installed

Download from https://nodejs.org/ (LTS version recommended)

## Step-by-Step Setup

### 1. Open Terminal in Project Directory

**Option A: Using PowerShell**
```powershell
# Navigate to folder
cd "D:\Fractional Knapsack optmizer\fractional knapsack"
```

**Option B: Using Command Prompt**
```cmd
cd D:\Fractional Knapsack optmizer\fractional knapsack
```

**Option C: Using VS Code**
- Open VS Code
- File → Open Folder
- Select the "fractional knapsack" folder
- Press Ctrl+` to open terminal

### 2. Install Dependencies

```powershell
npm install
```

This installs all packages from package.json. May take 2-5 minutes.

### 3. Start Development Server

```powershell
npm run dev
```

You should see:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### 4. Open in Browser

- Automatically opens at http://localhost:3000
- If not, manually navigate to that URL

### 5. Stop Server

Press `Ctrl+C` in terminal

## Common Windows Issues & Solutions

### Issue 1: "npm is not recognized"
**Solution**: 
- Restart PowerShell/Command Prompt after Node.js installation
- Or reinstall Node.js from https://nodejs.org/

### Issue 2: "Port 3000 already in use"
**Solution**:
```powershell
# Find process using port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Kill the process (replace PID with actual number)
Stop-Process -Id <PID> -Force
```

Or edit `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change to different port
  open: true
}
```

### Issue 3: "node_modules corrupted or missing"
**Solution**:
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Issue 4: "Tailwind styles not loading"
**Solution**:
```powershell
# Clear cache and restart
npm run dev  # Restart with Ctrl+C then npm run dev
```

### Issue 5: "Permission denied" errors
**Solution**: Run PowerShell as Administrator
- Right-click PowerShell
- Select "Run as administrator"

## Building for Production

```powershell
npm run build
```

Creates `dist` folder with optimized build.

To preview:
```powershell
npm run preview
```

## Deploying Built App

The `dist` folder contains static files ready to deploy to:
- Vercel (automatic from GitHub)
- Netlify (drag & drop)
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## VS Code Recommended Extensions

Install these for better experience:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Thunder Client (for API testing if extending)

## Troubleshooting Commands

```powershell
# Clear npm cache
npm cache clean --force

# Check npm version
npm --version

# List installed packages
npm list

# Update npm
npm install -g npm@latest

# Force reinstall dependencies
npm install --force

# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

## File Structure After Setup

```
fractional knapsack/
├── node_modules/           ← Installed packages (created by npm install)
├── dist/                   ← Build output (created by npm run build)
├── src/                    ← Source code
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── QUICK_START.md
└── .gitignore
```

## Next Steps

1. ✅ Complete setup above
2. 🎮 Run `npm run dev`
3. 📖 Read QUICK_START.md
4. 🎯 Try "Load Random Data"
5. 🚀 Click "Start Optimization"

## Windows-Specific Tips

- **Terminal**: PowerShell is recommended over Command Prompt
- **Path format**: Use backslashes `\` or forward slashes `/` (both work)
- **Long paths**: If getting path errors, enable long path support in Windows
- **Antivirus**: May slow down npm install - temporarily disable if needed

## Getting Help

1. Check error messages carefully
2. Search error on Stack Overflow
3. Check Node.js version compatibility
4. Try clearing cache and reinstalling
5. Restart computer if all else fails

## Performance Optimization

For faster performance on Windows:

1. **Use faster storage**: SSD > HDD
2. **Disable antivirus scanning** on project folder
3. **Close unnecessary apps** while developing
4. **Use PowerShell 7+**: Download from Microsoft Store

## Recommended Windows Development Setup

1. Windows 10/11
2. Node.js v18 LTS
3. VS Code
4. PowerShell 7
5. Git for version control

---

**Ready to learn? Start with `npm run dev` and enjoy!** 🚀
