// Skills Data
const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Angular", "Vue.js", 
  "SASS", "LESS", "GraphQL", "Bootstrap", "Tailwind CSS", "Material-UI", 
  "Redux", "Next.js", "Nuxt.js", "Jest", "Cypress", "MySQL", "Git", "GitHub",
  "Webpack", "Babel", "NPM", "Yarn", "Figma", "Adobe XD", "Chrome DevTools",
  "Postman", "Docker", "AWS", "Responsive Web Design", "UI/UX Design", "SPA",
  "PWA", "RESTful APIs", "Agile Methodologies", "Version Control", "CI/CD",
  "Cross-browser Compatibility", "Testing", "DevOps"
];

// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const skillsGrid = document.getElementById('skillsGrid');
const currentYear = document.getElementById('currentYear');

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('fa-bars');
  menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.querySelector('i').classList.add('fa-bars');
      menuBtn.querySelector('i').classList.remove('fa-times');
  });
});

// Populate Skills Grid
function populateSkills() {
  skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      skillItem.textContent = skill;
      skillsGrid.appendChild(skillItem);
  });
}

// Scroll Progress Bar
function createScrollProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
  });
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Update current year in footer
function updateYear() {
  currentYear.textContent = new Date().getFullYear();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateSkills();
  createScrollProgressBar();
  setupIntersectionObserver();
  updateYear();
});

// Add scroll event for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      navbar.style.boxShadow = 'none';
  }
});

// Prevent flash of unstyled content
document.documentElement.style.visibility = 'visible';