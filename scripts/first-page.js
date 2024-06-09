document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = data;

            // Now, clone the template content
            const navbarTemplate = document.getElementById('navbar-template').content;
            navbarContainer.innerHTML = '';  // Clear the existing template HTML
            navbarContainer.appendChild(navbarTemplate.cloneNode(true));

            // JavaScript for navbar in mobile device
            const navbar = document.querySelector(".menu-icon");
            const navLinks = document.querySelector(".nav-item");

            navbar.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });

            const toggler = document.getElementById('theme-toggle');
            toggler.addEventListener('change', function () {
                if (this.checked) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
});




