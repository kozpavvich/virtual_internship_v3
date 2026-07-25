// ===== Mobile Menu Toggle =====
document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    });
});

// ===== Close Mobile Menu When Clicking Outside =====
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (!nav || !mobileBtn) return;
    
    if (!nav.contains(e.target) && !mobileBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// ===== AI Assistant Modal Toggle =====
document.querySelectorAll('#ai-assistant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = document.getElementById('ai-assistant-modal');
        if (modal) {
            modal.classList.add('active');
        }
    });
});

// ===== Close Modal When Clicking Outside =====
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// ===== Close Modal Buttons =====
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
        }
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== Add Active Class to Current Nav Link =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath.split('/').pop())) {
            link.classList.add('active');
        }
    });
});

// ===== Animate Elements on Scroll =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .stat-card, .team-member, .faq-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card, .stat-card, .team-member, .faq-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on page load
    animateOnScroll();
});

// Run on scroll
window.addEventListener('scroll', animateOnScroll);

// ===== Utility Functions =====
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// ===== Export for other scripts =====
window.AppUtils = {
    formatDate,
    formatPrice
};
