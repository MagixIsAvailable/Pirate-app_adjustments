function loginUser(username, password) {
    // Mock authentication - would be replaced with real auth in production
    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        return true;
    }
    return false;
}

function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}

function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function getCurrentUser() {
    return localStorage.getItem('username');
}

function checkAuthStatus() {
    if (isUserLoggedIn()) {
        document.querySelectorAll('.auth-hide').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.auth-show').forEach(el => {
            el.style.display = 'block';
        });
        
        const usernameElements = document.querySelectorAll('.username');
        if (usernameElements) {
            usernameElements.forEach(el => {
                el.textContent = getCurrentUser();
            });
        }
    } else {
        document.querySelectorAll('.auth-hide').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.auth-show').forEach(el => {
            el.style.display = 'none';
        });
    }
}