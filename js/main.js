document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    new TypeIt("#name", {
        strings: "Mr.NoOne",
        speed: 100,
        waitUntilVisible: true
    }).go();

    themeSwitcher.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });

    // Initialize with dark mode
    body.classList.add('dark-mode');
});
