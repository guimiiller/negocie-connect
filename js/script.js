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



let swiper = null; // Variável global para armazenar a instância do Swiper

// Função para inicializar ou destruir o Swiper conforme a largura da tela
function initSwiper() {
    if (window.innerWidth < 769 && swiper === null) {
        // Inicializa o Swiper apenas em telas menores que 769px
        swiper = new Swiper('.swiper-container', {
            grabCursor: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1, // Define o número de slides visíveis
            breakpoints: {
                769: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    } else if (window.innerWidth >= 769 && swiper !== null) {
        // Destrói o Swiper se a tela for maior ou igual a 769px
        swiper.destroy();
        swiper = null;
    }
}

// Chama a função inicialmente ao carregar a página
initSwiper();

// Chama a função sempre que a largura da tela for alterada
window.addEventListener('resize', () => {
    initSwiper();
});


let swiperPartners = null; // Variável global para armazenar a instância do Swiper

// Função para inicializar ou destruir o Swiper conforme a largura da tela
function initSwiperPartners() {
    if (window.innerWidth < 769 && swiperPartners === null) {
        // Inicializa o Swiper apenas em telas menores que 769px
        swiperPartners = new Swiper('.partners-swiper', {
            grabCursor: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1, // Define o número de slides visíveis
            breakpoints: {
                769: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    } else if (window.innerWidth >= 769 && swiperPartners !== null) {
        // Destrói o Swiper se a tela for maior ou igual a 769px
        swiperPartners.destroy();
        swiperPartners = null;
    }
}

// Chama a função inicialmente ao carregar a página
initSwiperPartners();

// Chama a função sempre que a largura da tela for alterada
window.addEventListener('resize', () => {
    initSwiperPartners();
});


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials-slider');
    const slides = document.querySelectorAll('.testimonials-card');
    let currentSlide = 1; // Começa no segundo slide para destacar o do meio
    const totalSlides = slides.length;

    // Função para atualizar o slide ativo e mover o contêiner
    function updateSlides() {
        const offset = -(currentSlide - 1) * (100 / 3); // Ajusta a posição para o card central
        slider.style.transform = `translateX(${offset}%)`; // Move o slider para a posição

        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.opacity = '0.5'; // Restaura a opacidade de todos os slides
            slide.style.transform = 'scale(0.9)'; // Reduz o tamanho dos slides não ativos

            if (index === currentSlide) {
                slide.classList.add('active'); // Adiciona a classe ativa ao slide central
                slide.style.opacity = '1'; // Destaca o slide ativo
                slide.style.transform = 'scale(1)'; // Tamanho normal do slide ativo
            }
        });
    }

    // Botão de próximo slide
    document.getElementById('next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Vai para o próximo slide
        updateSlides();
    });

    // Botão de slide anterior
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Vai para o slide anterior
        updateSlides();
    });

    updateSlides(); // Atualiza os slides ao carregar a página
});