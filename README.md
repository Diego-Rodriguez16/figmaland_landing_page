# Figmaland Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. This project showcases a clean design with smooth animations, custom components, and a mobile-first approach.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern Tech Stack**: Built with React 18, TypeScript, and Tailwind CSS
- **Custom Components**: Reusable, semantic components with clean architecture
- **Smooth Animations**: Scroll-based animations and smooth transitions
- **SEO Friendly**: Semantic HTML and optimized structure
- **Performance Optimized**: Lazy loading and optimized assets

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library
- **Shadcn/ui** - Component library

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/figmaland_landing_page.git
cd figmaland_landing_page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
figmaland_landing_page/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with background image
│   │   ├── Features.tsx      # Features showcase section
│   │   ├── Contact.tsx       # Contact form and info
│   │   ├── Footer.tsx        # Footer with links and contact
│   │   ├── Header.tsx        # Navigation header
│   │   └── SocialLinks.tsx   # Social media links component
│   ├── constants/
│   │   └── index.ts          # App constants and data
│   ├── index.css             # Global styles and component classes
│   ├── App.tsx               # Main app component
│   └── main.tsx              # App entry point
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🎨 Component Architecture

The project follows a clean, semantic CSS architecture:

- **Semantic Class Names**: All components use meaningful, BEM-inspired class names
- **Component Layer**: Custom components are defined in `@layer components`
- **Utility Classes**: Reusable utilities like `flex-center` and `flex-between`
- **Responsive First**: Mobile-first approach with responsive breakpoints

### Example Component Structure

```tsx
// Component with semantic classes
const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Title</h1>
      <p className="hero-subtitle">Subtitle</p>
    </div>
  </section>
);
```

## 🎯 Key Sections

### Hero Section

- Full-screen hero with fixed background image
- Responsive typography
- Call-to-action button
- Decorative SVG triangle

### Features Section

- Grid layout for desktop (3 columns)
- Vertical layout for mobile
- Video preview with play button
- Feature cards with icons

### Contact Section

- Contact form with validation-ready inputs
- Contact information display
- Google Maps integration
- Social media links

### Footer

- Multi-column layout for desktop
- Stacked layout for mobile
- Footer links organized by category
- Contact information

## 🎨 Customization

### Colors

Primary brand color can be changed in `index.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --color-primary: var(--primary);
}
```

### Component Styles

All component styles are located in `index.css` under `@layer components`. Modify them to match your design:

```css
@layer components {
  .hero-section {
    @apply /* your custom styles */;
  }
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Diego - Frontend Developer
