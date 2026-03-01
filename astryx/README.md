# Astryx Film Production Website

A stunning, cinematic website for Astryx - a film production company dedicated to creating authentic, powerful narratives that resonate across cultures and generations.

![Astryx Banner](https://via.placeholder.com/1200x400/0a0a0a/d4af37?text=Astryx+Film+Production)

## 🎬 About

Astryx is a modern, responsive film production company website built with React and React Router. The site features a premium cinematic aesthetic with gold accents, film grain textures, and smooth animations that reflect the company's commitment to high-quality storytelling.

## ✨ Features

### 🎥 Multi-Page Navigation
- **Home Page** - Hero section with company mission and preview sections
- **Behind The Scenes** - Showcase of production process and filmmaking journey
- **Our Work** - Portfolio of completed films and projects
- **Contact Us** - Full contact form and company information

### 🎨 Cinematic Design
- **Film grain texture overlay** for authentic film aesthetic
- **Gold accent colors (#d4af37)** throughout the site
- **Vignette effects** for dramatic presentation
- **Smooth animations and transitions**
- **Professional typography** (Playfair Display + Inter)

### 📱 Responsive Design
- Fully responsive across all devices (desktop, tablet, mobile)
- Touch-friendly navigation on mobile
- Optimized layouts for different screen sizes
- Mobile-first approach

### 🎯 Key Components
- **Shared Navigation Component** - Fixed navbar with active page highlighting
- **Video Preview Cards** - Hover effects with play button overlays
- **Contact Form** - Functional form with validation
- **Preview Sections** - Teasers on home page linking to full content

## 🚀 Tech Stack

- **React** - Frontend library
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with modern features
- **Google Fonts** - Playfair Display & Inter
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
astryx-website/
├── public/
│   ├── Copilot_20260222_091225.png    # Astryx logo
│   ├── bts1.mp4                        # Behind the scenes video 1
│   ├── bts2.mp4                        # Behind the scenes video 2
│   └── newfilm1.mp4                    # Featured film video
├── src/
│   ├── components/
│   │   ├── Navigation.jsx              # Shared navigation component
│   │   └── Navigation.css              # Navigation styles
│   ├── pages/
│   │   ├── Home.jsx                    # Home page component
│   │   ├── Home.css                    # Home page styles
│   │   ├── BehindTheScenes.jsx         # BTS page component
│   │   ├── BehindTheScenes.css         # BTS styles
│   │   ├── OurWork.jsx                 # Portfolio page component
│   │   ├── OurWork.css                 # Portfolio styles
│   │   ├── ContactUs.jsx               # Contact page component
│   │   └── ContactUs.css               # Contact page styles
│   ├── App.jsx                         # Main app component with routes
│   └── main.jsx                        # Application entry point
├── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astryx-website.git
   cd astryx-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your media files**
   - Place your logo in `/public` as `Copilot_20260222_091225.png`
   - Add video files: `bts1.mp4`, `bts2.mp4`, `newfilm1.mp4` to `/public`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  }
}
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--background-dark: #0a0a0a
--background-gradient: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)

/* Accent Colors */
--gold-primary: #d4af37
--gold-light: #f4e4c1

/* Text Colors */
--text-primary: #ffffff
--text-secondary: #e8e8e8
--text-muted: #b8b8b8
--text-dark: #0a0a0a
```

### Typography
```css
/* Headings */
font-family: 'Playfair Display', serif

/* Body Text */
font-family: 'Inter', sans-serif
```

### Breakpoints
```css
/* Responsive Breakpoints */
--mobile: 480px
--tablet: 768px
--desktop: 1024px
```

## 🔧 Configuration

### Update Company Information

**In `ContactUs.jsx`:**
```jsx
// Update contact details
<p>123 Film Street<br />Nairobi, Kenya</p>  // Your address
<a href="mailto:hello@astryx.com">         // Your email
<a href="tel:+254123456789">                // Your phone
```

**In `Home.jsx`:**
```jsx
// Update company description
<p>Astryx is a film production company...</p>
```

### Customize Colors

Edit any `.css` file and change the color values:
```css
/* Change gold accent to your brand color */
#d4af37  →  #yourcolor
#f4e4c1  →  #yourlightcolor
```

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with company mission
- Behind the Scenes preview (2 videos)
- Our Work preview (1 featured film)
- Contact preview with quick links
- All sections link to full pages

### 🎬 Behind The Scenes (`/behind-the-scenes`)
- Grid layout of production videos
- Hover effects with play overlays
- Making-of content and process insights

### 🎥 Our Work (`/our-work`)
- Film portfolio showcase
- Large video presentations
- Project descriptions and details

### 📧 Contact Us (`/contact-us`)
- Full contact form with validation
- Project type selection
- Contact information cards
- Email, phone, address, hours

## 🎯 Key Features Explained

### Navigation Component
The navigation is a shared component that appears on all pages:
- **Fixed positioning** - Stays at top while scrolling
- **Active state highlighting** - Current page shows in gold
- **NavLink component** - Automatically adds active class

### Video Cards
Cinematic video presentation with:
- **Hover effects** - Cards lift and borders glow
- **Play button overlay** - Appears on hover
- **Video controls** - Native HTML5 video controls
- **Responsive sizing** - Adapts to screen size

### Form Validation
Contact form includes:
- **Required field validation**
- **Email format validation**
- **Dropdown selection** for project types
- **Submit handler** (ready for backend integration)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options

**Netlify:**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

**Vercel:**
```bash
npm install -g vercel
vercel
```

**GitHub Pages:**
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

## 🔄 Future Enhancements

### Planned Features
- [ ] Film filtering by genre/year
- [ ] Search functionality
- [ ] Blog section for production insights
- [ ] Team/crew page
- [ ] Client testimonials
- [ ] Video lightbox/modal player
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Dark/light mode toggle
- [ ] Analytics integration

### Technical Improvements
- [ ] Form backend integration (EmailJS, Formspree)
- [ ] SEO optimization (React Helmet)
- [ ] Performance optimization (lazy loading)
- [ ] Accessibility improvements (ARIA labels)
- [ ] Animation library (Framer Motion)
- [ ] CMS integration (Sanity, Contentful)

## 🐛 Known Issues

- None at this time

## 📝 License

This project is licensed under Octane254

## 👨‍💻 Author

**Your Name**
- Website: [astryx.com](https://astryx.com)
- Email: hello@astryx.com
- GitHub: [@yourusername](https://github.com/octane254)

## 🙏 Acknowledgments

- Design inspiration from premium film production websites
- Google Fonts for typography
- React community for excellent documentation
- All contributors and supporters

## 📞 Support

For support, email hello@astryx.com or open an issue in the repository.

---

**Made with ❤️ by Astryx Film Production**

*Crafting Stories That Matter*