# 🛍️ Store — Premium E-Commerce Frontend Project

A modern, fully responsive e-commerce storefront built with **React 18**, **TypeScript**, and **Tailwind CSS**. Features a custom mock API (no backend required), smooth Framer Motion animations, and a premium dark-mode-first UI design system.

> 🚀 **Live Demo:** [GitHub Pages](https://mjmajlesi.github.io/storeWebsite/)

---

## 📸 Screenshots

<!-- Replace these with your actual screenshots -->

![Home](/src/images/readme/image1.png)
![Store](/src/images/readme/NewStore.png)
![Product](/src/images/readme/image2.png) 

---

## ✨ Features

### Core Functionality
- 🛒 **Full Shopping Cart** — Add, remove, and adjust product quantities with persistent local storage
- 🔐 **Protected Routes** — Cart page is only accessible after login (PrivateRoute pattern)
- 🔍 **Product Browsing** — Dedicated pages for Store, Clothes, and Electronics categories
- 📦 **Product Details** — Responsive detail page with sticky image on desktop, quantity controls, and add-to-cart
- 🎨 **Premium UI/UX** — Dark-mode-first design with a cohesive brand color palette, glassmorphism effects, and professional typography

### Technical Highlights
- ⚡ **Mock API Service** — Fully local `src/services/api.ts` with simulated 500ms network latency. No `json-server` or external backend needed
- 📱 **Mobile-First Responsive** — Every page is optimized for mobile (375px), tablet (768px), and desktop (1024px+)
- 🎭 **Framer Motion Animations** — Staggered fade-in for product grids, smooth page transitions, and animated cart item removal
- 💅 **Tailwind CSS Design System** — Custom `brand` color palette, `font-display` headings (Lexend), and consistent spacing scale
- 🗂️ **Clean Code** — Fully typed with TypeScript, consistent naming conventions, and modular component architecture
- 🖼️ **Local Product Images** — All 20 product images are bundled locally (no broken external URLs)

---

## 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM v6 |
| **Animations** | Framer Motion |
| **Icons** | Material UI Icons + React Icons |
| **Slider** | React Slick + Slick Carousel |
| **Lottie** | react-lottie (Homepage hero animation) |
| **Counter** | react-countup (Trust metrics) |
| **API Mock** | Custom Promise-based service with `setTimeout` |

---

## 📁 Project Structure

```
storeWebsite/
├── public/
│   └── images/products/          # 20 locally bundled product images
├── src/
│   ├── components/
│   │   ├── AppContext.tsx         # Global state (cart, auth) via React Context
│   │   ├── buttons.tsx           # Reusable Button with variant system
│   │   ├── container.tsx         # Responsive container wrapper
│   │   ├── Carts.tsx             # Individual cart item card
│   │   ├── footer.tsx            # Footer with social links
│   │   ├── NavBar.tsx            # Responsive navbar with mobile hamburger menu
│   │   ├── Products.tsx          # Product card component (shared across pages)
│   │   ├── privateRoute.tsx      # Auth guard for protected routes
│   │   └── useLocalStorage.ts    # Custom hook for localStorage persistence
│   ├── data/
│   │   └── mockData.ts           # Strongly-typed mock product data (20 items)
│   ├── pages/
│   │   ├── main.tsx              # Homepage with hero, featured slider, categories
│   │   ├── store.tsx             # Full store catalog with category filters
│   │   ├── Cart.tsx              # Shopping cart with order summary sidebar
│   │   ├── Login.tsx             # Glassmorphism login page
│   │   ├── ProductPage.tsx       # Product detail with responsive layout
│   │   ├── Clothes.tsx           # Clothing category filter
│   │   └── Electrics.tsx         # Electronics category filter
│   ├── services/
│   │   └── api.ts                # Mock API with simulated latency
│   ├── App.tsx                   # Root component with routing
│   ├── App.css                   # Tailwind directives + minimal custom styles
│   └── index.tsx                 # Entry point
├── tailwind.config.js            # Extended brand colors, fonts, and utilities
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mjmajlesi/storeWebsite.git

# Navigate to the project directory
cd storeWebsite

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment to GitHub Pages

Since the project uses a fully local mock API and routing is handled via `HashRouter` (or proper path routing), deploying to GitHub Pages is incredibly simple:

1. **Configure homepage** in `package.json`:
   ```json
   "homepage": "https://mjmajlesi.github.io/storeWebsite"
   ```
2. **Deploy command**:
   ```bash
   npm run deploy
   ```
   *Note: This runs `gh-pages -d build` internally to build and push the production-ready static files directly to your `gh-pages` branch.*

---

## 🏗️ Architecture Decisions

### Mock API (`src/services/api.ts`)
Instead of relying on `json-server` or any external backend, the app uses a custom mock API layer that:
- Imports product data from `src/data/mockData.ts` (strongly typed)
- Returns `Promise<T>` with realistic 200–800ms delay via `setTimeout` to simulate real-world API latency (perfect for showcasing loaders, skeletons, and async state changes)
- Supports `getProducts()`, `getProduct(id)`, and `FLogin()` endpoints
- Enables **zero-config deployment** to GitHub Pages

### State Management
- **React Context + useLocalStorage** for global cart state and authentication.
- Cart items persist across page refreshes and browser sessions.
- Clean hooks structure with error handling and dynamic local storage keys (`useLocalStorage`).
- No Redux or Zustand — keeps the bundle lightweight (~243 kB gzipped).

### Design System
- **Brand Palette:** Custom `brand-400` (#1e98d5) primary with slate-based neutrals
- **Typography:** Lexend for display headings, Poppins for body text
- **Component Variants:** Button component supports `dark`, `normal`, `login`, `success`, and `danger` variants

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with Lottie animation, featured product slider, category cards, trust badges |
| `/store` | Store | Full product catalog with category filters |
| `/clothes` | Clothes | Filtered clothing products |
| `/electrics` | Electronics | Filtered electronics products |
| `/product/:id` | Product Details | Responsive detail page with sticky image, quantity controls |
| `/cart` | Shopping Cart | Protected cart with order summary sidebar |
| `/login` | Login | Glassmorphism login with animated inputs |

---

## 🤝 Contact

**Mohammad Javad Majlesi**

- 🐙 [GitHub](https://github.com/mjmajlesi)
- 💬 [Telegram](https://t.me/Mj_majlesi)
- 🔗 [LinkedIn](https://www.linkedin.com/in/mohammad-javad-majlesi-0ab27331a/)

---

## 📝 License

This project is open source and available for educational purposes.
