document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check for saved theme preference or default to system preference
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Default to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        localStorage.setItem('theme', theme);
    }
    
    // Set initial theme
    setTheme(getInitialTheme());
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // Listen for changes in system theme (only if no manual preference is set)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Typing animation
    const name = "Melinda Morkeh";
    const target = document.getElementById("typed-name");
    let index = 0;
  
    function typeLetter() {
      if (index < name.length) {
        target.textContent += name.charAt(index);
        index++;
        setTimeout(typeLetter, 150); // typing speed
      }
    }
  
    typeLetter();
  });

  // Technology to icon mapping
const techIcons = {
    "HTML": "fa-brands fa-html5",
    "CSS (Tailwind)": "fa-brands fa-css3-alt",
    "JavaScript": "fa-brands fa-js",
    "Next.js": "fa-brands fa-js",
    "React": "fa-brands fa-react",
    "TypeScript": "fa-solid fa-code",
    "Tailwind CSS": "fa-brands fa-css3-alt",
    "Monaco Editor": "fa-solid fa-code",
    "Python (Django)": "fa-brands fa-python",
    "Node.js": "fa-brands fa-node-js",
    "Django": "fa-solid fa-code"
};

// Project Data
const projects = [
    {
        title: "Portfolio",
        icon: "fa-solid fa-user",
        technologies: ["HTML", "Tailwind CSS", "JavaScript"],
        url: "https://melinda-morkeh.me"
    },
    {
        title: "Algtrax: Algorithm Visualiser",
        icon: "fa-solid fa-chart-line",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Monaco Editor"],
        url: "https://github.com/melindamorkeh/algtrax"
    },
    {
        title: "Scanly: CV Scanner",
        icon: "fa-solid fa-file-lines",
        technologies: ["Python (Django)", "Node.js", "React", "Tailwind CSS"],
        url: "https://github.com/melindamorkeh/cv-scanner"
    }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectGrid").querySelector(".grid");

    projects.forEach(project => {
        const techList = project.technologies.map(tech => {
            const iconClass = techIcons[tech] || "fa-solid fa-code";
            return `<span class="inline-flex items-center gap-1 mr-2 mb-1"><i class="${iconClass}"></i>${tech}</span>`;
        }).join("");
        
        const card = document.createElement("a");
        card.href = project.url;
        card.target = "_blank";
        card.className = "relative group overflow-hidden rounded-xl shadow-lg";

        card.innerHTML = `
            <div class="w-full h-80 w-60 bg-[#fafafa] dark:bg-[#191919] border border-[#171717] dark:border-gray-700 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <i class="${project.icon} text-[#171717] dark:text-[#e5e5e5] text-6xl"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div class="text-white text-center px-4">
                <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                <div class="text-sm flex flex-wrap justify-center">${techList}</div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});