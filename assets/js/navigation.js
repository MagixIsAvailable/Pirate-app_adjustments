// filepath: g:\ONE DRIVE RGU\OneDrive - Robert Gordon University\2nd Semester\Pirate Studies\GIT_webapge\Pirate-app\assets\js\navigation.js
document.addEventListener('DOMContentLoaded', function() {
  const nav = `
    <header>
      <div class="logo">
        <h1>Student Connect</h1>
      </div>
      <nav>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="join-events.html">Join Events</a></li>
          <li><a href="learn-more.html">Learn More</a></li>
          <li><a href="profile.html" class="active">Profile</a></li>
          <li><a href="#" id="logout-btn">Logout</a></li>
        </ul>
      </nav>
    </header>
  `;
  
  document.getElementById('navigation-placeholder').innerHTML = nav;
});