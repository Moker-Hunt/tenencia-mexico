// Script para mejorar la apariencia visual y la interactividad de los elementos de la página

document.addEventListener('DOMContentLoaded', function() {
    // Mejorar los pasos numerados
    enhanceSteps();
    
    // Mejorar las tarjetas de beneficios
    enhanceBenefitCards();
    
    // Añadir efecto de scroll al header
    handleHeaderScroll();
    
    // Añadir efectos a las tarjetas informativas
    enhanceInfoCards();
});

// Función para mejorar los pasos numerados
function enhanceSteps() {
    const steps = document.querySelectorAll('.steps li');
    
    steps.forEach((step, index) => {
        // Añadir clase para animación escalonada
        step.style.animationDelay = `${index * 0.1}s`;
        step.classList.add('fade-in');
        
        // Crear un contenedor para el número y añadirlo si no existe
        if (!step.querySelector('.step-number')) {
            const stepNumber = document.createElement('div');
            stepNumber.classList.add('step-number');
            stepNumber.textContent = index + 1;
            step.prepend(stepNumber);
        }
        
        // Añadir eventos de interacción
        step.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        step.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

// Función para mejorar las tarjetas de beneficios
function enhanceBenefitCards() {
    const benefitCards = document.querySelectorAll('.beneficio-card');
    
    benefitCards.forEach((card, index) => {
        // Añadir clase para animación escalonada
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        
        // Añadir eventos de interacción
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

// Función para manejar el efecto de scroll en el header
function handleHeaderScroll() {
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Añadir clase cuando se hace scroll hacia abajo
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Ocultar/mostrar header según dirección de scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Función para mejorar las tarjetas informativas
function enhanceInfoCards() {
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach((card, index) => {
        // Añadir clase para animación escalonada
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        
        // Añadir eventos de interacción
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

// Añadir animaciones adicionales cuando los elementos entran en el viewport
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos animables
    const animatableElements = document.querySelectorAll('.steps li, .beneficio-card, .info-card, article h2');
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});
