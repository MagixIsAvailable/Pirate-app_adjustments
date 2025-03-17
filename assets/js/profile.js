function saveProfile(name, email, interests) {
    if (!isUserLoggedIn()) {
        alert('Please log in to save a profile!');
        return false;
    }
    
    const username = getCurrentUser();
    const profile = {
        name,
        email,
        interests,
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(`profile-${username}`, JSON.stringify(profile));
    return true;
}

function getProfile() {
    if (!isUserLoggedIn()) return null;
    
    const username = getCurrentUser();
    const profileData = localStorage.getItem(`profile-${username}`);
    return profileData ? JSON.parse(profileData) : null;
}

function loadProfile() {
    const profile = getProfile();
    if (!profile) return;
    
    const nameEl = document.getElementById('profile-name');
    const emailEl = document.getElementById('profile-email');
    const interestsEl = document.getElementById('profile-interests');
    
    if (nameEl) nameEl.value = profile.name || '';
    if (emailEl) emailEl.value = profile.email || '';
    if (interestsEl) interestsEl.value = profile.interests || '';
}