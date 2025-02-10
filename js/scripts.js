// Load external scripts
const loadScript = (src, defer = false) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = defer;
    document.head.appendChild(script);
};

// Load FontAwesome
loadScript('https://kit.fontawesome.com/a076d05399.js', true);
loadScript('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/js/all.min.js', true);

// Load TypeIt
loadScript('https://cdn.jsdelivr.net/npm/typeit@8.6.0/dist/index.umd.js', true);

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-switcher').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});
