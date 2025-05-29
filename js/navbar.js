document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-brand">
                    <a href="index.html">Robbert Zillesen</a>
                </div>
                <div class="nav-menu">
                    <a href="index.html" class="nav-link" data-page="index">Home</a>
                    <a href="how.html" class="nav-link" data-page="how">How</a>
                    <a href="achievements.html" class="nav-link" data-page="achievements">Achievements</a>
                    <a href="career_timeline.html" class="nav-link" data-page="career_timeline">Career</a>
                    <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
                </div>
                <div class="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;

    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
        pageContainer.insertAdjacentHTML('beforebegin', navbarHTML);
    }

    setActivePage();
    
    setupMobileMenu();
});

function setActivePage() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (filename === '' || filename === 'index.html') {
        return 'index';
    }
    
    return filename.replace('.html', '');
}

function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
} 