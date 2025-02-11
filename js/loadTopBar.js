document.addEventListener('DOMContentLoaded', function() {
    // Load the topbar
    fetch('topbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initNameTyping();
        })
        .catch(error => console.error('Error loading the topbar:', error));

    // Function to initialize the name typing animation
    function initNameTyping() {
        new TypeIt('#name', {
            strings: 'Mr.NoOne',
            speed: 100,
            loop: false,
            cursor: false,
        }).go();
    }
});
