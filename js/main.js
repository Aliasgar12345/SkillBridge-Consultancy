const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.animate')
    .forEach(el => observer.observe(el));

    /* ------------- NAVBAR: MOBILE MENU TOGGLE ------------- */

        // Select hamburger icon and navigation menu list
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        // When hamburger is clicked, toggle "active" class on both elements
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // When any nav link is clicked, close the mobile menu (better UX)
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });