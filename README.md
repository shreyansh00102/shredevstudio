# 🚀 Shre Dev Studio — Digital Solutions Agency Website

Shre Dev Studio is a modern, responsive, and high-performance single-page landing website designed for a professional digital solutions agency. It features stunning animations, clean glassmorphism styling, automated dark/light themes, dynamic testimonials, portfolio filtering, and smooth scroll behaviors.

Built completely with **Vanilla HTML5, CSS3, and JavaScript**, this website demonstrates visual excellence, performance optimization, and SEO best practices.

---

## 🎨 Key Features

- **🌓 Dynamic Theme Support**: Seamless dark and light mode toggle with state persistence using local storage.
- **✨ Fluid Scroll Animations**: Intersection Observer API powers beautiful slide-in, fade-in, and counter acceleration animations.
- **📱 100% Mobile Responsive**: Fluid grid design layouts tailored for mobile, tablet, laptop, and desktop screens.
- **⚡ Performance Optimized**: Optimized image sizing (`width`/`height` attributes), custom SVGs, and asynchronous font loading to prevent layout shifts.
- **🔍 SEO Best Practices**: Configured meta descriptions, schema structured data (`ld+json`), semantic HTML, and proper header hierarchy.
- **📂 Interactive Portfolio**: Fully interactive portfolio layout with Category Filtering.
- **💬 Testimonials Carousel**: A custom, responsive, loopable client feedback carousel with indicator dots.
- **❓ FAQ Accordion**: Expandable and collapsible FAQ accordion built with accessible ARIA tags.
- **📩 Interactive Contact Form**: Complete client-side validation, error reporting, and dynamic submission status feedback.
- **🟢 Instant WhatsApp Chat**: Floating quick-link button for fast messaging on mobile and web.

---

## 📁 Project Directory Structure

```text
shredevstudio/
├── .vscode/                 # Editor/workspace configuration
├── assets/
│   └── images/              # Media and illustration assets
│       ├── hero-illustration.png
│       ├── portfolio-app.png
│       ├── portfolio-seo.png
│       └── portfolio-web.png
├── css/                     # Modulized Styling Sheets
│   ├── style.css            # Base stylesheet (reset, tokens, variables, typography, theme styles)
│   ├── sections.css         # Individual page section layouts
│   └── animations.css       # Keyframes, fade-ins, scale utilities, and transition effects
├── js/                      # Interactive JavaScript Files
│   ├── main.js              # Theme switcher, scroll indicator, mobile hamburger menu, FAQ, and portfolio filters
│   ├── animations.js        # Count-up animation timers, scroll observers, and parallax floating particles
│   └── forms.js             # Client-side form verification, styling error validation, and feedback
├── index.html               # Main landing page (Semantic layout, SEO tags, Schema, SVGs)
└── README.md                # Project documentation
```

---

## ⚙️ Setup and Installation

As a static frontend application, this project does not require complex compilers or external package managers. You can view and edit the application instantly.

### Option 1: Live Server (Recommended)
If you are editing using **VS Code**, the easiest way to view the site is with the **Live Server** extension:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **Go Live** button in the bottom status bar, or right-click `index.html` and select **Open with Live Server**.
4. The website will launch automatically at `http://127.0.0.1:5500/`.

### Option 2: Local HTTP Server
If you have Python installed, you can launch a local server from the terminal:
```bash
# Navigate to the project root directory
cd shredevstudio

# Run python server (Python 3.x)
python -m http.server 8000
```
Then, navigate to `http://localhost:8000/` in your web browser.

### Option 3: Direct Open
Simply double-click the `index.html` file in your system file explorer to open it directly in any web browser. *Note: Local storage and some assets might behave slightly differently when served over the file:// protocol instead of http://.*

---

## 🚀 Deployment Instructions

This website is ready to be hosted on any static hosting provider.

### GitHub Pages (Free & Fastest)
1. Initialize git and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Add your remote URL and push
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```
2. Go to your repository settings on GitHub.
3. Select **Pages** from the left sidebar.
4. Under **Build and deployment**, select **Deploy from a branch** and choose the `main` branch.
5. Save your settings. Your site will be live at `https://<username>.github.io/<repository-name>/` in a few minutes.

### Netlify / Vercel
1. Sign up on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Select **Import from Git** or drag-and-drop the project folder directly onto their web upload dashboards.
3. Configure the build command as **Empty** (no build command is needed) and publish directory as `./`.
4. Click **Deploy**.

---

## 🛠️ Built With

- **HTML5** — Semantic markup, meta headers, schema validation
- **CSS3** — Custom variable tokens, glassmorphism, responsive grid layout
- **JavaScript (ES6)** — Navigation control, Intersection Observer API, dynamic filters

---

## 📞 Support & Contacts

For customization, maintenance, or other queries:
- **Email**: [shredevstudio@gmail.com](mailto:shredevstudio@gmail.com)
- **Phone**: [+91 7068286755](tel:+917068286755)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/917068286755)
