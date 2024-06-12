const negocieBtn = document.getElementById('negocieBtn');
const negocieCircle = document.querySelector('.negocie-circle');
const imgAnimation1 = document.getElementById('imgAnimation1');
const imgAnimation2 = document.getElementById('imgAnimation2');

if (negocieBtn) {
    negocieBtn.addEventListener('click', () => {
        console.log('Button clicked');

        imgAnimation1.classList.toggle('visible');
        imgAnimation2.classList.toggle('visible');

        if (imgAnimation1.classList.contains('visible')) {
            imgAnimation1.classList.add('animate-left');
            imgAnimation2.classList.add('animate-right');
        } else {
            imgAnimation1.classList.remove('animate-left');
            imgAnimation2.classList.remove('animate-right');
        }

        negocieCircle.classList.toggle('animate-scale');
    });
} else {
    console.error('negocieBtn not found');
}


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

// Chame a função uma vez para definir o estado inicial
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
