// Función para cargar contenido dinámico
function loadSection(section) {
    const contentDiv = document.getElementById('content');
    switch (section) {
        case 'home':
            contentDiv.innerHTML = `
                <div class="hero-section text-center">
                    <h1>Bienvenidos a Doña Lire</h1>
                    <div id="carousel" class="carousel">
                        <div class="carousel-images">
                            <img src="assets/Logo.png" alt="Logo Doña Lire" loading="lazy">
                            <img src="assets/numero-1.png" alt="Premio Número 1" loading="lazy">
                            <img src="assets/numero-2.png" alt="Premio Número 2" loading="lazy">
                        </div>
                    </div>
                    <div class="info-section mt-4" id="texto-buton">
                        <p>Descubre nuestras deliciosas conservas, mermeladas y papayas en almíbar.</p> 
                        <a class="btn-custom-whatsapp" href="https://wa.me/56961422962">
                            <i class="fab fa-whatsapp"></i> Contáctanos
                        </a>
                    </div>
                </div>
            `;
            break;
        case 'conservas':
            loadConservas(contentDiv);
            break;
        case 'mermeladas':
            loadMermeladas(contentDiv);
            break;
        case 'papayas':
            loadPapayas(contentDiv);
            break;
        default:
            contentDiv.innerHTML = `
                <h1>Página no encontrada</h1>
                <p>Lo sentimos, la sección que buscas no está disponible.</p>
            `;
            break;
    }
}

// Event Listener para la navegación
document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const section = event.target.getAttribute('data-section');
        loadSection(section);
    });
});

// Manejar clic en el logo o nombre para cargar el main
document.getElementById('home-link').addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    loadSection('home'); // Carga la sección principal (home)
});

// Inicializar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadSection('home'); // Cargar la sección inicial
    startAutoSlide(); // Iniciar el carrusel automáticamente
});

// Variables globales para el carrusel
let currentSlideIndex = 0; // Índice actual del slide
let autoSlideInterval; // Intervalo para el cambio automático

// Función para mover el carrusel
function moveSlideAuto() {
    const slides = document.querySelectorAll('.carousel-images img'); // Todas las imágenes del carrusel
    const totalSlides = slides.length; // Número total de slides

    // Incrementar el índice del slide
    currentSlideIndex++;

    // Ciclar al inicio si se pasa del último slide
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }

    // Actualizar la posición del carrusel
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Función para iniciar el cambio automático de slides
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlideAuto(); // Cambiar al siguiente slide automáticamente
    }, 3500); // Cambia cada 3.5 segundos
}

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            // Cierra el menú colapsado
            navbarCollapse.classList.remove('show');
        }
    });
});
