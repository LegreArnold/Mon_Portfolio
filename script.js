

const burgerMenu = document.getElementById('burgericon');
const Menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
});



const backTOTopButton = document.getElementById("backToTop");


window.onscroll = function () {
    if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        backTOTopButton.style.display = "block";
    }
    else {
        backTOTopButton.style.direction = "none";
    }
};


backTOTopButton.onclick = function () {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"  
        }
    );
};







