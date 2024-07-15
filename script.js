document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nav');
    let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-50px"; // Adjust based on the navbar height
        }
        prevScrollpos = currentScrollPos;
    }
});
