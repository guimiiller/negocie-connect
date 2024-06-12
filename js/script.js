const negocieBtn = document.getElementById('negocieBtn');
const negocieCircle = document.querySelector('.negocie-circle');
const imgAnimation1 = document.getElementById('imgAnimation1');
const imgAnimation2 = document.getElementById('imgAnimation2');


const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
});



const header = document.getElementById("header");

function toggleHeaderOnScroll() {
    if (window.innerWidth <= 801 && window.scrollY > 0) {
        header.classList.add("show-header");
    } else {
        header.classList.remove("show-header");
    }
}

window.addEventListener("scroll", toggleHeaderOnScroll);
window.addEventListener("resize", toggleHeaderOnScroll);

toggleHeaderOnScroll();




/* SCROLL */
const target  = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', function(){
    animeScroll()
})
/* SCROLL */
