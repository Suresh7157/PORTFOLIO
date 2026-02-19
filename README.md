# Personal Portfolio Website - Mallepalli Suresh

A modern, responsive, and feature-rich personal portfolio website showcasing skills, projects, and contact information.

## 🌟 Features

### Multi-Page Structure
- **Home** - Hero section with typewriter effect and animated background
- **About** - Detailed information with skill progress bars
- **Projects** - Filterable project gallery with hover effects
- **Contact** - Functional contact form with validation

### Design & UI
- ✨ Smooth scroll animations and reveal effects
- 🎨 Dark/Light theme toggle with localStorage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Sticky navigation with active link highlighting
- 🌊 Animated particle background
- 💫 Hover effects and micro-interactions
- 🎭 Custom scrollbar styling

### Interactive Elements
- 📝 Contact form with real-time validation
- 🔍 Project filtering by category
- 🍔 Hamburger menu for mobile devices
- ⌨️ Typewriter effect for name display
- 📊 Animated skill progress bars

### Performance
- 🚀 Lightweight and optimized
- 📦 Modular JavaScript functions
- 🎨 CSS variables for easy theming
- ♿ Semantic HTML structure

## 📁 Project Structure

```
Personal Portfolio Website/
│
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects showcase
├── contact.html        # Contact form
├── style.css           # All styles
├── script.js           # All JavaScript
├── SureshImg.jpeg      # Profile image
└── README.md           # Documentation
```

## 🎨 Color Scheme

### Dark Theme (Default)
- Primary Background: `#000`
- Secondary Background: `#0a0a0a`
- Accent Color: `gold`
- Text: `#fff` / `#ccc`

### Light Theme
- Primary Background: `#f5f5f5`
- Secondary Background: `#fff`
- Accent Color: `#d4af37`
- Text: `#1a1a1a` / `#555`

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📱 Responsive Breakpoints

- Desktop: `1200px+`
- Tablet: `768px - 1199px`
- Mobile: `< 768px`
- Small Mobile: `< 480px`

## ⚙️ Key Features Explained

### 1. Theme Toggle
- Click the sun/moon icon in navigation
- Theme preference saved in localStorage
- Smooth transition between themes

### 2. Contact Form Validation
- Real-time field validation
- Email format checking
- Required field validation
- Loading animation on submit
- Success/error messages

### 3. Project Filtering
- Filter by: All, Machine Learning, Web Development, Cloud
- Smooth fade animations
- Responsive grid layout

### 4. Scroll Animations
- Elements fade in on scroll
- Skill bars animate when visible
- Smooth reveal effects

### 5. Navigation
- Active link highlighting
- Smooth scroll to sections
- Hamburger menu on mobile
- Sticky header

## 🚀 Getting Started

1. Clone or download the repository
2. Update personal information:
   - Replace `YOUR_LINKEDIN_URL` with your LinkedIn profile
   - Replace `YOUR_GITHUB_URL` with your GitHub profile
   - Update `SureshImg.jpeg` with your photo
   - Modify project details in `projects.html`
   - Update skills in `about.html`

3. Open `index.html` in a browser

## 📝 Customization Guide

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --accent: gold;  /* Change accent color */
    --bg-primary: #000;  /* Change background */
}
```

### Add New Projects
In `projects.html`, add a new project card:
```html
<div class="project-card reveal" data-category="web">
    <!-- Project content -->
</div>
```

### Modify Skills
In `about.html`, update skill bars:
```html
<div class="skill-bar">
    <div class="skill-progress" data-progress="85">Skill Name</div>
</div>
```

## 🎯 JavaScript Functions

### Core Functions
- `initTypewriter()` - Animated name typing
- `initScrollReveal()` - Scroll-based animations
- `initThemeToggle()` - Dark/light mode switching
- `initHamburgerMenu()` - Mobile menu toggle
- `initProjectFilter()` - Project category filtering
- `initContactForm()` - Form validation and submission
- `initSkillBars()` - Animated progress bars
- `initParticles()` - Background particle animation

### Form Validation Functions
- `validateField(field)` - Validate single field
- `isValidEmail(email)` - Email format validation
- `showError()` - Display error message
- `clearError()` - Remove error message
- `handleSubmit()` - Form submission handler

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Free to use for personal and commercial projects.

## 👤 Author

**Mallepalli Suresh**
- Email: sureshmallepalli57@gmail.com
- Computer Science Undergraduate (2023-2027)
- Focus: Cloud Computing & Backend Development

## 🔄 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Blog section
- [ ] Project detail pages
- [ ] Testimonials section
- [ ] Download resume button
- [ ] Animated statistics counter
- [ ] More theme options

## 📞 Support

For issues or questions, please contact: sureshmallepalli57@gmail.com

---

**Note**: Remember to update all placeholder URLs and personal information before deploying!
