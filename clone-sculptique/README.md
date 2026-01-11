# Sculptique™ - Lymphatic Drainage Landing Page

Clone of the Sculptique™ Lymphatic Drainage Capsules product landing page.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Production Build](#production-build)
- [Features](#features)
- [Customization Guide](#customization-guide)

## 🎯 Introduction

This is a pixel-perfect clone of the Sculptique™ Lymphatic Drainage Capsules product landing page. Built with Tailwind CSS and modern JavaScript libraries.

## 🛠 Tech Stack

- **HTML5** - Page structure
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla CSS** - Custom styling
- **JavaScript (ES6+)** - Interactions and logic
- **jQuery** - Slick Carousel support
- **Slick Carousel** - Video reviews carousel
- **http-server** - Development server
- **concurrently** - Run multiple npm scripts

## 📁 Project Structure

```
clone-sculptique/
├── index.html              # Main HTML file
├── style.css              # Custom CSS styles
├── gallery.css            # Product gallery CSS
├── script.js              # JavaScript logic
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── src/
│   └── input.css          # Tailwind input file
├── dist/
│   └── output.css         # Compiled Tailwind CSS
└── README.md              # This file
```

## 🚀 Installation

### System Requirements

- Node.js >= 14.0.0
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd clone-sculptique
```

2. **Install dependencies**
```bash
npm install
```

Packages that will be installed:
- `tailwindcss` - CSS framework
- `concurrently` - Run multiple commands
- `http-server` - Static file server
- `autoprefixer` - PostCSS plugin
- `postcss` - CSS processor

## 💻 Running the Project

### Development Mode

Run dev server with hot reload:

```bash
npm start
```

Server will run at: `http://localhost:8080`

This command will:
1. Run Tailwind CSS watch mode (auto-rebuild on changes)
2. Run HTTP server on port 8080
3. Automatically open browser

### Build Tailwind CSS Only

If you only want to build Tailwind CSS:

```bash
npm run build
```

### Watch Mode (Development)

Run only Tailwind watch mode:

```bash
npm run dev
```

### Run Web Server Only

```bash
npm run web
```

## 📦 Production Build

Build Tailwind CSS for production (minified):

```bash
npm run build
```

Output file: `dist/output.css`

## ✨ Features

### 1. **Header**
- Simple centered logo
- Responsive design

### 2. **Hero Section**
- Product gallery with multiple images
- Order form with pricing options
- Subscription toggle
- Trust badges and guarantees

### 3. **Ingredients Section**
- Accordion display for ingredients
- Smooth animations
- Detailed ingredient information

### 4. **Video Carousel**
- Slick carousel with 4 videos
- Custom navigation arrows
- Progress bar style dots
- Responsive (4 → 3 → 2 → 1 slides)

### 5. **Reviews Section**
- Trustpilot reviews display
- Customer testimonials

### 6. **FAQ Section**
- Accordion with 10 questions
- Gradient background
- Single frame with white dividers
- Smooth expand/collapse animation

### 7. **Stats/Mission Section**
- 2-column layout
- Stats images (desktop/mobile versions)
- Mission statement

### 8. **Stop Masking Symptoms Section**
- Text + image layout
- CTA button with guarantee badge
- Beige background

## 🎨 Customization Guide

### Changing Colors

Edit in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'sculptique-green': '#10b981',
      'sculptique-beige': '#f5f1e8',
    }
  }
}
```

### Changing Fonts

Current fonts:
- **Nunito** - Body text
- **Trirong** - Headings (serif)

To change, edit in `index.html` (Google Fonts link) and `tailwind.config.js`.

### Editing Content

1. **Text content**: Edit directly in `index.html`
2. **Images**: Change `src` attribute of `<img>` tags
3. **Links**: Update `href` of `<a>` tags

### Adding/Removing Sections

Sections are clearly organized in `index.html`. Each section has this structure:

```html
<section class="...">
  <div class="max-w-7xl mx-auto px-4">
    <!-- Content here -->
  </div>
</section>
```

### Editing FAQ

FAQ items in `index.html`, structure:

```html
<div class="faq-item border-b border-white">
  <button class="faq-question ...">
    <span>Question text</span>
    <svg>...</svg>
  </button>
  <div class="faq-answer max-h-0 ...">
    <div class="px-6 pb-6">
      <p>Answer text</p>
    </div>
  </div>
</div>
```

Accordion logic in `script.js`.

### Editing Video Carousel

Slick configuration in `script.js`:

```javascript
$('.video-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // ... more options
});
```

## 🐛 Troubleshooting

### Tailwind classes not working

1. Rebuild:
```bash
npm run build
```

2. Check `tailwind.config.js` has correct content paths

### Carousel not displaying

1. Check if jQuery is loaded
2. Check if Slick CSS is imported
3. Check console for errors

### FAQ not opening/closing

1. Check if `script.js` is loaded
2. Check console for JavaScript errors
3. Verify class names are correct

## 📝 Available Scripts

```bash
npm start       # Run dev server + Tailwind watch
npm run dev     # Run Tailwind watch mode only
npm run web     # Run HTTP server only
npm run build   # Build Tailwind CSS (minified)
```

## 🔧 Customization Tips

### Adding Custom CSS

Add to `style.css`:

```css
.custom-class {
  /* Your styles */
}
```

### Adding Custom JavaScript

Add to `script.js`:

```javascript
// Your custom code
```

### Using Tailwind Utilities

Reference: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
