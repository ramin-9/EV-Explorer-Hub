

// javascript for navbar in mobile device
         const navbar = document.querySelector(".menu-icon");
         const navLinks = document.querySelector(".nav-item");
       
         navbar.addEventListener("click", () => {
           navLinks.classList.toggle("active");
         });
    
// for scrollbar


const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});