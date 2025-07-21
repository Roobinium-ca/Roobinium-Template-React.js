# React Theme v1 - Build Guide

A modern React theme built with Vite, featuring a responsive design system and reusable UI components.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-theme-v1

# Install dependencies
npm install
```

## 🛠 Development

### Start Development Server

```bash
npm run dev
```

- Runs on `http://localhost:3000` by default
- Hot module replacement (HMR) enabled
- Server accessible on all network interfaces (`0.0.0.0`)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on JavaScript/JSX files |
| `npm run lint:scss` | Run Stylelint on SCSS files |
| `npm run lint:scss:fix` | Run Stylelint with auto-fix |
| `npm run lint:all` | Run all linters |

## 🏗 Build Process

### Production Build

```bash
npm run build
```

This will:
- ✅ Compile and bundle all JavaScript/JSX files
- ✅ Process and optimize SCSS styles
- ✅ Optimize SVG icons using sprite system
- ✅ Generate optimized assets in `dist/` folder
- ✅ Apply tree-shaking for smaller bundle size

### Preview Build

```bash
npm run preview
```

Preview the production build locally before deployment.

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Header/          # Navigation header
│   └── Ui/              # UI component library
│       ├── Button.jsx   # Button component
│       ├── Caption.jsx  # Caption text
│       ├── Icon.jsx     # SVG icon wrapper
│       ├── Image.jsx    # Image component
│       ├── Text.jsx     # Text component
│       └── Title.jsx    # Title/heading component
├── pages/               # Page components
│   ├── Home/           # Homepage
│   └── Staking/        # Staking page
├── styles/             # SCSS styling system
│   ├── mixins/         # SCSS mixins
│   ├── functions/      # SCSS functions
│   └── _variables.scss # Design tokens
├── assets/
│   └── icons/          # SVG icons (auto-sprite)
└── helpers/            # Utility functions
```

## 🎨 Styling System

### SCSS Architecture

- **Variables**: Design tokens in `_variables.scss`
- **Mixins**: Reusable style patterns
- **Functions**: Utility functions for calculations
- **Components**: Component-specific styles

### Global SCSS Imports

The following are automatically imported in all SCSS files:
```scss
@import "@/styles/_variables.scss";
@import "@/styles/mixins/_breakpoint.scss";
@import "@/styles/_functions.scss";
@import "@/styles/mixins/_helpers.scss";
```

### Responsive Design

Breakpoint mixins available for responsive design:
```scss
@include breakpoint(mobile) { /* styles */ }
@include breakpoint(tablet) { /* styles */ }
@include breakpoint(desktop) { /* styles */ }
```

## 🔧 Configuration

### Path Aliases

- `@/` → `src/` directory
- Enables cleaner imports: `import Component from '@/components/Component'`

### SVG Icons

- Icons in `src/assets/icons/` are automatically processed
- Use with `<Icon name="icon-name" />` component
- Generates optimized sprite system

### Code Quality

#### ESLint Configuration
- React hooks rules
- React refresh compatibility
- Modern JavaScript standards

#### Stylelint Configuration
- SCSS standard rules
- Property ordering
- Declaration block validation

## 📦 Dependencies

### Core Dependencies
- **React 18.3.1** - UI library
- **React DOM 18.3.1** - DOM rendering
- **React Router DOM 6.26.0** - Client-side routing
- **Sass 1.77.8** - CSS preprocessor
- **Fast Glob 3.3.3** - File pattern matching

### Build Tools
- **Vite 5.4.0** - Build tool and dev server
- **@vitejs/plugin-react-swc** - React plugin with SWC
- **vite-plugin-svg-icons** - SVG sprite generation

### Code Quality Tools
- **ESLint** - JavaScript linting
- **Stylelint** - SCSS linting
- **Prettier** - Code formatting

## 🚢 Deployment

### Build for Production

1. **Run build command**:
   ```bash
   npm run build
   ```

2. **Verify build**:
   ```bash
   npm run preview
   ```

3. **Deploy `dist/` folder** to your hosting provider

### Deployment Platforms

**Static Hosting** (Recommended):
- Vercel
- Netlify
- GitHub Pages
- Surge.sh

**Server Hosting**:
- Any web server (Apache, Nginx)
- CDN distribution

### Environment Variables

Create `.env.local` for environment-specific variables:
```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=React Theme v1
```

Access in code: `import.meta.env.VITE_API_URL`

## 🔍 Troubleshooting

### Common Issues

**Build Fails**:
- Run `npm run lint:all` to check for linting errors
- Ensure all dependencies are installed

**Styles Not Loading**:
- Check SCSS import paths
- Verify `@/` alias usage

**Icons Not Displaying**:
- Ensure SVG files are in `src/assets/icons/`
- Check icon name format in `<Icon />` component

### Performance Tips

- **Code Splitting**: Use React.lazy() for route-level splits
- **Bundle Analysis**: Add `rollup-plugin-visualizer` for bundle analysis
- **Image Optimization**: Use WebP format for images

## 📝 Contributing

1. Run linters before committing:
   ```bash
   npm run lint:all
   ```

2. Follow the existing code style and component patterns

3. Test responsive design across breakpoints

---

**Tech Stack**: React 18 + Vite + SCSS + React Router  
**Node Version**: 16+  
**Package Manager**: npm
