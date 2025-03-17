document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadFooter();
    checkAuthStatus();
});

function loadNavigation() {
    const navContainer = document.getElementById('navigation-placeholder');
    if (!navContainer) return;
    
    navContainer.innerHTML = `
        <nav class="navbar">
            <div class="logo">Student Connect</div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="pages/events.html">Events</a></li>
                <li><a href="pages/join-events.html">Join Events</a></li>
                <li><a href="pages/learn-more.html">Learn More</a></li>
                <li class="auth-hide"><a href="pages/login.html">Login</a></li>
                <li class="auth-show" style="display: none;"><a href="pages/profile.html">Profile</a></li>
                <li class="auth-show" style="display: none;"><a href="#" onclick="logoutUser(); return false;">Logout</a></li>
            </ul>
        </nav>
    `;

    // Fix relative paths based on current page location
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/pages/');
    
    if (isInSubfolder) {
        // We're in a subfolder, so adjust the links
        const links = navContainer.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href').startsWith('pages/')) {
                link.setAttribute('href', link.getAttribute('href').replace('pages/', ''));
            } else if (link.getAttribute('href') === 'index.html') {
                link.setAttribute('href', '../index.html');
            } else if (!link.getAttribute('href').startsWith('#')) {
                link.setAttribute('href', '../' + link.getAttribute('href'));
            }
        });
    }
}

function loadFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;
    
    footerContainer.innerHTML = `
        <footer class="footer">
            <p>&copy; 2025 Student Connect - Connecting Students Worldwide</p>
        </footer>
    `;
}