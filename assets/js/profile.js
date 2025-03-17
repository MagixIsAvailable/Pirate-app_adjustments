
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      window.location.href = '../index.html';
      return;
    }
    
    // Update username
    document.querySelector('.username').textContent = currentUser.username;
    
    // Load profile data if exists
    const profileData = JSON.parse(localStorage.getItem(`profile_${currentUser.id}`)) || {};
    document.getElementById('profile-name').value = profileData.name || '';
    document.getElementById('profile-email').value = profileData.email || currentUser.email || '';
    document.getElementById('profile-major').value = profileData.major || '';
    document.getElementById('profile-year').value = profileData.year || '1';
    document.getElementById('profile-bio').value = profileData.bio || '';
    
    // Handle form submission
    document.getElementById('profile-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const updatedProfile = {
        name: document.getElementById('profile-name').value,
        email: document.getElementById('profile-email').value,
        major: document.getElementById('profile-major').value,
        year: document.getElementById('profile-year').value,
        bio: document.getElementById('profile-bio').value
      };
      
      localStorage.setItem(`profile_${currentUser.id}`, JSON.stringify(updatedProfile));
      alert('Profile updated successfully!');
    });
    
    // Load joined events
    loadJoinedEvents();
  });
  
  function loadJoinedEvents() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const joinedEvents = JSON.parse(localStorage.getItem(`joinedEvents_${currentUser.id}`)) || [];
    const eventsContainer = document.getElementById('joined-events');
    
    if (joinedEvents.length === 0) {
      return; // Keep the "no events" message
    }
    
    // Clear no events message
    eventsContainer.innerHTML = '';
    
    joinedEvents.forEach(eventId => {
      const allEvents = JSON.parse(localStorage.getItem('events')) || [];
      const event = allEvents.find(e => e.id === eventId);
      
      if (event) {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item';
        eventElement.innerHTML = `
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
        `;
        eventsContainer.appendChild(eventElement);
      }
    });
  }