document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Initialize with the stored theme or default to dark mode
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.classList.add(storedTheme);
    } else {
        body.classList.add('dark-mode');
    }
});
