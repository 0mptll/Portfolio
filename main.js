document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

        let scrollTopButton = document.querySelector('.footer-iconTop');
        scrollTopButton.classList.toggle('visible', window.scrollY > 100);
    };

    let scrollTopButton = document.querySelector('.footer-iconTop');
    scrollTopButton.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all video links
    const videoLinks = document.querySelectorAll('.video-link');
    
    // Add click event listener to each video link
    videoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the parent project box
            const projectBox = this.closest('.project-box');
            
            // Get the iframe in this project box
            const iframe = projectBox.querySelector('iframe');
            
            // Set the iframe src to the data-src value (this loads the video)
            iframe.src = iframe.getAttribute('data-src');
            
            // Add a class to show the video
            projectBox.classList.add('show-video');
            
            // Create a back button if it doesn't exist
            if (!projectBox.querySelector('.back-btn')) {
                const backBtn = document.createElement('button');
                backBtn.className = 'back-btn';
                backBtn.innerHTML = '<i class="fas fa-times"></i>';
                
                // Add click event to the back button
                backBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Stop the video by removing the src
                    iframe.src = '';
                    
                    // Hide the video
                    projectBox.classList.remove('show-video');
                });
                
                // Append the back button to the content wrapper
                projectBox.querySelector('.content-wrapper').appendChild(backBtn);
            }
        });
    });
});
