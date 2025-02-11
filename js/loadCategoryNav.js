document.addEventListener('DOMContentLoaded', function() {
    // Load the category navigation bar
    fetch('category-nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading the category navigation bar:', error));
});
