// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initScrollReveal();
    initNavHighlight();
    initThemeToggle();
    initHamburgerMenu();
    initProjectFilter();
    initContactForm();
    initSkillBars();
});

// ==================== TYPEWRITER EFFECT ====================
function initTypewriter() {
    const typedElement = document.getElementById("typed-role");
    if (!typedElement) return;
    
    const roles = [
        "Cloud Computing Enthusiast",
        "Problem Solver",
        "Tech Learner"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const revealElements = () => {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    };
    
    window.addEventListener("scroll", revealElements);
    revealElements();
}

// ==================== ACTIVE NAV HIGHLIGHT ====================
function initNavHighlight() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}

// ==================== THEME TOGGLE ====================
function initThemeToggle() {
    const themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;
    
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
    
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;
    
    const icon = themeBtn.querySelector("i");
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
}

// ==================== HAMBURGER MENU ====================
function initHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

// ==================== PROJECT FILTER ====================
function initProjectFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-grid .project-card");
    
    if (filterBtns.length === 0 || projectCards.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");
            
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden");
                    card.style.animation = "fadeIn 0.5s ease";
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    
    form.addEventListener("submit", handleSubmit);
    
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("blur", () => validateField(input));
        input.addEventListener("input", () => clearFieldError(input));
    });
}

function validateField(field) {
    const formGroup = field.closest(".form-group");
    const errorMessage = formGroup.querySelector(".error-message");
    let isValid = true;
    let message = "";
    
    if (!field.value.trim()) {
        isValid = false;
        message = "This field is required";
    } else if (field.type === "email" && !isValidEmail(field.value)) {
        isValid = false;
        message = "Please enter a valid email address";
    }
    
    if (!isValid) {
        showError(formGroup, errorMessage, message);
    } else {
        clearError(formGroup, errorMessage);
    }
    
    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(formGroup, errorElement, message) {
    formGroup.classList.add("error");
    errorElement.textContent = message;
}

function clearError(formGroup, errorElement) {
    formGroup.classList.remove("error");
    errorElement.textContent = "";
}

function clearFieldError(field) {
    const formGroup = field.closest(".form-group");
    const errorMessage = formGroup.querySelector(".error-message");
    clearError(formGroup, errorMessage);
}

function clearAllErrors() {
    document.querySelectorAll(".form-group").forEach(group => {
        group.classList.remove("error");
        const errorMsg = group.querySelector(".error-message");
        if (errorMsg) errorMsg.textContent = "";
    });
}

function handleSubmit(e) {
    e.preventDefault();
    
    clearAllErrors();
    
    const form = e.target;
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) return;
    
    const submitBtn = form.querySelector(".submit-btn");
    const formStatus = form.querySelector(".form-status");
    
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    formStatus.className = "form-status";
    
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        
        formStatus.className = "form-status success";
        formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
        
        form.reset();
        
        setTimeout(() => {
            formStatus.className = "form-status";
        }, 5000);
    }, 2000);
}

// ==================== SKILL BARS ANIMATION ====================
function initSkillBars() {
    const skillBars = document.querySelectorAll(".skill-bar");
    if (skillBars.length === 0) return;
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && !bar.classList.contains("animate")) {
                const progress = bar.querySelector(".skill-progress").getAttribute("data-progress");
                bar.style.setProperty("--progress", progress + "%");
                bar.classList.add("animate");
            }
        });
    };
    
    window.addEventListener("scroll", animateSkills);
    animateSkills();
}
