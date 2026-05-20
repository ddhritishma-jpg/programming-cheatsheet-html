// Create Stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) { navbar.classList.add('scrolled'); } 
    else { navbar.classList.remove('scrolled'); }
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showSection(section) {
    scrollToSection('examples');
    setTimeout(() => {
        if (section === 'html') switchTab('html');
        else if (section === 'css') switchTab('css');
    }, 500);
}

// Tab Switching
function switchTab(tab) {
    const htmlTab = document.getElementById('html-tab');
    const cssTab = document.getElementById('css-tab');
    const htmlContent = document.getElementById('html-content');
    const cssContent = document.getElementById('css-content');
    
    if (!htmlTab) return;
    
    if (tab === 'html') {
        htmlTab.classList.add('active'); cssTab.classList.remove('active');
        htmlContent.classList.add('active'); cssContent.classList.remove('active');
    } else {
        cssTab.classList.add('active'); htmlTab.classList.remove('active');
        cssContent.classList.add('active'); htmlContent.classList.remove('active');
    }
}

// Toggle Example
function toggleExample(id) {
    const output = document.getElementById(id);
    if (output) output.classList.toggle('show');
}

// Run Code
function runCode(id) {
    const output = document.getElementById(id);
    if (output) {
        output.classList.add('show');
        setTimeout(() => output.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
}

// Init
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();
});