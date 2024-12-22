const bell = document.getElementById('notificationBell');
const dropdown = document.getElementById('notificationsDropdown');

// Toggle dropdown visibility
bell.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Hide the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!bell.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

const userIcon = document.getElementById('userIcon');
const userDropdown = document.getElementById('userDropdown');

// Toggle dropdown visibility
userIcon.addEventListener('click', () => {
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

// Hide the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.style.display = 'none';
    }
});
