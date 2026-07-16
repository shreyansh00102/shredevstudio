// Shre Dev Studio main operations

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initPortfolioFilter();
  initTestimonialsCarousel();
  initFaqAccordion();
  initBackToTop();
  initWhatsAppTooltip();
  initDropdowns();
  initCardGlow();
  initCostCalculator();
  initMagneticButtons();
});

// Navbar scroll tracking and active link highlight
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Theme switcher
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggle = document.getElementById('theme-toggle');
  toggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// Mobile hamburger menu navigation
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navbar__menu');
  const overlay = document.querySelector('.mobile-overlay');
  const links = document.querySelectorAll('.navbar__link');

  function closeMenu() {
    hamburger.classList.remove('active');
    menu.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    hamburger.classList.add('active');
    menu.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
  }

  hamburger.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// Smooth scroll configuration
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Portfolio category filters
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.5s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Testimonials slider carousel
function initTestimonialsCarousel() {
  const track = document.querySelector('.testimonials__track');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonials__btn--prev');
  const nextBtn = document.querySelector('.testimonials__btn--next');
  const dots = document.querySelectorAll('.testimonials__dot');

  if (!track || cards.length === 0) return;

  let currentIndex = 0;
  let autoPlayInterval;

  function goToSlide(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(currentIndex - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(currentIndex + 1);
      startAutoPlay();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(i);
      startAutoPlay();
    });
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }
    startAutoPlay();
  }, { passive: true });

  startAutoPlay();
}

// FAQ accordion interactions
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });
}

// Scroll indicator & Back to Top progress button
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  const circle = document.getElementById('scroll-progress-circle');
  if (!btn || !circle) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  // Initialize progress stroke arrays
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    // Set circle progress stroke-dashoffset
    const offset = circumference - (scrollPercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Toggle button visibility
    if (scrollTop > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  // Update on scroll
  window.addEventListener('scroll', updateProgress);
  
  // Initialize on load
  updateProgress();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Auto-show WhatsApp button tooltip
function initWhatsAppTooltip() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (!whatsappBtn) return;

  // Show tooltip after 2.5 seconds to catch attention
  setTimeout(() => {
    whatsappBtn.classList.add('show-tooltip');
    
    // Auto-hide tooltip after 6 seconds
    setTimeout(() => {
      whatsappBtn.classList.remove('show-tooltip');
    }, 6000);
  }, 2500);
}

// Navigation action dropdown trigger
function initDropdowns() {
  const dropdown = document.querySelector('.dropdown');
  const trigger = document.querySelector('.dropdown__trigger');
  
  if (!dropdown || !trigger) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('show-menu');
    dropdown.classList.toggle('show-menu', !isOpen);
    trigger.setAttribute('aria-expanded', !isOpen);
  });

  // Close when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('show-menu');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

// Mouse movement spotlight lighting cards effect
function initCardGlow() {
  const cards = document.querySelectorAll('.service-card, .portfolio-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Dynamic budget projection estimator
function initCostCalculator() {
  const calculator = document.getElementById('project-calculator');
  if (!calculator) return;

  const serviceSelects = calculator.querySelectorAll('.calc-pill[data-type="service"]');
  const sizeSelects = calculator.querySelectorAll('.calc-pill[data-type="size"]');
  const urgencySelects = calculator.querySelectorAll('.calc-pill[data-type="urgency"]');
  const priceDisplay = calculator.querySelector('#calc-price-val');
  const quoteBtn = calculator.querySelector('#calc-quote-btn');
  const resultCard = calculator.querySelector('.calc-result-card');

  let selectedService = 'web';
  let selectedSize = 'medium';
  let selectedUrgency = 'standard';

  // Base Prices (INR)
  const pricing = {
    service: {
      web: 8000,
      app: 18000,
      seo: 5000
    },
    size: {
      basic: 0.7,
      medium: 1.0,
      custom: 2.2
    },
    urgency: {
      standard: 1.0,
      urgent: 1.3
    }
  };

  function updatePrice() {
    const base = pricing.service[selectedService];
    const multiplierSize = pricing.size[selectedSize];
    const multiplierUrgency = pricing.urgency[selectedUrgency];
    const finalPrice = Math.round(base * multiplierSize * multiplierUrgency);

    priceDisplay.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;

    // Update background photo of result card based on selected service
    const serviceBgs = {
      web: 'assets/images/calc-web.png',
      app: 'assets/images/calc-app.png',
      seo: 'assets/images/calc-seo.png'
    };
    if (resultCard) {
      resultCard.style.backgroundImage = `url('${serviceBgs[selectedService]}')`;
    }

    // Update WhatsApp link text on CTA button
    const serviceNames = { web: 'Web Development', app: 'Android App Development', seo: 'SEO & Marketing' };
    const sizeNames = { basic: 'Basic', medium: 'Medium/Standard', custom: 'Enterprise/Custom' };
    const urgencyNames = { standard: 'Flexible (Standard)', urgent: 'Fast Delivery' };

    const messageText = `*Project Estimate - Shre Dev Studio*\n` +
                        `-----------------------------------------\n` +
                        `*🛠️ Service:* ${serviceNames[selectedService]}\n` +
                        `*📏 Scale/Complexity:* ${sizeNames[selectedSize]}\n` +
                        `*⏱️ Timeline:* ${urgencyNames[selectedUrgency]}\n` +
                        `*💰 Est. Cost:* ₹${finalPrice.toLocaleString('en-IN')}`;

    const waPhone = '917068286755';
    quoteBtn.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(messageText)}`;
  }

  // Explicit click handler to guarantee redirection works on all devices/browsers
  quoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceNames = { web: 'Web Development', app: 'Android App Development', seo: 'SEO & Marketing' };
    const sizeNames = { basic: 'Basic', medium: 'Medium/Standard', custom: 'Enterprise/Custom' };
    const urgencyNames = { standard: 'Flexible (Standard)', urgent: 'Fast Delivery' };
    const priceText = priceDisplay.textContent;

    const messageText = `*Project Estimate - Shre Dev Studio*\n` +
                        `-----------------------------------------\n` +
                        `*🛠️ Service:* ${serviceNames[selectedService]}\n` +
                        `*📏 Scale/Complexity:* ${sizeNames[selectedSize]}\n` +
                        `*⏱️ Timeline:* ${urgencyNames[selectedUrgency]}\n` +
                        `*💰 Est. Cost:* ${priceText}`;

    const waPhone = '917068286755';
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
  });

  function handleSelect(elements, callback) {
    elements.forEach(el => {
      el.addEventListener('click', () => {
        elements.forEach(x => x.classList.remove('active'));
        el.classList.add('active');
        callback(el.dataset.value);
        updatePrice();
      });
    });
  }

  handleSelect(serviceSelects, (val) => { selectedService = val; });
  handleSelect(sizeSelects, (val) => { selectedSize = val; });
  handleSelect(urgencySelects, (val) => { selectedUrgency = val; });

  // Initial calculation
  updatePrice();
}

function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.btn--primary, .btn--secondary, .btn--accent, .hero-cinematic__play-btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transition = 'none';
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      
      const text = btn.querySelector('span');
      if (text) {
        text.style.transition = 'none';
        text.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      btn.style.transform = '';
      
      const text = btn.querySelector('span');
      if (text) {
        text.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.transform = '';
      }
    });
  });
}

