# Shre Dev Studio – Professional Website

Build a modern, premium, responsive, and fast-loading website for Shre Dev Studio — a digital agency providing complete digital solutions.

## Proposed Changes

### Architecture

A single-page application (SPA) built with **vanilla HTML, CSS, and JavaScript** — no frameworks needed for a marketing/agency site. This ensures maximum performance, zero build step, and instant loading.

**File Structure:**
```
shredevstudio/
├── index.html          # Main HTML structure (all sections)
├── css/
│   ├── style.css       # Core design system, variables, layout
│   ├── sections.css    # Section-specific styles
│   └── animations.css  # Keyframe animations & transitions
├── js/
│   ├── main.js         # Core logic, navigation, smooth scroll
│   ├── animations.js   # Scroll-triggered animations, counters
│   └── forms.js        # Contact form validation & WhatsApp integration
├── assets/
│   └── images/         # Generated images for portfolio, icons, etc.
└── favicon.ico
```

---

### Design System (`css/style.css`)

#### [NEW] [style.css](file:///c:/Users/it/shredevstudio/css/style.css)

- **Color Palette:**
  - Dark background: `#0a0a1a` (deep navy-black)
  - Card/surface: `#12122a` with glassmorphism
  - Primary gradient: `#6366f1` → `#8b5cf6` (indigo → violet)
  - Accent: `#06b6d4` (cyan)
  - Text: `#f1f5f9` (light) / `#94a3b8` (muted)
  - White sections: `#fafbff` with subtle blue tint
- **Typography:** Google Fonts — `Inter` for body, `Outfit` for headings
- **Spacing scale:** 4px base unit, 8-step scale
- **Border radius:** Rounded cards (12–16px), pill buttons
- **Glassmorphism:** `backdrop-filter: blur()` on cards and nav
- **CSS custom properties** for full theming (dark/light toggle)

---

### Sections & Components (`index.html` + `css/sections.css`)

#### [NEW] [index.html](file:///c:/Users/it/shredevstudio/index.html)
#### [NEW] [sections.css](file:///c:/Users/it/shredevstudio/css/sections.css)

All sections below are built as semantic HTML sections with scroll-triggered animations:

| # | Section | Key Features |
|---|---------|-------------|
| 1 | **Sticky Navigation** | Glassmorphism navbar, logo, smooth-scroll links, hamburger menu on mobile, dark mode toggle |
| 2 | **Hero** | Full-viewport, animated gradient background with floating particles, heading with typewriter/gradient text effect, 3 CTA buttons, subtle scroll indicator |
| 3 | **About Us** | Split layout — text left, illustration/stats right, animated counters (projects completed, clients served, etc.) |
| 4 | **Services** | 6 service cards in responsive grid, each with icon, title, expandable bullet list, hover glow effect |
| 5 | **Why Choose Us** | 10 feature cards with icons in a masonry/grid layout, gradient borders on hover |
| 6 | **Our Process** | Horizontal timeline (desktop) / vertical timeline (mobile), 7 numbered steps with connecting lines and animated dots |
| 7 | **Technologies** | Logo grid/cloud with hover tooltips, subtle float animation |
| 8 | **Portfolio** | Filterable gallery with category tabs, card overlay with project details, lightbox on click |
| 9 | **Testimonials** | Auto-sliding carousel with client quotes, star ratings, and profile avatars |
| 10 | **FAQ** | Accordion-style with smooth expand/collapse, search filter |
| 11 | **Contact** | Contact form (name, email, phone, service, message) + info cards (email, phone, WhatsApp, location) + embedded Google Maps placeholder |
| 12 | **Footer** | Quick links columns, social media icons, copyright, back-to-top button |
| 13 | **Floating WhatsApp Button** | Fixed position, pulse animation, links to WhatsApp |

---

### Animations (`css/animations.css` + `js/animations.js`)

#### [NEW] [animations.css](file:///c:/Users/it/shredevstudio/css/animations.css)
#### [NEW] [animations.js](file:///c:/Users/it/shredevstudio/js/animations.js)

- **Scroll-triggered reveals:** Intersection Observer API for fade-in, slide-up, scale-in
- **Animated counters:** Count-up effect for stats (projects, clients, etc.)
- **Particle/gradient hero background:** Canvas or CSS animated gradients
- **Micro-interactions:** Button hover effects, card lift, icon rotations
- **Smooth scrolling:** Native CSS `scroll-behavior: smooth` + JS fallback
- **Navbar transitions:** Background opacity on scroll

---

### Interactive Logic (`js/main.js` + `js/forms.js`)

#### [NEW] [main.js](file:///c:/Users/it/shredevstudio/js/main.js)

- Sticky nav with scroll detection
- Mobile hamburger menu toggle
- Dark/light mode toggle with `localStorage` persistence
- Smooth scroll to sections
- Portfolio filter tabs
- Testimonials carousel auto-play + manual controls
- FAQ accordion toggle
- Back-to-top button visibility

#### [NEW] [forms.js](file:///c:/Users/it/shredevstudio/js/forms.js)

- Client-side form validation (required fields, email format, phone format)
- Visual error/success states
- WhatsApp message generation from form data
- Form submission feedback animation

---

### Assets

#### Generated Images

I'll use the image generation tool to create:
1. Hero section abstract tech illustration
2. 3-4 portfolio project mockups
3. Client testimonial avatars

---

### SEO & Performance

- Semantic HTML5 (`header`, `main`, `section`, `article`, `footer`)
- Meta tags: title, description, Open Graph, Twitter Cards
- Single `<h1>` in hero, proper heading hierarchy
- `alt` text on all images
- Lazy loading for below-fold images
- Minified inline critical CSS approach
- `preconnect` for Google Fonts
- Structured data (JSON-LD) for local business
- Accessibility: ARIA labels, keyboard navigation, focus styles, color contrast

---

## Open Questions

> [!IMPORTANT]
> **Contact Information:** The plan includes placeholders for email, phone number, WhatsApp number, and Google Maps location. Please provide your actual contact details, or I'll use professional placeholder text that you can easily replace later.

> [!IMPORTANT]  
> **Logo:** Do you have an existing logo, or should I create a text-based logo treatment using the "Shre Dev Studio" / "Shri Dev Studio" name? Also, which spelling should be the primary one — **Shre** or **Shri**?

> [!NOTE]
> **Portfolio Projects:** I'll create sample/demo portfolio entries with generated mockup images. You can replace these with real project screenshots later.

---

## Verification Plan

### Manual Verification
- Open `index.html` in browser and verify all 13 sections render correctly
- Test responsive design at mobile (375px), tablet (768px), and desktop (1440px) widths
- Verify dark/light mode toggle
- Test all interactive elements: nav links, hamburger menu, accordion, carousel, form validation
- Check smooth scrolling behavior
- Verify WhatsApp button functionality
- Test form validation with valid/invalid inputs
