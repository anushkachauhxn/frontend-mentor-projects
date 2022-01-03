var navIcon = document.querySelector('.nav-icon'),
    navLinks = document.querySelector('.nav-links');

/* Toggle between showing and hiding the navigation menu links 
   when the user clicks on the hamburger menu / bar icon */
navIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
