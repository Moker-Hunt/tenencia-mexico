document.addEventListener('DOMContentLoaded', function() {
    enhanceSteps();
    
    enhanceBenefitCards();
    
    handleHeaderScroll();
    
    enhanceInfoCards();
});

function enhanceSteps() {
    const steps = document.querySelectorAll('.steps li');
    
    steps.forEach((step, index) => {
        
        step.style.animationDelay = `${index * 0.1}s`;
        step.classList.add('fade-in');
        
        if (!step.querySelector('.step-number')) {
            const stepNumber = document.createElement('div');
            stepNumber.classList.add('step-number');
            stepNumber.textContent = index + 1;
            step.prepend(stepNumber);
        }
        
        step.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        step.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

function enhanceBenefitCards() {
    const benefitCards = document.querySelectorAll('.beneficio-card');
    
    benefitCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

function handleHeaderScroll() {
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

function enhanceInfoCards() {
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach((card, index) => {
        
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

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
    
    const animatableElements = document.querySelectorAll('.steps li, .beneficio-card, .info-card, article h2');
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});
