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

    // Make sidebar dynamic
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');
    const sections = document.querySelectorAll('main > h1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = sidebar.querySelector(`a[href="#${id}"]`);
            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
