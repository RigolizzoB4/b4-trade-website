/*
 * B4 Soluções Financeiras - Interactive JavaScript
 * Mobile-First Implementation with UX/UI Enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE NAVIGATION
    // ===================================
    
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
            navbarToggle.classList.toggle('active');
            navbarNav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarNav.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                navbarNav.classList.remove('active');
                navbarToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navbarNav.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbarNav.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ===================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty hash or just #
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ===================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Update navigation highlighting on scroll
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // ANIMATED STATISTICS COUNTER
    // ===================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            hasAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const isYear = target === 1995;
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = isYear ? 1995 : 0;
                
                const timer = setInterval(() => {
                    if (isYear) {
                        stat.textContent = current;
                        if (current >= target) {
                            clearInterval(timer);
                        }
                    } else {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target + (target === 1000 ? '+' : target === 60 ? '+' : '');
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + (target === 1000 ? '+' : target === 60 ? '+' : '');
                        }
                    }
                }, 16);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    const animateElements = document.querySelectorAll('.service-card, .investment-card, .about-text, .about-image');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Use debounce for scroll events
    const debouncedScrollHandler = debounce(() => {
        highlightNavigation();
        animateStats();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Focus trap for mobile menu
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
            
            if (e.key === 'Escape') {
                navbarToggle.click();
            }
        });
    }
    
    if (navbarNav) {
        trapFocus(navbarNav);
    }
    
    console.log('✅ B4 Soluções Financeiras - Sistema JavaScript carregado com sucesso!');
    console.log('🎯 Mobile-first UX/UI implementado');
    console.log('📱 Responsivo para 375px+');
    console.log('♿ Recursos de acessibilidade ativos');
});