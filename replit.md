# Jason Portfolio

## Overview
A modern portfolio website built with React and TypeScript featuring a clean design with scroll animations, dark/light theme toggle, and subtle accent colors.

## Project Structure
```
src/
  components/       # Reusable UI components
    Navbar.tsx      # Navigation bar with theme toggle
    Card.tsx        # Project card component
    Footer.tsx      # Site footer
  context/          # React context providers
    ThemeContext.tsx # Dark/light theme state management
  hooks/            # Custom React hooks
    useScrollAnimation.ts # Intersection Observer hook for scroll animations
  pages/            # Page components
    Home.tsx        # Homepage with hero section and intro cards
    About.tsx       # Bio, skills, and education
    Projects.tsx    # Project showcase grid
    Contact.tsx     # Contact form and info
  App.tsx           # Main app with routing and theme provider
  App.css           # Component styles
  index.tsx         # Entry point
  index.css         # Global styles, themes, and animations
public/
  index.html        # HTML template with Inter font
```

## Tech Stack
- React 19 with TypeScript
- React Router DOM for navigation
- CSS3 with custom properties (CSS variables)
- Inter font family

## Features
- Dark/Light theme toggle with localStorage persistence
- Scroll-triggered animations (fade-in, scale, slide effects)
- Transparent grid background pattern
- Purple accent color for visual pop
- Floating avatar animation
- Responsive layout (desktop and mobile)
- Mobile navigation with hamburger menu
- Modular component structure

## Development
The application runs on port 5000 with the development server.

**Start command:** `npm start`

## Environment Variables
- `PORT=5000` - Development server port
- `HOST=0.0.0.0` - Bind to all interfaces
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Allow proxy access

## Deployment
Uses Create React App's production build (`npm run build`) which outputs static files to `build/` directory.
