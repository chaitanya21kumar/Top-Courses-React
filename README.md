# Top Courses React Application

**Top Courses** is a React app that displays a curated list of online courses. Users can filter by category (All, Development, Business, Design, Lifestyle), mark favorites, and receive toast notifications. Built with Create React App, Tailwind CSS, React Toastify, and deployed on Netlify.

## Live Demo

https://chaitanya21kumar-top-courses-react.netlify.app

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Folder Structure](#folder-structure)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
6. [Available Scripts](#available-scripts)  
7. [Deployment](#deployment)  
8. [Troubleshooting](#troubleshooting)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Author](#author)  

## Features

- **Category Filtering**: All, Development, Business, Design, Lifestyle  
- **Favorite Toggle**: Click heart icon to add/remove; displays toast  
- **Loading Spinner**: Shows while components load  
- **Responsive Layout**: Mobile-first grid with Tailwind CSS  
- **Toast Notifications**: React Toastify for action feedback  

## Tech Stack

- React (v18)  
- Tailwind CSS (v3)  
- React Toastify  
- React Icons  
- Create React App  
- Netlify (hosting)  

## Folder Structure

    Top-Courses-React-main/
    ├─ .gitignore
    ├─ package.json
    ├─ package-lock.json
    ├─ tailwind.config.js
    ├─ public/
    │  ├─ index.html
    │  ├─ favicon.ico
    │  └─ assets, manifest.json, robots.txt
    └─ src/
       ├─ index.js         # App entry point
       ├─ index.css        # Tailwind & global styles
       ├─ App.js           # Main layout and state management
       ├─ data.js          # Static courses data array
       └─ components/
          ├─ Navbar.js     # Header & category filter buttons
          ├─ Filter.js     # Category selector component
          ├─ Cards.js      # Grid container for cards
          ├─ Card.js       # Single course card component
          ├─ Spinner.js    # Loading indicator component
          └─ spinner.css   # Spinner styles  

## Prerequisites

- Node.js ≥ 14  
- npm ≥ 6 (or yarn)  

## Installation

    git clone https://github.com/chaitanya21kumar/Top-Courses-React.git
    cd Top-Courses-React
    npm install
    npm start

_App runs at http://localhost:3000_

## Available Scripts

    npm start       # Run in development mode with hot reload  
    npm run build   # Build for production into /build  
    npm test        # Launch test runner  
    npm run eject   # Eject CRA config (irreversible)  

## Deployment

**On Netlify**  
1. Push `main` branch to GitHub  
2. In Netlify dashboard, click **New site > Import from Git**  
3. Set Build command: `npm run build`  
4. Set Publish directory: `build`  
5. Deploy!

**Using Netlify CLI**  

    npm run build
    npx netlify-cli deploy --prod --dir=build  

## Troubleshooting

- **Tailwind classes not applied**  
  Ensure `tailwind.config.js` `content` includes `./src/**/*.{js,jsx}`  
- **Port 3000 in use**  
        
        PORT=3001 npm start  
- **Stale production build**  
  Clear browser cache or trigger fresh Netlify deploy  

## Contributing

1. Fork the repository  
2. `git checkout -b feature/YourFeature`  
3. Make changes & `git commit -m "Add YourFeature"`  
4. `git push origin feature/YourFeature`  
5. Open a Pull Request  

Please follow existing style and include inline comments.  

## License

MIT License  
© 2025 Chaitanya Kumar  

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the “Software”), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.  

## Author

**Chaitanya Kumar**  
- GitHub: https://github.com/chaitanya21kumar  
- Portfolio: https://chaitanya21kumar.github.io/Portfolio-Website/  
