let navBar = document.querySelector('#header');

addEventListener('scroll', () => {
    let scrolltop = window.scrollY;

    if (scrolltop > 0) {
        navBar.classList.add('scrolling');
    } else {
        navBar.classList.remove('scrolling');
    }
});
