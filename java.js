 
 // Part 1
let Btnopen = document.getElementById('open');
let Btnclose = document.getElementById('close');
let container = document.querySelectorAll('.container');

Btnclose.onclick = function() {
    container.forEach(container => {
        container.classList.add('hide');
    });
    Btnclose.classList.add('hide');
    Btnopen.classList.remove('hide');
};

Btnopen.onclick = function() {
    container.forEach(container => {
        container.classList.remove('hide');
    });
    Btnclose.classList.remove('hide');
    Btnopen.classList.add('hide');
};

/* Part 2
document.addEventListener("DOMContentLoaded", function() {
    // Initialize TweenMax animations after the DOM has loaded
    TweenMax.from('.home--title', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
    TweenMax.from('.home-discription', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
    TweenMax.from('.orange-juice1', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
    TweenMax.from('.orange-juice2', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
});
*/