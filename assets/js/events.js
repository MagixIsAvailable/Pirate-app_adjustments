function joinEvent(eventId, eventName) {
    if (!isUserLoggedIn()) {
        alert('Please log in to join an event!');
        return false;
    }
    
    // Get existing events or initialize empty array
    let joinedEvents = JSON.parse(localStorage.getItem('joinedEvents')) || [];
    
    // Check if already joined
    if (joinedEvents.some(event => event.id === eventId)) {
        alert('You have already joined this event!');
        return false;
    }
    
    // Add new event
    joinedEvents.push({
        id: eventId,
        name: eventName,
        joinedDate: new Date().toISOString()
    });
    
    // Save to localStorage
    localStorage.setItem('joinedEvents', JSON.stringify(joinedEvents));
    alert(`You have successfully joined ${eventName}!`);
    return true;
}

function getJoinedEvents() {
    return JSON.parse(localStorage.getItem('joinedEvents')) || [];
}

function leaveEvent(eventId) {
    let joinedEvents = JSON.parse(localStorage.getItem('joinedEvents')) || [];
    const updatedEvents = joinedEvents.filter(event => event.id !== eventId);
    localStorage.setItem('joinedEvents', JSON.stringify(updatedEvents));
}

function loadJoinedEvents() {
    const eventsContainer = document.getElementById('joined-events');
    if (!eventsContainer) return;
    
    const events = getJoinedEvents();
    
    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>You have not joined any events yet.</p>';
        return;
    }
    
    const eventsList = events.map(event => `
        <div class="event-card">
            <h3>${event.name}</h3>
            <p>Joined on: ${new Date(event.joinedDate).toLocaleDateString()}</p>
            <button onclick="leaveEvent('${event.id}'); loadJoinedEvents();">Leave Event</button>
        </div>
    `).join('');
    
    eventsContainer.innerHTML = eventsList;
}