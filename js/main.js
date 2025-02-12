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

    // Dynamic Sidebar
    const sidebarList = document.getElementById('sidebar-list');
    const payloads = [
        { name: "XSS", file: "Payload/XSS.txt" },
        { name: "Open Redirect", file: "Payload/Open Redirect.txt" },
        { name: "File Transfer", file: "Payload/File Transfer.txt" },
        { name: "LFI", file: "Payload/LFI.txt" },
        { name: "TTY Spawn Shell", file: "Payload/TTY Spawn Shell.txt" },
        { name: "Linux Commands", file: "Payload/Linux Commands.txt" }
    ];

    payloads.forEach(payload => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${payload.name.toLowerCase().replace(/ /g, '-')}`;
        a.textContent = payload.name;
        a.dataset.file = payload.file;
        li.appendChild(a);
        sidebarList.appendChild(li);
    });

    const contentDiv = document.getElementById('payload-content');

    sidebarList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const filePath = event.target.dataset.file;
            fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = `
                        <h2>${event.target.textContent}</h2>
                        <div class="copy-box">
                            <pre>${data}</pre>
                            <button onclick="copyToClipboard()">Copy</button>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error loading file:', error);
                    contentDiv.innerHTML = `<p>Error loading content.</p>`;
                });
        }
    });

    window.copyToClipboard = function() {
        const copyText = document.querySelector('.copy-box pre').textContent;
        navigator.clipboard.writeText(copyText).then(() => {
            alert('Copied to clipboard!');
        }, () => {
            alert('Failed to copy text.');
        });
    };
});
