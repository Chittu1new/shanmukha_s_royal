document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const viewCommentsButton = document.getElementById('view-comments');

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    viewCommentsButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Implement the logic to view comments
    });
});
