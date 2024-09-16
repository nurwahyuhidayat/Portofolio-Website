const nav = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= 60){
        nav.classList.add('nav-scroll');
    } else if (scrollPos <= 60) {
        nav.classList.remove('nav-scroll');
    }
})