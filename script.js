// 1. Grab the button element from the HTML
const themeButton = document.getElementById('theme-btn');

// 2. Listen for a user clicking the button
themeButton.addEventListener('click', function() {
    // 3. Toggle the 'dark-mode' class on the entire body
    document.body.classList.toggle('dark-mode');
});
