// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa para dispositivos móviles
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Filtro de plantillas
    const filterButtons = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Activar botón
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar plantillas
            const filter = button.getAttribute('data-filter');
            
            templateCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Animación de aparecer
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = 0;
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Acordeón de FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alternar el estado activo de la pregunta actual
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todas las preguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.faq-icon').innerHTML = '<i class="fas fa-plus"></i>';
            });
            
            // Abrir la pregunta actual si no estaba activa
            if (!isActive) {
                faqItem.classList.add('active');
                const answer = faqItem.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                faqItem.querySelector('.faq-icon').innerHTML = '<i class="fas fa-minus"></i>';
            }
        });
    });
    
    // Slider de testimonios
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialsSlider.classList.add('active');
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialsSlider.classList.remove('active');
        });
        
        testimonialsSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialsSlider.classList.remove('active');
        });
        
        testimonialsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2; // Velocidad de desplazamiento
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Avanzar automáticamente
        let slideIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        if (testimonials.length > 0) {
            setInterval(() => {
                slideIndex++;
                if (slideIndex >= testimonials.length) {
                    slideIndex = 0;
                    testimonialsSlider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    testimonialsSlider.scrollTo({
                        left: testimonials[slideIndex].offsetLeft - 30,
                        behavior: 'smooth'
                    });
                }
            }, 5000);
        }
    }
    
    // Navegación suave al hacer clic en enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Obtener posición considerando navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar efecto al hacer scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Cambiar apariencia de navbar al hacer scroll
        if (scrollTop > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px var(--shadow-color)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 15px var(--shadow-color)';
        }
        
        // Ocultar/mostrar navbar al hacer scroll hacia arriba/abajo
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Scroll hacia abajo
            navbar.style.top = '-80px';
        } else {
            // Scroll hacia arriba
            navbar.style.top = '0';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Validación de formularios
    const contactForm = document.querySelector('.contact-form');
    const createForm = document.querySelector('.create-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const email = document.getElementById('email').value;
            const whatsapp = document.getElementById('whatsapp').value;
            
            if (!validateEmail(email)) {
                showFormError('Por favor, introduce un correo electrónico válido');
                return;
            }
            
            if (!whatsapp || whatsapp.length < 8) {
                showFormError('Por favor, introduce un número de WhatsApp válido');
                return;
            }
            
            // Simulación de envío exitoso
            contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>¡Gracias por tu mensaje!</h3><p>Te contactaremos a la brevedad posible.</p></div>';
        });
    }
    
    if (createForm) {
        createForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const agentName = document.getElementById('agent-name').value;
            const agentDescription = document.getElementById('agent-description').value;
            
            if (!agentName || agentName.length < 3) {
                showFormError('Por favor, introduce un nombre válido para tu asistente');
                return;
            }
            
            if (!agentDescription || agentDescription.length < 20) {
                showFormError('Por favor, describe con más detalle cómo debe comportarse tu asistente');
                return;
            }
            
            // Simulación de envío exitoso
            createForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>¡Tu asistente está siendo creado!</h3><p>Te redirigiremos a tu panel en unos segundos...</p></div>';
            
            // Redirección simulada
            setTimeout(() => {
                // Aquí iría la redirección real
                console.log('Redirigiendo al dashboard...');
            }, 3000);
        });
    }
    
    // Efectos de animación al hacer scroll
    const elements = document.querySelectorAll('.fade-in-element');
    
    // Opciones del observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
    
    // Callback del observer
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }
    
    // Crear observer
    const observer = new IntersectionObserver(callback, options);
    
    // Observar elementos
    elements.forEach(element => {
        observer.observe(element);
    });

    // Efecto paralaje en sección hero
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (document.querySelector('.hero-image')) {
            document.querySelector('.hero-image').style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });

    // Animación de contador en sección de beneficios (para futuros números estadísticos)
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // Duración en milisegundos
        const stepTime = 20; // Intervalo en milisegundos
        const totalSteps = duration / stepTime;
        const stepValue = target / totalSteps;
        
        let current = 0;
        const timer = setInterval(() => {
            current += stepValue;
            el.textContent = Math.round(current);
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Iniciar animación de contadores cuando sean visibles
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Función para mostrar errores en formularios
function showFormError(message) {
    // Buscar o crear contenedor de error
    let errorContainer = document.querySelector('.form-error');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'form-error';
        document.querySelector('.form-field').parentNode.prepend(errorContainer);
    }
    
    // Mostrar mensaje de error
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 3000);
}