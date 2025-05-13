document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    let lastScrollTop = 0;
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        const spans = this.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    if (getCookie('cookiesAccepted')) {
        cookieConsent.style.display = 'none';
        mainContent.classList.remove('cookie-blur');
        footer.classList.remove('cookie-blur');
    } else {
        mainContent.classList.add('cookie-blur');
        footer.classList.add('cookie-blur');
    }
    
    acceptCookiesBtn.addEventListener('click', function() {
        setCookie('cookiesAccepted', 'true', 365);
        cookieConsent.style.display = 'none';
        mainContent.classList.remove('cookie-blur');
        footer.classList.remove('cookie-blur');
    });
    
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('#main-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (linkPath === 'index.html' && (currentLocation.endsWith('/') || currentLocation.endsWith('index.html'))) {
            link.classList.add('active');
        } else if (linkPath !== 'index.html' && currentLocation.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
});
