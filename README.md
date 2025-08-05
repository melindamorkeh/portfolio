# Melinda Morkeh - Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, experience, and projects as a Computer Science student at Oxford University.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent user preferences
- **Smooth Animations**: Typing animation for the name and smooth scrolling navigation
- **Interactive Elements**: Hover effects, animated skill icons, and interactive project cards
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Accessibility**: Semantic HTML structure with proper navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript**: Interactive functionality and dynamic content
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Font Awesome**: Icons for technologies and social links
- **Devicon**: Additional technology icons

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── tailwind.config.ts  # Tailwind CSS configuration
├── images/
│   └── favicon.png     # Site favicon
├── files/
│   └── Melinda Morkeh CV.pdf  # Resume/CV
└── CNAME               # Custom domain configuration
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No build tools required - this is a static website

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/melindamorkeh/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your web browser or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Visit `http://localhost:8000` in your browser

## 🎨 Key Features Explained

### Theme Toggle
- Automatic theme detection based on system preferences
- Manual toggle between light and dark modes
- Persistent theme selection using localStorage

### Typing Animation
- Animated typing effect for the name in the header
- Customizable typing speed and cursor animation

### Skills Section
- Continuously scrolling technology icons
- Pause on hover functionality
- Responsive grid layout

### Project Cards
- Dynamic project generation from JavaScript data
- Hover effects with technology stack display
- External links to project repositories

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 Live Demo

Visit the live portfolio at: [melinda-morkeh.me](https://melinda-morkeh.me)

## 📋 Sections

1. **About**: Personal introduction and background
2. **Experience**: Professional experience timeline
3. **Skills**: Programming languages and technologies
4. **Projects**: Showcase of personal projects

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        title: "Your Project",
        icon: "fa-solid fa-icon-name",
        technologies: ["Technology1", "Technology2"],
        url: "https://github.com/your-repo"
    }
];
```

### Modifying Skills
Update the skills section in `index.html` to add or remove programming languages.

### Theme Colors
Customize colors by modifying the Tailwind classes or CSS variables in `style.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **LinkedIn**: [Melinda Morkeh](https://www.linkedin.com/in/melinda-morkeh-351b74259/)
- **GitHub**: [melindamorkeh](https://github.com/melindamorkeh)
- **Email**: Available in CV

---

*Built with ❤️ by Melinda Morkeh* 