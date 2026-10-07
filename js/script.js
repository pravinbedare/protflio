/**
 * Portfolio JavaScript
 * Pravin Rajendra Bedare - Java Full Stack Developer
 */

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initThemeToggle();
    initCodeWindowTabs();
    initSkillFilters();
    initScrollSpyAndProgress();
    initClipboardCopy();
    initContactForm();
    initBackToTop();
    initMobileNavAutoClose();
    initPrintResume();
});

/* ==========================================================================
   1. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const phrases = [
        "Java Full Stack Developer",
        "Spring Boot & Spring MVC",
        "RESTful APIs & Backend Logic",
        "MySQL Database Specialist",
        "Clean Code & OOP Advocate"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 45;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 350; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ==========================================================================
   2. THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Retrieve saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            showToast(`Switched to ${newTheme.toUpperCase()} theme`);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        if (themeIcon) {
            if (theme === 'light') {
                themeIcon.className = 'fa-solid fa-sun theme-icon text-warning';
            } else {
                themeIcon.className = 'fa-solid fa-moon theme-icon';
            }
        }
    }
}

/* ==========================================================================
   3. CODE WINDOW TABS
   ========================================================================== */
function initCodeWindowTabs() {
    const tabBtns = document.querySelectorAll('.code-tab');
    const paneJava = document.getElementById('pane-java');
    const paneJson = document.getElementById('pane-json');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.getAttribute('data-tab');
            if (tab === 'java') {
                paneJava.classList.remove('d-none');
                paneJava.classList.add('active');
                paneJson.classList.add('d-none');
                paneJson.classList.remove('active');
            } else if (tab === 'json') {
                paneJson.classList.remove('d-none');
                paneJson.classList.add('active');
                paneJava.classList.add('d-none');
                paneJava.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   4. SKILL FILTERS
   ========================================================================== */
function initSkillFilters() {
    const filterBtns = document.querySelectorAll('.skill-tab-btn');
    const skillItems = document.querySelectorAll('.skill-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   5. SCROLL PROGRESS & SCROLLSPY
   ========================================================================== */
function initScrollSpyAndProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const navbar = document.getElementById('main-navbar');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const sections = document.querySelectorAll('section, header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Sticky Navbar styling
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link tracking
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   6. CLIPBOARD COPY UTILITY
   ========================================================================== */
function initClipboardCopy() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied "${textToCopy}" to clipboard!`);
                const icon = btn.querySelector('i');
                if (icon) {
                    const originalClass = icon.className;
                    icon.className = 'fa-solid fa-check text-success';
                    setTimeout(() => {
                        icon.className = originalClass;
                    }, 2000);
                }
            }).catch(err => {
                showToast(`Unable to copy text`);
            });
        });
    });
}

/* ==========================================================================
   7. CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contact-submit-btn');
    const submitText = document.getElementById('btn-submit-text');
    const submitIcon = document.getElementById('btn-submit-icon');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }

        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        // Loading state
        submitBtn.disabled = true;
        submitText.textContent = 'Preparing Message...';
        submitIcon.className = 'fa-solid fa-spinner fa-spin';

        setTimeout(() => {
            // Compose mailto fallback link
            const mailtoUri = `mailto:pravinbedare20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
            
            submitBtn.disabled = false;
            submitText.textContent = 'Send Message';
            submitIcon.className = 'fa-solid fa-paper-plane';

            showToast(`Thank you ${name}! Opening mail client to send message...`);
            
            // Trigger mailto client
            window.location.href = mailtoUri;

            contactForm.reset();
            contactForm.classList.remove('was-validated');
        }, 800);
    });
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================================================
   9. MOBILE NAV AUTO-CLOSE
   ========================================================================== */
function initMobileNavAutoClose() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');

    if (!navbarCollapse) return;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
}

/* ==========================================================================
   10. PRINT RESUME UTILITY
   ========================================================================== */
function initPrintResume() {
    const printBtn = document.getElementById('print-resume-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* ==========================================================================
   11. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message) {
    const toastElement = document.getElementById('liveToast');
    const toastMsgElement = document.getElementById('toast-message');

    if (!toastElement || !toastMsgElement) return;

    toastMsgElement.innerHTML = `<i class="fa-solid fa-circle-check text-info me-2"></i><span>${message}</span>`;
    const toast = new bootstrap.Toast(toastElement, { delay: 3500 });
    toast.show();
}
