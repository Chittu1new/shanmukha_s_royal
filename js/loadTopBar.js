document.addEventListener("DOMContentLoaded", function() {
    fetch("topbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("topbar").innerHTML = data;
            // Initialize TypeIt after the top bar is loaded
            new TypeIt("#name", {
                strings: "Mr.NoOne",
                speed: 100,
                waitUntilVisible: true
            }).go();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
